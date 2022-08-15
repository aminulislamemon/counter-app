let count = 0;

const incrementBtn = document.getElementById('increment');
incrementBtn.addEventListener('click', function(){
    count = count + 1;
    const counterValue = document.getElementById('counter-value');
    counterValue.innerText = count;
})
const decrementBtn = document.getElementById('decrement');
decrementBtn.addEventListener('click', function(){
    count = count - 1;
    const counterValue = document.getElementById('counter-value');
    counterValue.innerText = count;
})