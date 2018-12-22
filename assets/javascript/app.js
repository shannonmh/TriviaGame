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

    var value1 = $("input[name='question1']:checked").val(); 
    var value2 = $("input[name='question2']:checked").val(); 
    var value3 = $("input[name='question3']:checked").val(); 
    var value4 = $("input[name='question4']:checked").val(); 
    var value5 = $("input[name='question5']:checked").val(); 
    var value6 = $("input[name='question6']:checked").val(); 
    var value7 = $("input[name='question7']:checked").val(); 
    var value8 = $("input[name='question8']:checked").val(); 
    var value9 = $("input[name='question9']:checked").val(); 
    var value10 = $("input[name='question10']:checked").val(); 
    var value11 = $("input[name='question11']:checked").val(); 

    console.log(value1);
    console.log(value2);
    total = value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8 + value9 + value10 + value11;
    console.log(total);
    $(".container").text("Number of correct answers: " + total);
});

$(".submit-btn").on("click", stop);

function stop() {

    if (clockRunning) {
        clearInterval(intervalId);
        clockRunning = false;
    }

};