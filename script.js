// Select All Element
let coundown;
const timeDisplay = document.querySelector(".display__time-left");
const endtime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll('[data-time]');




// Assign All Funtions
function timer(second){
    clearInterval(coundown);
    const now = Date.now();
    const then = now + second * 1000;
    displayTimeLeft(second);
    displayEndTime(then);
    coundown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);
        if(secondLeft < 0){
            return;
        }
        console.log({secondLeft})
        displayTimeLeft(secondLeft);
    }, 1000);
}
function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remaindersecound = seconds % 60;
    const display = `${minutes}:${remaindersecound < 10 ? "0" : ""}${remaindersecound}`;
    timeDisplay.textContent = display;
}

function displayEndTime(timeStamp){
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const adjustHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endtime.textContent = `Be Back At ${adjustHour}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer(){
    const second = parseInt(this.dataset.time);
    timer(second);
}


// Assgin all EventListner
buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})