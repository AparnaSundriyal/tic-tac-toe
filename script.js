let boxes= document.querySelectorAll(".box");
let resbtn=document.querySelector("#reset");
let turn1=true;
let msgbtn=document.querySelector("#msg-btn");
let won=document.querySelector("#win");
let mesg=document.querySelector(".message");
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5],
];

const resetGame=()=>
{
    turn1=true;
   enableboxes();
   mesg.classList.add("hide");
}
const enableboxes=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
       if(turn1)
       {
        box.innerText="O";
         box.style.color="#0a9396";
        turn1=false;
       }
       else{
        box.innerText="X";
        box.style.color="#ee9b00";
        turn1=true;
       }
       box.disabled=true;
       checkWinner();
       count++;

       let isWinner= checkWinner();
        if(count===9 && !isWinner)
        {
            draw();
        }

    });
});
const disableboxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    won.innerText=`Congratulations the winner is ${winner}`;
    mesg.classList.remove("hide");
    disableboxes();

}


const checkWinner=()=>
{
        for (const pattern of winPatterns) {
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;

            if(pos1!=""&&pos2!=""&&pos3!="")
            {
                if(pos1===pos2&&pos2===pos3)
                {
                    
                    showWinner(pos1);
                }
            }
            
        } 
        
};

const draw=(cnt)=>
{
    
            won.innerText="The game is draw";
            mesg.classList.remove("hide");
             disableboxes();
}
resbtn.addEventListener("click",resetGame);
msgbtn.addEventListener("click",enableboxes);
