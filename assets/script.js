document.getElementById("start-btn").addEventListener("click", function(){
    var timeLeft = 45;
    var timerCounter = setInterval(function function1(){
        document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";

        timeLeft -=1;
        if(timeLeft === 0){
            clearInterval(timerCounter);
            document.getElementById("countdown").innerHTML = "Time is Up!"
        }
    }, 1000);
    console.log(countdown);
});