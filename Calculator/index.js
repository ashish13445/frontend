
    var Calculation = document.getElementById("calculation");
    var result = document.getElementById("result");
    function insert(num) {
        Calculation.textContent += num;
        
    }

    function operation(op){
        
        if(op == 'clear'){ 
            Calculation.innerHTML = '';
            result.innerHTML = '';
        }
        else if(op == 'x'){
            var str = Calculation.innerHTML;
            str = str.substring(0, str.length-1);
            Calculation.innerHTML = str;
            result.innerHTML = '';
        }
        else if(op == '='){
            let x = Calculation.innerHTML;
            let y = eval(x);
            result.innerHTML = y;
            
        }
  
    }

   
