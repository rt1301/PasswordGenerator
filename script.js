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
    resultEl.innerText = genPassword(hasLower,hasUpper,hasNum,hasSym,length);

});
// Copy password to clipboard
clipboardEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if(!password)
    {
        return;
    }
    else
    {
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert("Password copied");
    }
})
// Generate password function
function genPassword(lower, upper, number, symbol, length)
{
    let generatedPass = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );
    if(typesCount === 0)
    {
        return '';
    }
    for(var i=0;i<length;i+=typesCount)
    {
        typesArr.forEach(type=>{
            const functionName = Object.keys(type)[0];
            generatedPass += randomFunction[functionName]();
        });
    }
    const finalPassword = generatedPass.slice(0, length);
    return finalPassword;
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