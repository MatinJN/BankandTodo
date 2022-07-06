let btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
    let kreditinput = parseInt( document.getElementById('k-miqdar').value);
let ayinput = parseFloat( document.getElementById('ay').value);
let faizinput = parseFloat( document.getElementById('faiz').value);

let totalmebleg = parseInt(kreditinput);
let totalfaiz = parseFloat(faizinput);
let totalay = parseFloat(ayinput);

let total=totalmebleg+(totalmebleg*totalfaiz/100);
let ayliq=total/totalay;
let odfaiz=totalmebleg*totalfaiz/100;
document.getElementById('total-meb').innerHTML = total;
document.getElementById('total-ay').innerHTML = ayliq.toFixed(2);
document.getElementById('total-faiz').innerHTML=odfaiz;

})





