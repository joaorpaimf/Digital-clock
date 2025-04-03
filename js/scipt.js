h = document.querySelector('#h')
min = document.querySelector('#min')
sec = document.querySelector('#sec')

setInterval(clock, 1000)

function clock(){
    date = new Date()
    nowh = date.getHours()
    nowmin = date.getMinutes()
    nowsec = date.getSeconds()

    h.textContent = String(nowh).padStart(2, '0') 
    min.textContent = String(nowmin).padStart(2, "0")
    sec.textContent = String(nowsec).padStart(2, '0')
}