document.getElementById('noakhali-donate-input').addEventListener('input',function(event){
    if(event.target.value>0){
        document.getElementById('noakhali-donate-btn').removeAttribute('disabled')
    }
})
document.getElementById('feni-input').addEventListener('input',function(event){
    if(event.target.value>0){
        document.getElementById('feni-donate-btn').removeAttribute('disabled')
    }
})
document.getElementById('aid-input').addEventListener('input',function(event){
    if(event.target.value>0){
        document.getElementById('aid-donate-btn').removeAttribute('disabled')
    }
})

document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const balance = textValueNumber('current-balance')
    const addAmount = textValueNumber('noakhali-amount')
    const inputValue = inputValueNumber('noakhali-donate-input')
    const headText = document.getElementById('noakhali-text').innerText
    if(balance<inputValue)
    {
       return alert('Not Enough Balance');
    }
    if(inputValue<0){
       return alert('Invalid Input')
    }
    document.getElementById('current-balance').innerText = balance - inputValue
    document.getElementById('noakhali-amount').innerText = inputValue

    const historyTab = document.getElementById('history')
    const newDataElement = document.createElement('div')
    newDataElement.innerHTML = `<div  >
                <h1 class="font-bold text-lg">${inputValue} is donated for ${headText}</h1>
                <p class="text-xs">Date : ${new Date().toLocaleDateString()} <br>
                Time : ${new Date().toLocaleTimeString()}
                </p>
            </div>`
            document.getElementById('history').insertBefore(newDataElement,historyTab.firstChild)
})