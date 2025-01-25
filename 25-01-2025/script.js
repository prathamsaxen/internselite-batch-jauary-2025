let initialValue = 0;

let value = document.getElementById('value');
value.innerHTML = initialValue;


let PlusButton = document.getElementById('plus');
let MinusButton = document.getElementById('minus');

// console.log(PlusButton);
// console.log(MinusButton);



function Increase(){
    // initialValue = initialValue + 1;
    initialValue++;
    value.innerHTML = initialValue;

}

function Decrease(){
    initialValue--;
    value.innerHTML = initialValue;
}

PlusButton.addEventListener('click', Increase);
MinusButton.addEventListener('click',Decrease);