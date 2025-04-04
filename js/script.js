const h = document.querySelector('#h')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const day = document.querySelector('#day')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const message = document.querySelector('#message')


setInterval(clock, 1000)

function clock(){
    date = new Date()  
    nowh = date.getHours()
    nowmin = date.getMinutes()
    nowsec = date.getSeconds()
    nowday = date.getDate()
    nowmonth = date.getMonth()
    nowyear = date.getFullYear()

    if(nowh > 5 && nowh < 12){
        message.textContent = "Good Morning"
    }
    
    else if(nowh >= 12 && nowh < 18){
        message.textContent = "Good Afternoon"
    }
    
    else{
        message.textContent = "Good night"
    }

    h.textContent = String(nowh).padStart(2, "0") 
    min.textContent = String(nowmin).padStart(2, "0")
    sec.textContent = String(nowsec).padStart(2, "0")
    day.textContent = nowday
    month.textContent = nowmonth + 1
    year.textContent = nowyear
}
