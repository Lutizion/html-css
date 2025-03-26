let display = document.querySelector("#display");
let num = "";

function insertNumber(number){
    num += number;
    display.value = num;
}

function insertOperador(operator){
    if (num === "")
        return
    let lastOperator = num[num.length - 1];
    if ("+-*/.".includes(lastOperator) && "+-*/.".includes(operator)) return;
    num += operator
    display.value = num;
}

function clean(){
    num = ""
    display.value = num;
}

function inverter(){
    num = ((display.value)* -1);
    display.value = num;
}

function del(){
    num = num.slice(0, -1);
    display.value = num
}

function calcular(){
    let result = eval(num);
    try {
        if (result === ""){
            display.value = 'Error';
            return;
        }
        num = result;
        display.value = num
    } catch {
        display.value = 'Error';
    }
    num = "";
}

function calporcentagem(){
    let lastNumber = num.match(/([0-9.]+)$/);

    try {
        let result = (lastNumber[0])/100;
        num = num.replace(/([0-9.]+)$/, result);
        display.value = num;

    } catch {
        display.value = 'Error';
    }
}