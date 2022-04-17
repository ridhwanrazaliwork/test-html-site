let counter = document.querySelector('h1');
let count = 1;
setInterval(()=>{
    counter.innerText = count;
    count++

    if(count > 11) location.replace('home.html')

},1000)
