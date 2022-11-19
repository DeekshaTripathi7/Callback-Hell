
let time = 10;

const countdown = document.querySelector(".countdown");

const countdownBtn = document.querySelector("#countbtn");

const reset = document.querySelector("#reset");

countdownBtn.addEventListener("click", countfunc => {
        setTimeout(() => {
            countdown.innerHTML = time--;
            setTimeout(() => {
                countdown.innerHTML = time--;
                setTimeout(() => {
                    countdown.innerHTML = time--;
                    setTimeout(() => {
                        countdown.innerHTML = time--;
                        setTimeout(() => {
                            countdown.innerHTML = time--;
                            setTimeout(() => {
                                countdown.innerHTML = time--;
                                setTimeout(() => {
                                    countdown.innerHTML = time--;
                                    setTimeout(() => {
                                        countdown.innerHTML = time--;
                                        setTimeout(() => {
                                            countdown.innerHTML = time--;
                                            setTimeout(() => {
                                                countdown.innerHTML = time--;
                                                countdown.innerHTML = "Happy Independence Day !!!";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },500)
})

reset.addEventListener("click", () => {
    time = 10;
    countdown.innerHTML = time;
})