

function calculate() {
    var amount=document.getElementById('amount');
    var guest=document.getElementById('guest');
    var quality=document.getElementById('quality');
    var tipAmount=document.getElementById('tipAmount');
    const tip =((amount.value*quality.value)/guest.value).toFixed(2);
    amount.value='';
    guest.value='';
    quality.value='';
    if (tip==='NaN') {
        tipAmount.innerHTML="tip is 0$ each"
        showTipAmount();
    } else {
        tipAmount.innerHTML="tip is $"+ tip +"each";
        showTipAmount();
    }
}
function showTipAmount() {
    var x=tipAmount;
    x.className='show';
    setTimeout(function(){x.className=x.className.replace('show','');},3000);
}

function increase(count) {
    
}

// coolers
// https://colorhunt.co



