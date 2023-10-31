const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const prodBtn = document.getElementById('prod')
const divBtn = document.getElementById('div')
const submitBtn = document.getElementById('submit')
const resultElement = document.getElementById('result')
let action = '+'
plusBtn.onclick = function(){
    action = '+'
}

minusBtn.onclick = function(){
    action = '-'
}

prodBtn.onclick = function(){
    action = '*'
}

divBtn.onclick = function(){
    action = '/'
}

function printResult(result){
    if (result < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeWithAction(inp1,inp2,znak){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (znak == '+'){
        return num1 + num2
    } else if(znak == '-') {
        return num1 - num2
    } else if (znak == '*'){
        return num1 * num2
    } else if (znak == '/'){
        return num1/num2
    }
}

submitBtn.onclick = function(){
    const result = computeWithAction(number1,number2,action)
    printResult(result)
}
