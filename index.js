
const input = document.querySelector('input');
input.addEventListener('change', conversion);


// tak = document.getElementById("cnt")
function conversion(e){
    let num = parseInt(e.target.value)
    let m2f = 0
    let f2m = 0
    let l2g = 0
    let g2l = 0
    let k2p = 0
    let p2k = 0

    m2f = num*3.28084
    f2m = num*0.3048

    l2g = num*0.264172
    g2l = num*3.78541

    k2p = num*2.20462
    p2k = num*0.453592

    let LenEL = document.getElementById("len")
    let VolEL = document.getElementById("vol") 
    let MassEL = document.getElementById("mas") 

    LenEL.innerText = `${num} meters = ${m2f} feet || ${num} feet = ${f2m} meters`
    VolEL.innerText = `${num} liters = ${l2g} gallons || ${num} gallons = ${g2l} liters`
    MassEL.innerText = `${num} kilos = ${k2p} pounds || ${num} pounds = ${p2k} kilos`
    
}





