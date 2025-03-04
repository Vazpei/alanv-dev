
const screenR = document.querySelector('.resultado');
const screenOp = document.querySelector('.operacion');
const n1 = document.querySelector('.btn-name-1');
const n2 = document.querySelector('.btn-name-2');
const n3 = document.querySelector('.btn-name-3');
const n4 = document.querySelector('.btn-name-4');
const n5 = document.querySelector('.btn-name-5');
const n6 = document.querySelector('.btn-name-6');
const n7 = document.querySelector('.btn-name-7');
const n8 = document.querySelector('.btn-name-8');
const n9 = document.querySelector('.btn-name-9');
const n0 = document.querySelector('.btn-name-0');
const nPlus = document.querySelector('.btn-name-plus');
const nRest = document.querySelector('.btn-name-rest');
const nDiv = document.querySelector('.btn-name-div');
const nMult = document.querySelector('.btn-name-mult');
const nC = document.querySelector('.btn-name-c');
const nReset = document.querySelector('.btn-name-reset');
const nEqual = document.querySelector('.btn-name-equal');
const nPoint = document.querySelector('.btn-name-point');

let operators = ["-", "*", "+", "/"];
let tempValue = 0;
let newValue = 0;
let plus = false;
let rest = false;
let div = false;
let mult = false;
let ePlus = false;
let eRest = false;
let eDiv = false;
let eMult = false;
let total = 0;
let pointAvailable = true;
let activeOperator;
//variable para reafirmar si el valor esta completo;
let tempComplete = false;

n1.addEventListener('click',() => typeNumbers(1));
n2.addEventListener('click',() => typeNumbers(2));
n3.addEventListener('click',() => typeNumbers(3));
n4.addEventListener('click',() => typeNumbers(4));
n5.addEventListener('click',() => typeNumbers(5));
n6.addEventListener('click',() => typeNumbers(6));
n7.addEventListener('click',() => typeNumbers(7));
n8.addEventListener('click',() => typeNumbers(8));
n9.addEventListener('click',() => typeNumbers(9));
n0.addEventListener('click',() => typeNumbers(0));
nPoint.addEventListener('click',() => typePoint());
nReset.addEventListener('click',() => resetScreens());
nRest.addEventListener('click',() => typeSymbol('-'));
nPlus.addEventListener('click',() => typeSymbol('+'));
nDiv.addEventListener('click',() => typeSymbol('/'));
nMult.addEventListener('click',() => typeSymbol('*'));
nC.addEventListener('click',() => eraseLast());
nEqual.addEventListener('click',() => typeEqual());

function typeNumbers(v){
    console.log("TempComplete",tempComplete);
    if(tempComplete){
        screenR.textContent ='0';
        tempComplete = false;
    }
    if(screenR.textContent === '0'){
        screenR.textContent = '';
    }
    screenR.textContent = screenR.textContent + v;
}

function typeSymbol(s){
    //Guarda el valor temporal
    console.log('Active operator '+activeOperator);
    pointAvailable = true;
    if(tempValue !='0'){
        newValue = screenR.textContent;
    }else{
        tempValue = screenR.textContent;
        screenOp.textContent = tempValue + s;  
    }
    writeValues(s);
    console.log('newValue',newValue);
    console.log('Temp value '+ tempValue);
    makingOperation();
    selectOperation(s);
    activeOperator = s;
    tempComplete = true;
}

function typeEqual(){
    if(tempValue != '0'){
        console.log("new value assigned");
        newValue = screenR.textContent;
        console.log("Selecting Operation---------");
        selectOperation(activeOperator)
        makingOperation();
        screenOp.textContent = '';
        tempComplete = false;
        tempValue = 0;
        newValue = 0;
        allOperation = [];
        plus = false;
        rest = false;
        div = false;
        mult = false;
        tempComplete = true;
    }else{
        console.log("The operation can´t be processed only with one int");
    }
}

function typePoint(){
    console.log(screenOp.textContent);
    if(pointAvailable){
       screenR.textContent =screenR.textContent + '.';
    }else{
        console.log("Point already exists");
    }
    pointAvailable = false;
}

function resetScreens(){
    screenOp.textContent = '';
    screenR.textContent = '0';
    tempComplete = false;
    tempValue = 0;
    newValue = 0;
    allOperation = [];
    plus = false;
    rest = false;
    div = false;
    mult = false;
}

function writeValues(s){
    let sringCheck = screenOp.textContent;
    //checar si el ultimo valor es un simbolo
    sringCheck = sringCheck.charAt(sringCheck.length - 1);
    if(tempValue != 0 && newValue != 0 ){
        if(sringCheck == '+'
            || sringCheck == '-'
            || sringCheck == '*'
            || sringCheck == '/'
        ){
            screenOp.textContent = screenOp.textContent + newValue;
        }else{
            console.log("writing on OP......");
            screenOp.textContent = screenOp.textContent + s + newValue;
        } 
    }else{
        console.log("not complete data OP");
    }
}

function makingOperation(){
    //Operaciones
    console.log("makingOperation->>>>>>>>>>>>>>>");
    console.log("rest: ",rest);
    console.log("div: ",div);
    console.log("mult: ",mult);
    console.log("plus: ",plus);

    if(plus){
        total = parseFloat(tempValue) + parseFloat(newValue);
        screenR.textContent = total;
        tempValue = total;
        console.log('Total: ',total);
        newValue = 0;
        plus = false;
    }else if(rest){
        total = parseFloat(tempValue) - parseFloat(newValue);
        screenR.textContent = total;
        tempValue = total;
        newValue = 0;
        rest = false;
    }else if(div){
        if(newValue === 0){
            newValue = 1;
        }
        total = parseFloat(tempValue) / parseFloat(newValue);
        screenR.textContent = total;
        tempValue = total;
        newValue = 0;
        div = false;
    }
    else if(mult){
        total = parseFloat(tempValue) * parseFloat(newValue);
        screenR.textContent = total;
        tempValue = total;
        newValue = 0;
        mult = false;
    }
}

const selectOperation = s =>{
    switch(s){
        case '+':
            plus = true;
            rest = false;
            div = false;
            mult = false;
            break;
            case '-':
                plus = false;
                rest = true;
                div = false;
                mult = false;
                break;
                case '/':
                    plus = false;
                    rest = false;
                    div = true;
                    mult = false;
                    break;
                    case '*':
                        plus = false;
                        rest = false;
                        div = false;
                        mult = true;
                        break;
        default:
            console.log("System Error from SelectOperation");
            break;
    }
}

const eraseLast = () =>{
    let charToClean = screenR.textContent;
    if(charToClean != '0'){
        console.log("Lenght of Screen R",charToClean.length);
        if(charToClean.length == 1){
            screenR.textContent = '0';
            console.log("Only digit cleaned");
        }else{
            charToClean = charToClean.slice(0,-1);
            screenR.textContent = charToClean;
            console.log("pop the last one",charToClean);
        }
    }else{
        console.log("There is nothing to clean");
    }
}
