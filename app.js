'use script';

let userName = prompt("what's your name?");
alert('Hello ' + userName + ' welcome in my web page ' + '\nI will ask you some question.');

function one (){

let iceCream = prompt('Do you think I love ice-cream?');
iceCream=iceCream.toLowerCase();
if (iceCream==='yes'|| iceCream==='y'){
    alert(userName+' ,yes your answer is correct I love ice-cream.');
}else if(iceCream==='no'||iceCream==='n'){
    alert(userName+ " , sorry wrong answer I love ice-cream.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}
}
one ();

function two(){
let instegram = prompt('Do you think I love instegram?');
instegram=instegram.toLowerCase();
if (instegram==='yes'|| instegram==='y'){
    alert(userName+' ,yes your answer is correct I love instegram.');
}else if(instegram==='no'||instegram==='n'){
    alert(userName+ ' , sorry your answer is wrong I love instegram');
}else{
    alert('plz answer the qustion by yas/y or no/n')
}
}
two ();


function three(){
let summer = prompt('Do you think I love summer?');
summer=summer.toLowerCase();
if (summer==='yes'|| summer==='y'){
    alert(userName+" ,sorry  your answer is wrong I don't love summer.");
}else if(summer==='no'||summer==='n'){
    alert(userName+ " ,yes your answer is correct I don't love summer.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}
}
three();


function four(){
let sea = prompt('Do you think I love sea?');
sea=sea.toLowerCase();
if (sea==='yes'|| iceCream==='y'){
    alert(userName+" ,sorry your answer is wrong I don't love sea.");
}else if(sea==='no'||sea==='n'){
    alert(userName+ " ,yes your answer is correct I don't love sea.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}
}
four ();


function five (){
let travel = prompt('Do you think I love travel?');
travel=travel.toLowerCase();
if (travel==='yes'|| travel==='y'){
    alert(userName+' ,yes your answer is correct I love travel.');
}else if(travel==='no'||travel==='n'){
    alert(userName+ " , sorry your answer is wrong I  love travel.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}
}
five ();
alert('thank you '+userName);





 alert('Hello ' + userName + ' welcome in my web page ' + '\nI will game with you some guessing.');
let score = 0;



function questionOne() {

    for (let i = 0; i < 4; i++) {

        let number = prompt("guess a number between 1-10");
        number = parseInt(number);

        if (number < 8) {
            alert("it is too low " + "'\n guess again");
        } else if (number > 8) {
            alert("it is too high " + "'\n guess again");
        } else if (i = 8) {
            score++;
            alert("good job " + userName + " the correct answer is 8 " + "your score is " + score);
            break;
        }
    }
    alert('the corect answer is 8 ');
}
questionOne();




function questionTwo() {
    for (let i = 0; i < 4; i++) {

        let color = prompt("guess a color between red/green/pink/blue");
         color =color.toLowerCase();
        if (color == "pink") {
            alert("it is not true " + "'\n guess again");
        } else if (color == "red") {
            alert("it is not true " + "'\n guess again");
        } else if (color == "blue") {
            score++;
            alert("good job " + userName + " the correct answer is blue" + " your score is " + score);
            break;
        } else if (color == "green") {
            alert("it is not true " + "\n guess again");

        } else {
            alert("plz choose red or green or pink or blue");
        }
    }

    alert("the corect answer is blue" + " your score is " + score);
}
questionTwo();






function questionThree() {
    for (let i = 0; i < 4; i++) {

        let travel = prompt("guess How many times I traveled?");
        travel = parseInt(travel);

        if (travel < 3) {
            alert("it is too low " + "\n guess again");
        } else if (travel > 3) {
            alert("it is too high " + "\n guess again");
        } else if (i = 3) {
            score++;
            alert("good job " + userName + " the correct answer is 3 " + "you score is " + score);
            break;
        }
    }
    alert("the corect answer is 3" + "your score is " + score);
}
questionThree();



function questionFour() {
    for (let i = 0; i < 4; i++) {

        let novels = prompt("guess a number of novels I read");
        novels = parseInt(novels);
        if (novels < 20) {
            alert("it is too low " + "'\n guess again");
        } else if (novels > 20) {
            alert("it is too high " + "'\n guess again");
        } else if (i = 20) {
            score++;
            alert("good job " + userName + " the correct answer is 20 " + "your score is " + score);
            break;
        }
    }
    alert("the corect answer is 20 " + "your score is " + score);
}
questionFour();





function questionFive() {
    for (let i = 0; i < 4; i++) {

        let age = prompt("guess my age");
        age = parseInt(age);
        if (age < 23) {
            alert("it is too low " + "\n guess again");
        } else if (age > 23) {
            alert("it is too high " + "\n guess again");
        } else if (age = 23) {
            score++
            alert("good job " + userName + " the correct answer is 23");
            break;
        }
    }
    alert("the corect answer is 23 " + "your score is " + score);
}
questionFive();




function questionSix() {
    for (let i = 0; i < 4; i++) {

        let brother = prompt("guess how many brothers for me");
        brother = parseInt(brother);
        if (brother < 3) {
            console.log(brother);
            alert("it is too low " + "\n guess again");
        } else if (brother > 3) {
            console.log(brother);
            alert("it is too high " + "\n guess again");
        } else if (i = 3) {
            console.log(brother);
            score++;
            alert("good job " + userName + " the correct answer is 8 " + "your score is " + score);
            break;
        }
    }
    alert("the correct answer is 3 " + "your score is " + score);
}
questionSix();






function questionSeven() {
    let flowers = null;
    let correctAnswers = ["blue", "red", "pink", "white", "yellow", "black"];
    let attempts = 6;

    hasAttempts: while (attempts) {
        flowers = prompt("guess what color of flowers I love ");
        flowers=flowers.toLowerCase()
        attempts = attempts - 1;

        for (let i = 0; i < correctAnswers.length; i++) {
           // flowers = prompt("guess what type of flowers I love ");

                if (flowers === correctAnswers[i]) {
                  score++;
                  alert("good job " + userName + "the coorect answer is " + correctAnswers + "\n your score " + score);

                 break hasAttempts;
            }
        }  

         alert("sorry wrong anwser");

    }           

    if (!attempts) {
        alert('sorry you run out of tries the answer correct ' + correctAnswers);
    }
}
questionSeven();





