function calculator(op){
   let input1 = document.getElementById('num1').value ;
   let input2 = document.getElementById('num2').value ;
   let resultTag = document.getElementById('result');
   let num1 = parseFloat(input1);
   let num2 = parseFloat(input2);
   let result;


    if (op==='+'){
      let sum = num1 + num2;
      result = sum ;

    }
    else if(op==='-'){
        let sub = num1 - num2;
        result = sub ;
  
    }

 else if(op==='*'){
    let mul = num1 * num2;
      result = mul ;

    }
    else if(op==='/'){
       if(num2===0){
        result="error";
       }
       else{
        let divi = num1 / num2;
      result = divi ;

       }
    }
    else{
        result="Please enter two value";
    }
  resultTag.innerText="Result:"+ result;
}