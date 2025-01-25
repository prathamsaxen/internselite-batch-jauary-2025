let initialValue = 0;

const date = new Date();

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

// Array 
let data = [1,2,3,"Pratham","Saxena"];
console.log(data);

// A = 25
// B = 35
// C = 0
// D = 100
// M = -1

const arrData = [25,35,0,100,-1];
            //   0  1  2  3   4
        //   console.log(arrData[2])  

        function averageCalculator(){
            let sum = 0;
            for(let index = 0;index<arrData.length;index++)
            {
                sum = sum + arrData[index];
                //  sum+=arrData[index];
            }
            return sum/arrData.length;
        }

        console.log(averageCalculator())

// String and Array are kind of similar thing or you can say exact same thing.

// Objects => Key:Value
let dataObject={
    name:'Pratham Saxena',
    occupation:'Software Developement Engineer |',
}


console.log(dataObject.occupation);
console.log(date);


function printDate(){
    const display=document.getElementById('date-print');
    const date = new Date();
    display.innerHTML = date;
}

setInterval(()=>{
    printDate();
},5000)

// SetInterval = Each Time Frame uske ander wala content ko dubara execute karega

// document.getElementById('date-click').addEventListener('click',printDate)

// SetTimeOut =  we use when koi particular task ko instantly execute na karake ek particular time frame ke baad execute karnaa ho 
// SetInterval = Us tasko ko repeat krte rehna ek time frame ke 
