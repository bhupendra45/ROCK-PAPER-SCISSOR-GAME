const option=document.querySelectorAll('.option');
const middle=document.getElementById('middle');
const bottom=document.getElementById('bottom');
const mbox=document.getElementById('mbox');
const play=document.getElementById('playagain')
let userchoise;
let cpoption;
const userchoiceoption = {
hand:"hand.png", fist:"fist.png",scissor:"scissor.png"


}
option.forEach((x)=>{
x.addEventListener('click',(e)=>{
    userchoise=e.target.id;

    userchoice();
})
})
const userchoice =() =>{
    middle.style.display='none';
    bottom.style.display='none';
    mbox.style.display='none'
 document.getElementById('userpicked').src=userchoiceoption[userchoise];
 computerchoice();
 result(userchoice,cpoption);
}
const computerchoice = () =>{
    let computeroptions=['fist','hand','scissor'];
    cpoption=computeroptions[Math.floor(Math.random()*computeroptions.length)];
    document.getElementById('computerpick').src=userchoiceoption[cpoption];
}
const result =(userchoice,cpoptions) =>{
 if (userchoise ==="hand"&& cpoption==="scissor"){
    Decission=('YOU LOOSE')
    Score(score -1);
    cpuscore(cpuscore+1)
 }
 else if (userchoise ==="hand"&& cpoption==="fist"){
    Decission=('YOU win')
    Score(score -1);
    userscore(userscore+1)
 }
else if (userchoise ==="fist"&& cpoption==="scissor"){
    Decission=('YOU WIN')
    Score(score -1);
    userscore(userscore+1)
 }
else if (userchoise ==="hand"&& cpoption==="hand"){
    Decission=('TIE UP')
    Score(score -1);
    cpuscore(cpuscore+1)
 }
 else if (userchoise ==="hand"&& cpoption==="hand"){
    Decission=('TIE UP')
    Score(score -1);
 }
 else if (userchoise ==="scissor"&& cpoption==="scissor"){
    Decission=('TIE UP')
    Score(score -1);
    
 }
 else if (userchoise ==="scissor"&& cpoption==="fist"){
    Decission=('YOU LOOSE')
    Score(score -1);
    cpuscore(cpuscore+1)
 }
 else if (userchoise ==="hand"&& cpoption==="scissor"){
    Decission=('YOU LOOSE')
    Score(score -1);
    cpuscore(cpuscore+1)
 }
 else if (userchoise ==="scissor"&& cpoption==="hand"){
    Decission=('YOU WIN')
    Score(score -1);
    userscore(userscore+1)
 }
}
const Decission =(decission)=>{
    document.querySelector('.subnext2 h2 h4').innerHTML=decission;
}
playagain.addEventListener('click',()=> { 
    middle.style.display='none';
    bottom.style.display='none'
})
const score=(totalscore) =>{
    box2=totalscore;
    document.querySelector(('.userscore h1')).innerHTML=totalscore;
}