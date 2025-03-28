//global variables here: word, word array(s), guesses, guessedLetters

//event listeners for startGame and guessLetter
//for example:
document.getElementById("submit").addEventListener("click",process);
let resultArray = [0,0,0];


function process() {
    let w = document.getElementById("weight").value;
    let t = document.getElementById("type").value;
    let multiplier = 0;

    
    w = parseFloat(w);
    t = parseInt(t);

    console.log("Weight:", w);
    console.log("Type:", t);

    
    if (t === 1) {
        multiplier = 0.00027;
    } else if (t === 2) {
        multiplier = 0.000375;
    } else if (t === 3) {
        multiplier = 0.00065;
    } else {
        console.log("Invalid type");
        return; 
    }

   
    let result = w * multiplier;


    resultArray[t-1] = result;

    let score = "";
    let sum = 0;
    for(let i = 0; i < resultArray.length; i++){
      sum += resultArray[i];
    }

    if(sum < .001) {
      score = "GOOD"
    } else {
      score = "BAD"
    }

    console.log(resultArray);
    document.getElementById("score").innerHTML = score; 

   
    document.getElementById("result").innerHTML = 
        "The amount of CO2 released is " + result.toFixed(6) + " tons";

    draw();
}

function draw() {
    var xValues = ["Plastic Trash", "Compost", "Recycling",];
    //var yValues = resultArray;
    var barColors = ["red", "green","blue"];
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: resultArray
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "CO2 emissions from this week"
        }
      }
    });
}
