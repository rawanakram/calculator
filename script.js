const displayDiv = document.querySelector("#display");
let num1 ='';
let num2 ='';
let op ='';
function press(number){
    num1=num1+number;
    displayDiv.innerText = num1;
}
function clr(){
    num1 =" ";
    num2 =" ";
    op =" ";
    displayDiv.innerText = 0;
}

function setOP(operator){
    op=operator;
    num2=num1;
    num1=''; 
}
function calculate(){
    let result=0;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    if (op == "/" ){
        result= (num2/ num1);
    }
    if (op == "-" ){
        result=(num2-num1);
    }
    if (op == "*" ){
     result= (num2*num1);    
    }
    if (op == "+" ){
        result= (num2+num1);
    }
    displayDiv.innerText= result;
    console.log(typeof(num1),"num1");
    console.log(typeof(num2),"num2");
    console.log(typeof(result),"result");
}