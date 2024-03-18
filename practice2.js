let endDate = "20 March 2024 10:00 PM";

document.getElementById("endDate").innerText=endDate;
let inputs = document.querySelectorAll("input");

function clock(){
    let end = new Date(endDate)
    let now = new Date();
    console.log(end);
    console.log(now);
      let difference = (end - now) / 1000;

      if( difference< 0) return;
    //   console.log(difference);
      inputs[0].value = Math.floor(difference / 3600 /24);
      inputs[1].value = Math.floor(difference / 3600) % 24;
      inputs[2].value = Math.floor(difference / 60) % 60;
      inputs[3].value = Math.floor(difference) % 60;
}
clock();

// CONVERSION:
// 1 day = 24 hours
// 1 hr = 60 min 
// 60 min = 3600 sec


function updateClock(){
clock();
}
// 1000 is in milli second which is equal to 1sec:

setInterval(updateClock, 1000);

// setInterval() is a built in funcytion  used to repeatedly execute a specified function at fixed intervals of time