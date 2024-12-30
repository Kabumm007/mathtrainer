

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
    

document.getElementById("start").onclick = start;

async function start(){
    let a=0
    let b=0
    let c=0
    let korrektfeld=document.getElementById("korrekt")
    let maxzahl= prompt("enter the maximum number range") 
    while(true){
        a=Math.floor(Math.random() * maxzahl);
        b=Math.floor(Math.random() * maxzahl);
        c=a*b
        let antwort=prompt("what is "+a+" times "+b)
        if(c==antwort) korrektfeld.innerHTML="right"
        else  korrektfeld.innerHTML="wrong"
        await Sleep(1000)
    }
}