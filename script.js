// DOM Element
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");


const randomFunction = {
    lower: getLowerPass,
    upper: getUpperPass,
    number: getNumPass,
    symbol: getSymbolPass
}
// generate btn event listener
generateEl.addEventListener('click',()=>{
    const length = Number(lengthEl.value);
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNum   = numbersEl.checked;
    const hasSym   = symbolsEl.checked;


})
// Generate password function
function genPassword(lower, upper, number, symbol, length)
{
    let generatedPass = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );
    
}
// Generator Functions
function getLowerPass()
{
    return String.fromCharCode(Math.floor(Math.random()*26 + 97));
}
function getUpperPass()
{
    return String.fromCharCode(Math.floor(Math.random()*26 + 65));
}
function getNumPass()
{
    return String.fromCharCode(Math.floor(Math.random()*10 + 48));
}
function getSymbolPass()
{
    const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}