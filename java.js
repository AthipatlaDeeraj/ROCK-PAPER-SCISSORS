let userscore=0;
let compscore=0;

const but=document.querySelectorAll("button");

const compgen = () =>{
    let arr=["paper","rock","scissors"];
    const rand=Math.floor(Math.random()*3);
    return arr[rand];
}

const playgame =(userchoise)=>{
    console.log("Choise clicked is",userchoise);
    let rand=compgen();
    if((userchoise=="rock"&&rand=="scissors")||(userchoise=="paper"&&rand=="rock")||(userchoise=="scissors"&&rand=="paper")){
        let para=document.querySelector("#last");
        para.innerText="You won";
        let yourscore=document.querySelector("#yourscore");
        userscore++;
        yourscore.innerText=`${userscore}`;
    }
    else if(userchoise==rand){
        console.log("it was a draw");
    }
    else{
        let para=document.querySelector("#last");
        para.innerText="You lost";
        let yourscore=document.querySelector("#compscore");
        compscore++;
        yourscore.innerText=`${compscore}`;
    }
}

but.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userchoise=choise.getAttribute("id");
        playgame(userchoise);
    })
});