var minutes;
var seconds;

var time = 120;

var intervalId;

var clockRunning = false;

intervalId = setInterval(count, 1000);

function count() {
    time--;

    var formattedTime = timeConverter(time);

    //console.log(formattedTime);

    $("#time-left").text(formattedTime);

    if (time < 0) {
        alert("Time's up!");
        clearInterval(intervalId);
        time = 120;
    }
};

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};

$(".submit-btn").on("click", stop);

$(".submit-btn").on("click", function () {
    console.log("you clicked the button");
    //alert("you clicked the submit button");
    $(".container").empty();
    var selValue = $("input[name=bobBtn]:checked").val(); 
    console.log(selValue);
    $(".container").text("Number of correct answers: " + selValue);
});

$(".submit-btn").on("click", stop);

function stop() {

    if (clockRunning) {
        clearInterval(intervalId);
        clockRunning = false;
    }

};