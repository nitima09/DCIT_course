function showResult(){
    const display=document.getElementById('h1');
    const n1=document.getElementById('num1');
    const userInput1=n1.value;
    const n2=document.getElementById('num2');
    const userInput2=n2.value;
    display.innerText=parseInt(userInput1)+parseInt(userInput2);
}