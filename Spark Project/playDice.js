window.onload = function () {
    document.getElementById("roll").addEventListener("click", rollDice);
    document.getElementById("answer").addEventListener("click", answerQ);
    document.getElementById("music").addEventListener("click", playAudio);
    };
    const apiUrl = "http://roll.diceapi.com/json/d6"

    let state ={
        value:''
    }
   let updateContent = function(){
    let num =state.dice[0].value;
    var link = 'img/' + num + '.png';
    document.getElementById("roll").style.backgroundImage = 'url("' + link + '")';
    
    document.getElementById("current").value = num;
    document.getElementById("battle").src= "img/battle.png";
    question();
   }
   
   function rollDice() {
    fetch(apiUrl, {method: "GET", headers:{"Accept":"application/json"}})

    .then((response) => {
      
        return response.json();
    })
   
    .then((data) => {
        state.dice= data.dice;
        updateContent();
    })
   
    .catch((error) => {
        alert('There was an error, dont worry it was on our end');
        console.log(error);
    });
   }
const qApiUrl = "https://opentdb.com/api.php?amount=1&type=multiple"

let stateQ ={ 
    results:''
}
let updateContentQ = function(){
let questionR =stateQ.results[0].question;
let replace = questionR.replace(/&quot;/g, '"');
let apostofre = replace.replace(/&#039;/g, "'");
let aspersand = apostofre.replace(/&amp;/g, " & ");
questionR = aspersand;
document.getElementById("q").innerText = questionR;

var correct = stateQ.results[0].correct_answer;
let replaceC = correct.replace(/&quot;/g, '"');
let apostrofeC = replaceC.replace(/&#039;/g, "'");
let aspersandC = apostrofeC.replace(/&amp;/g, " & ");
correct = aspersandC;

let incorrect = stateQ.results[0].incorrect_answers;
let one = incorrect[0];
let replaceO = one.replace(/&quot;/g, '"');
let apostrofeO = replaceO.replace(/&#039;/g, "'");
let aspersandO = apostrofeO.replace(/&amp;/g, " & ");
one = aspersandO;

let two = incorrect[1];
let replaceT = two.replace(/&quot;/g, '"');
let apostrofeT = replaceT.replace(/&#039;/g, "'");
let aspersandT = apostrofeT.replace(/&amp;/g, " & ");
two = aspersandT;

let three = incorrect[2];
let replaceTh = three.replace(/&quot;/g, '"');
let apostrofeTh = replaceTh.replace(/&#039;/g, "'");
let aspersandTh = apostrofeTh.replace(/&amp;/g, " & ");
three = aspersandTh;

/*fill and array with unique random values from 1-4*/
let opt = Math.floor((Math.random() * 4) + 1);
var temp = [opt];
var i;
do{
    for (c = 0; c < 100;c++){
            opt = Math.floor((Math.random() * 4) + 1);
            if(temp.includes(opt) == false){
                temp.push(opt); 
            } 
    }
    i++;
} while (i < 5);

var optOne = Number(temp[0]);
var optTwo = Number(temp[1]);
var optThree = Number(temp[2]);
var optFour = Number(temp[3]);
if(optOne == 1){
    document.getElementById("a").innerText = correct;
    document.getElementById("cAnswer").value = "a1";
}else if(optOne  == 2){
    document.getElementById("b").innerText = correct;
    document.getElementById("cAnswer").value = "b1";
}else if(optOne  == 3){
    document.getElementById("c").innerText = correct;
    document.getElementById("cAnswer").value = "c1";
}else if(optOne  == 4){
    document.getElementById("d").innerText = correct;
    document.getElementById("cAnswer").value = "d1";
}
if(optTwo == 1){
        document.getElementById("a").innerText = one;
    }else if(optTwo == 2){
        document.getElementById("b").innerText = one;
    }else if(optTwo ==3){
        document.getElementById("c").innerText = one;
    }else if(optTwo == 4){
        document.getElementById("d").innerText = one;
    }
if(optThree == 1){
        document.getElementById("a").innerText = two;
    }else if(optThree == 2){
        document.getElementById("b").innerText = two;
    }else if(optThree ==3){
        document.getElementById("c").innerText = two;
    }else if(optThree == 4){
        document.getElementById("d").innerText = two;
    }
if(optFour == 1){
        document.getElementById("a").innerText = three;
    }else if(optFour == 2){
        document.getElementById("b").innerText = three;
    }else if(optFour  == 3){
        document.getElementById("c").innerText = three;
    }else if(optFour  == 4){
        document.getElementById("d").innerText = three;
    }
let num = document.getElementById("room").innerText;
}

function question() {
fetch(qApiUrl, {method: "GET", headers:{"Accept":"application/json"}})

.then((response) => {
    return response.json();
})

.then((data) => {
    console.log(data);
    stateQ.results= data.results;
    console.log(stateQ.results);
    updateContentQ();
})

.catch((error) => {
    alert('There was an error, dont worry it was on our end');
    console.log(error);
});
}

function answerQ(){
    let right = document.getElementById("cAnswer").value;
    if (right == "a1"){
        if(document.getElementById('a1').checked){
            alert("correct answer!");
            advance();
        }else{
            alert("Wrong answer!");
            lose();
        }
    }else if (right == "b1"){
        if(document.getElementById('b1').checked){
            alert("correct answer!");
            advance();
        }else{
            alert("Wrong answer!");
            lose();
        }
    }else if(right == "c1"){
        if(document.getElementById('c1').checked){
            alert("correct answer!");
            advance();
        }else{
            alert("Wrong answer!");
            lose();
        }
    }else{
        if(document.getElementById('d1').checked){
            alert("correct answer!");
            advance();
        }else{
            alert("Wrong answer!");
            lose();
        }
    }
}
function advance(){
    let cFloor =  document.getElementById("room").innerText;
    let current =  document.getElementById("current").value;
    cFloor = Number(cFloor) + Number(current);
    document.getElementById("room").innerText = cFloor;
   
    document.getElementById("q").innerText = "Roll the dice for new question"
    document.getElementById("a").innerText = "";
    document.getElementById("b").innerText = "";
    document.getElementById("c").innerText = "";
    document.getElementById("d").innerText = "";
    document.getElementById("a1").checked = false;
    document.getElementById("b1").checked = false;
    document.getElementById("c1").checked = false;
    document.getElementById("d1").checked = false;
    document.getElementById("battle").src= "img/clear.png"
    if (Number(cFloor) > 30){
        win();
    }
}
function lose(){
    let cFloor =  document.getElementById("room").innerText;
    document.getElementById("q").innerText = "Roll the dice for new question"
    document.getElementById("a").innerText = "";
    document.getElementById("b").innerText = "";
    document.getElementById("c").innerText = "";
    document.getElementById("d").innerText = "";
    document.getElementById("a1").checked = false;
    document.getElementById("b1").checked = false;
    document.getElementById("c1").checked = false;
    document.getElementById("d1").checked = false;
    document.getElementById("battle").src="img/lose.png"
}
function win(){
    let cFloor =  document.getElementById("room").innerText;
    
        document.getElementById("q").innerText = "You Got out of the Dungeon!!";
        document.getElementById("a").innerText = "";
        document.getElementById("b").innerText = "";
        document.getElementById("c").innerText = "";
        document.getElementById("d").innerText = "";
        document.getElementById("a1").checked = false;
        document.getElementById("b1").checked = false;
        document.getElementById("c1").checked = false;
        document.getElementById("d1").checked = false;
        document.getElementById("battle").src= "img/win.png";
}
var myAudio = document.getElementById("myAudio");
var playing = false;
function playAudio(){
    if(playing == false){
        document.getElementById("music").style.backgroundImage= 'url("img/on.png")';
        document.getElementById("myAudio").play();
        playing = true;
    }else{
        document.getElementById("music").style.backgroundImage='url("img/off.png")';
        document.getElementById("myAudio").pause();
        playing = false;
    }
}
