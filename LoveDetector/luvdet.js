luv.innerHTML="";
//document.body.style.backgroundColor="red";
function isbitch(){
    var name=document.getElementById('form1');
    var name2=document.getElementById('form2');
    var x=name.value.length;    
    var y=name2.value.length;
    if(x<y){
        let z=x/y;
        let luvper=(z)*100;
        let luvper2=luvper.toFixed(0);
        luv.innerHTML=name.value+" and "+name2.value+" love is "+luvper2+"%";    
    }
    else{
        let z=y/x;
        let luvper=(z)*100;
        let luvper2=luvper.toFixed(0);
        luv.innerHTML=name.value+" and "+name2.value+" love is "+luvper2+"%";    
    }
}
let qt=[
        "If I know what love is, it is because of you.",
        "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
        "A man is already halfway in love with any woman who listens to him.",
        "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
        "Women are meant to be loved, not to be understood.",
        "You make me want to be a better man.",
        "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.",
        "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
        "Love is that condition in which the happiness of another person is essential to your own.",
        "He is not a lover who does not love forever.",
        "To love is to burn, to be on fire.",
        "Love does not begin and end the way we seem to think it does Love is a battle, love is a war; love is a growing up.",
        "In the end we discover that to love and let go can be the same thing.",
        "Pleasure of love lasts but a moment. Pain of love lasts a lifetime.",
        "Love is so short, forgetting is so long.",
        "Love is a thing that is full of cares and fears.",
    ];
    quotes.innerHTML=qt[0];
function qtrot(){
        let n=(Math.floor(Math.random()*16)+1);
        quotes.innerHTML=qt[n];
}

