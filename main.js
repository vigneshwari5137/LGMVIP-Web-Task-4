const history=document.querySelector(".history");
const output=document.querySelector(".output");
const keys=document.querySelectorAll("button");
keys.forEach(key=>{
    key.addEventListener("click",calculate);
})
function calculate(){
       let button=this.innerText;
       if(button==="AC")
       {
        history.innerText="";
        output.innerText="0";
        return;
       }
       if(button==="DEL")
       {
        history.textContent=history.textContent.substr(0,history.textContent.length-1);
        return;
       }
       if(button==="="){
           output.innerText=eval(history.innerText);
       }
       else
       {
            history.textContent+=button;
          
        }
    }