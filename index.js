window.addEventListener("load",()=>{

const sounds=document.querySelectorAll('.sound'); //returns all elements in the document that matches a specified css selector ,as static node list object 
const pads=document.querySelectorAll('.pads div') //all the div inside this pads
const visual=document.querySelector('.visual');
const colors=[
      " #60d394"," #f08080","#90EE90"," #ffa07a ","#32CD32","#800000"

]
//console.log(sounds[0]);
//lets get going with the sound here
pads.forEach((pad,index)=>{
    pad.addEventListener("click",function(){
        sounds[index].currentTime=0;
sounds[index].play();
createBubbles(index);

    });




});
//create a function that makes bubbles
const createBubbles=index =>
    {
const bubbles =document.createElement("div");
visual.appendChild(bubbles);
bubbles.style.backgroundColor=colors[index];
bubbles.style.animation="jump 1s ease"
bubbles.addEventListener("animationend",function(){
  visual.removeChild(this);  
});


    }

});
//console.log(sounds);//sound is been scoped within the function so it will give erroe sounds is not defined bcoz it is locally not globally