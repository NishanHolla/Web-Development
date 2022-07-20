var point=0;
var dino = document.getElementById("dino");
var block = document.getElementById("obj");
var game = document.getElementById("gameplay");
function jump(){
    if (dino.classList!="animate"){
        dino.classList.add("animate");
    }
    setTimeout(function(){
        dino.classList.remove("animate");
        point+=5;
        score.innerHTML="Score :"+point;
    },500);   
}
function start(){
    let start=document.getElementById("start");
    start.style.display="none"
    game.style.display="none";
    obj.style.display="block";
    obj.style.animation="run infinite 2s";
    var checkdead=setInterval(function(){
        var dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        var objLeft=parseInt(window.getComputedStyle(obj).getPropertyValue("left"));
        if(objLeft<80 && objLeft>0 && dinoTop>=300){
                obj.style.animation="none";
                obj.style.display="none"; 
                alert("You have lost ");
                game.style.display='block'; 
                start.style.display="block";
        }

    },10);

}
    //dino.style.background='blue';
    
