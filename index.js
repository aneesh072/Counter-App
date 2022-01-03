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
  mainNumner.innerText = parseInt(mainNumber.innerText) - 1; 
});

btnReset.addEventListener('click', ()=> {
  console.log("Reset");
  mainNumner.innerText = 0;
});
