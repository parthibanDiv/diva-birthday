const day = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const sec = document.querySelector(".sec");
const titleDays = document.querySelector(".title");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn")

const endDate ="22 july 2024 12:00 AM"
window.alert("Hey there!!! End of the day you can see button at the bottom of the page Then you can see my special wish ") 

function dummy(){
    btn.style.display = "block";
    titleDays.innerHTML = `<h1 class="title"><span class="titleDays">Many </span>More <br> Happy Returns Of <br>The Day<span>-Diva</span></h1>`
}

function update(){
    const current = new Date();
    const end = new Date(endDate)
    const diff = end-current;

    if(diff<0){
        return(
           dummy()
        )
        
    }

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor((diff/1000/60/60)%24)
    const m = Math.floor((diff/1000/60)%60)
    const s = Math.floor((diff/1000)%60)

    titleDays.innerHTML = d==0 || d==1 ?`<h1 class="title"><span class="titleDays">${d} </span>Day go to <br> Advance Happy B'Day<span>-Diva</span></h1>` : `<h1 class="title"><span class="titleDays">${d} </span>Days go to <br> Advance Happy B'Day<span>-Diva</span></h1>`
    day.textContent = d<10 ? "0"+d : d;
    hours.textContent = h<10 ? "0"+h : h;
    mins.textContent = m<10 ? "0"+m : m;
    sec.textContent = s<10 ? "0"+s : s;
}
setInterval(update,1000)

const initTimer = () =>{
    let timer = btn.dataset.timer;
    btn.classList.add("timer")
    btn.innerHTML = `You Can See Next <b>${timer}</b> seconds`;

    const initCounter = setInterval(()=>{
        if(timer > 0){
            timer--;
            return btn.innerHTML = `You Can See Next <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter)
        btn.classList.remove("timer")
        btn.innerHTML=`<a href="sec.html" target="_blank">GO TO VIEW</a>`
    },1000)
}
btn.addEventListener("click",initTimer)
