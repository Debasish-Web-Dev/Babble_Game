function makeBubble() {
    let flag = "";
    for(i=1; i<=140; i++)
    {
        let n = Math.floor(Math.random()*10);
        flag = flag + `<div class="bubble">${n}</div>`;
    }

    let bubble = document.querySelector(".next_panal");
    bubble.innerHTML = flag;
}
makeBubble();

let timer = 60;
function runTimer() {
    
    let timeInt = setInterval(function(){
        if(timer>0)
        {
            timer--;
            let run = document.querySelector(".box2");
            run.textContent = timer;
        }
        else{
            clearInterval(timeInt);
            let next_panal = document.querySelector(".next_panal");
            next_panal.innerHTML = `<h1>YOUR SCORE : ${score}</h1><h1>GAME OVER</h1>`;
        }
    },1000)
}
runTimer();

let hitIt;
function get_hit() {
    hitIt = Math.floor(Math.random()*10);
    let box1 = document.querySelector(".box1");
    box1.textContent = hitIt;
}
get_hit();

let score = 0;
function get_score() {
    score = score+10;
    let box3 = document.querySelector(".box3");
    box3.textContent = score;
}

let number;
let next_panal = document.querySelector(".next_panal");
next_panal.addEventListener("click", (a)=>{
    number = Number(a.target.textContent);
    if(hitIt == number)
    {
        get_hit();
        makeBubble();
        get_score();
    }
})