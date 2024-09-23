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
let noakhaliTotal =0;
let feniTotal =0;
let aidTotal =0;

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
    noakhaliTotal = noakhaliTotal + inputValue
    document.getElementById('current-balance').innerText = balance - inputValue
    document.getElementById('noakhali-amount').innerText = noakhaliTotal

    const historyTab = document.getElementById('history')
    const newDataElement = document.createElement('div')
    newDataElement.innerHTML = `<div class="p-10 bg-[#FFFFFF] shadow-lg" >
                <h1 class="font-bold text-lg">${inputValue}TK. is donated for ${headText}</h1>
                <p class="text-xs">Date : ${new Date().toLocaleDateString()} <br>
                Time : ${new Date().toLocaleTimeString()}
                </p>
            </div>`
            document.getElementById('history').insertBefore(newDataElement,historyTab.firstChild)
})

document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const balance = textValueNumber('current-balance')
    const addAmount = textValueNumber('feni-amount')
    const inputValue = inputValueNumber('feni-input')
    const headText = document.getElementById('feni-text').innerText
    if(balance<inputValue)
    {
       return alert('Not Enough Balance');
    }
    if(inputValue<0){
       return alert('Invalid Input')
    }
    feniTotal = feniTotal + inputValue
    document.getElementById('current-balance').innerText = balance - inputValue
    document.getElementById('feni-amount').innerText = feniTotal

    const historyTab = document.getElementById('history')
    const newDataElement = document.createElement('div')
    newDataElement.innerHTML = `<div  class="p-10 bg-[#FFFFFF] shadow-lg">
                <h1 class="font-bold text-lg">${inputValue}TK. is donated for ${headText}</h1>
                <p class="text-xs">Date : ${new Date().toLocaleDateString()} <br>
                Time : ${new Date().toLocaleTimeString()}
                </p>
            </div>`
            document.getElementById('history').insertBefore(newDataElement,historyTab.firstChild)
})

document.getElementById('aid-donate-btn').addEventListener('click',function(){
    const balance = textValueNumber('current-balance')
    const addAmount = textValueNumber('aid-amount')
    const inputValue = inputValueNumber('aid-input')
    const headText = document.getElementById('aid-text').innerText
    if(balance<inputValue)
    {
       return alert('Not Enough Balance');
    }
    if(inputValue<0){
       return alert('Invalid Input')
    }
    aidTotal = aidTotal + inputValue
    document.getElementById('current-balance').innerText = balance - inputValue
    document.getElementById('aid-amount').innerText = aidTotal

    const historyTab = document.getElementById('history')
    const newDataElement = document.createElement('div')
    newDataElement.innerHTML = `<div  class="p-10 bg-[#FFFFFF] shadow-lg">
                <h1 class="font-bold text-lg">${inputValue}TK. is donated for ${headText}</h1>
                <p class="text-xs">Date : ${new Date().toLocaleDateString()} <br>
                Time : ${new Date().toLocaleTimeString()}
                </p>
            </div>`
            document.getElementById('history').insertBefore(newDataElement,historyTab.firstChild)
})

document.getElementById('btn-history').addEventListener('click',function(){
    document.getElementById('top-donation-btn').classList.remove('bg-[#B4F461]' ,'text-#111111', 'font-bold')
    document.getElementById('top-donation-btn').classList.add('text-gray-500')
    document.getElementById('btn-history').classList.add('bg-[#B4F461]' ,'text-#111111', 'font-bold')
    document.getElementById('btn-history').classList.remove('text-gray-500')

    document.getElementById('all-section-college').classList.add('hidden')
    document.getElementById('history').classList.remove('hidden')
})

document.getElementById('top-donation-btn').addEventListener('click',function(){
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]' ,'text-#111111', 'font-bold')
    document.getElementById('btn-history').classList.add('text-gray-500')
    document.getElementById('top-donation-btn').classList.add('bg-[#B4F461]' ,'text-#111111', 'font-bold')
    document.getElementById('top-donation-btn').classList.remove('text-gray-500')
    document.getElementById('all-section-college').classList.remove('hidden')
    document.getElementById('history').classList.add('hidden')
})

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href ='./blog.html'
})

