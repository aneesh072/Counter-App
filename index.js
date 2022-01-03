const btnIncrease = document.querySelector('#increment');
const btnDecrease = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const mainNumner = document.querySelector('#mainNumber')

btnIncrease.addEventListener('click', ()=>{
console.log("Increased");
mainNumner.innerText = parseInt(mainNumber.innerText) + 1; 
});


btnDecrease.addEventListener('click', ()=> {
  console.log("Decreased");
});

btnReset.addEventListener('click', ()=> {
  console.log("Reset");
});
