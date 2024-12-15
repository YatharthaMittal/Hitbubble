var timer = 60;
var score = 0;
var hitrn;
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 80; i++) {
        // var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>game over</h1>`;
        }
    }, 1000)
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    //    console.log(hitrn)
    document.querySelector("#hitval").textContent = hitrn;
}

function hitScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function hitBubble() {
    document.querySelector("#pbtm")
        .addEventListener("click", function (dets) {
            if (dets.target.classList.contains("bubble")) {
                var target = Number(dets.target.textContent);
                // console.log(hitrn);
                // console.log(target);
                if (target == hitrn) {
                    hitScore();
                }
                else {
                    score -= 10;
                }
                document.querySelector("#score").textContent = score;
                getNewHit();
                makeBubble();
            }

        })
}


makeBubble();
runTimer();
getNewHit();
// hitScore();
hitBubble();