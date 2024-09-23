function inputValueNumber(id){
    const inputNumber = Number(document.getElementById(id).value)
    return inputNumber;
}
function textValueNumber(id){
    const textNumber = Number(document.getElementById(id).innerText)
    return textNumber;
}

document.getElementById('btn-home').addEventListener('click',function(){
    window.location.href ='./index.html'
})