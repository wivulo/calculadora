document.addEventListener("DOMContentLoaded", ()=>{
    
    const txt_result = document.getElementById("result");
    const btn_enter = document.getElementById("enter");
    const btns_func = document.querySelectorAll(".function");
    const btns_numbers = document.querySelectorAll(".number");
    const btns_operations = document.querySelectorAll(".operation");
    let x="", y="", op, calc = 0;

    btns_numbers.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            if(!op){
                clearTxt()
                x += btn.innerHTML;
                add(x);

            }else{
                clearTxt()
                y += btn.innerHTML;
                add(y);
            }
        });
    });

    btns_operations.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            operation(btn.value);
        })
    })

    btns_func.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            func(btn.innerHTML);
        })
    })

    btn_enter.addEventListener("click", ()=>{
       calcular();
    })
    
    function result(result){
        clearTxt();
        clearNumbers();
        add(result);
    }

    function calcular(){
        if(op == "+"){
            calc = parseFloat(x) + parseFloat(y);
        }else if(op == "-"){
            calc = parseFloat(x) - parseFloat(y);
        }else if(op == "*"){
            calc = parseFloat(x) * parseFloat(y);
        }else if(op == "/"){
            calc = parseFloat(x) / parseFloat(y);
        }else if(calc == "%"){
            calc = parseFloat(x) % parseFloat(y);
        }

        result(calc);
    }
    
    function operation(value){
        clearTxt();
        op = value;
        add(op);
    }

    function func(f){
        if(f == "C"){
            txt_result.innerHTML = txt_result.innerHTML.substr(0, txt_result.innerHTML.length - 1);
        }
        else if(f == "AC"){
            clearTxt();
            clearNumbers();
            op="";
        }
    }

    function clearTxt(){
        txt_result.innerHTML = "";
    }

    function clearNumbers(){
        x="";
        y="";
        calc=0;
    }

    function add(value){
        if(txt_result.innerHTML.length < 14)
            txt_result.innerHTML = value;
    }
});