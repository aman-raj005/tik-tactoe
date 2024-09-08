let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#reset-btn");
let newgamebutton=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;    //player-1  player-2

const winingpattern =[
         [ 0,1,2],
         [ 0,3,6],
         [ 0,4,8],
         [ 1,4,7],
         [ 2,5,8],
         [ 2,4,6],
         [3,4,5 ],
         [6,7,8 ],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box is clicked");
        if(turn0==="true"){
            box.innerText="O";
            turn0="false";
        }
        else{box.innerText="X";
            turn0="true";
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinnerr=(winner)=>{
    msg.innerText=`Congratulations , Our Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
  for( let pattern of winingpattern){
    //  console.log(pattern[0],pattern[1],pattern[2]);
    //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "" )
        {   
            if (pos1val === pos2val && pos2val == pos3val){
                // console.log("winner",pos1val);
                showwinnerr(pos1val);
            }
        }
  }
};
newgamebutton.addEventListener("click", resetgame);
rstbtn.addEventListener("click", resetgame);
