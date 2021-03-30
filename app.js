'use script';
let userName = prompt("what's your name?");
console.log(userName);
alert('Hello '+userName+' welcome in my web page '+'\nI will ask you some question.' );



let iceCream = prompt('Do you think I love ice-cream?');
iceCream=iceCream.toLowerCase();
if (iceCream==='yes'|| iceCream==='y'){
    console.log(iceCream);
    alert(userName+' ,yes your answer is correct I love ice-cream.');
}else if(iceCream==='no'||iceCream==='n'){
    console.log(iceCream);
    alert(userName+ " , sorry wrong answer I love ice-cream.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}



let instegram = prompt('Do you think I love instegram?');
instegram=instegram.toLowerCase();
if (instegram==='yes'|| instegram==='y'){
  //  console.log(instegram);
    alert(userName+' ,yes your answer is correct I love instegram.');
}else if(instegram==='no'||instegram==='n'){
   // console.log(instegram);
    alert(userName+ ' , sorry your answer is wrong I love instegram');
}else{
    alert('plz answer the qustion by yas/y or no/n')
}



let summer = prompt('Do you think I love summer?');
summer=summer.toLowerCase();
if (summer==='yes'|| summer==='y'){
  //  console.log(summer);
    alert(userName+" ,sorry  your answer is wrong I don't love summer.");
}else if(summer==='no'||summer==='n'){
 //   console.log(summer);
    alert(userName+ " ,yes your answer is correct I don't love summer.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}



let sea = prompt('Do you think I love sea?');
sea=sea.toLowerCase();
if (sea==='yes'|| iceCream==='y'){
   // console.log(sea);
    alert(userName+" ,sorry your answer is wrong I don't love sea.");
}else if(sea==='no'||sea==='n'){
   // console.log(sea);
    alert(userName+ " ,yes your answer is correct I don't love sea.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}


let travel = prompt('Do you think I love travel?');
travel=travel.toLowerCase();
if (travel==='yes'|| travel==='y'){
  //  console.log(travel);
    alert(userName+' ,yes your answer is correct I love travel.');
}else if(travel==='no'||travel==='n'){
   // console.log(iceCream);
    alert(userName+ " , sorry your answer is wrong I  love travel.");
}else{
    alert('plz answer the qustion by yas/y or no/n')
}



alert('thank you '+userName);