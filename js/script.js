const firstValue = document.querySelector('.C');
const secondValue = document.querySelector('.F');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const result = document.querySelector('.result');
const converterInput = document.getElementById('converter');
let isF = false;
let isC = true;


changeButton.addEventListener('click', ()=>{
    if (isF === false && isC === true) {
        isF = true;
        isC = false;
        firstValue.innerHTML = '°F';
        secondValue.innerHTML = '°C';
        document.title = 'Converter °F to °C'
        converterInput.setAttribute('placeholder', '°F')
    } else if (isF === true && isC === false) {
        isF = false;
        isC = true;
        firstValue.innerHTML = '°C';
        secondValue.innerHTML = '°F';
        document.title = 'Converter °C to °F'
        converterInput.setAttribute('placeholder', '°C')
    }
})
convertButton.addEventListener('click', ()=>{
     if (!converterInput.value) {
        result.style.visibility = 'visible';
        result.style.color = 'yellow';
        result.innerHTML = 'لطفا یک ورودی بدهید !';
    } else if (isNaN(converterInput.value)) {
        result.style.visibility = 'visible';
        result.style.color = 'red';
        result.innerHTML = 'لطفا یک عدد وارد کنید !';
    } else if (!isNaN(converterInput.value)) {
        if (isF === false && isC === true) {
            let converterInputValue = converterInput.value;
            let cToF = (converterInputValue * 9/5) + 32
            result.style.visibility = 'visible';
            result.style.color = 'white';
            result.innerHTML = converterInputValue + '°C = ' + cToF +'°F' 
        } else if (isF === true && isC === false) {
            let converterInputValue = converterInput.value;
            let fToC = (converterInputValue - 32) * 5/9
            result.style.visibility = 'visible';
            result.style.color = 'white';
            result.innerHTML = converterInputValue + '°F = ' + fToC +'°C'
        } 
    }
});

resetButton.addEventListener('click', ()=>{
    isF = false;
    isC = true;
    result.style.visibility = 'hidden';
    firstValue.innerHTML = '°C';
    secondValue.innerHTML = '°F';
    document.title = 'Converter °C to °F'
    converterInput.setAttribute('placeholder', '°C')
    converterInput.value = ''
})
