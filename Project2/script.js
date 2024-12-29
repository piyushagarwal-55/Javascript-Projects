

const clickme=document.getElementById("button1");
const reset = document.getElementById("button2");
const inputing=document.getElementById("inputfield");
const list=document.getElementById("todolist");
const container=document.createElement('ul');
let count =0;

const addtodo=()=>{
        
        const numbr=document.getElementById("count");
        const item = inputing.value.trim();
        if (!item) {
            alert("Please enter the text to Submit");
            return; 
        }
        if(item){
            count+=1;
        numbr.textContent=`${count}`;
             
        let creating=document.createElement('li');
        creating.textContent=`${item}`;
        container.appendChild(creating);
        inputing.value="";
        }

}
inputing.addEventListener('keydown',(event)=>{

    if(event.code==='Enter'){
        addtodo();
        if (!list.contains(container)) {
            list.appendChild(container);
        }
    }
})
clickme.addEventListener('click',()=>{
   
    addtodo();
    list.appendChild(container);}
)
container.addEventListener('click',(event)=>{
    console.log(event.target);
    let currele=event.target;
    const numbr=document.getElementById("count");
    count-=1;
    numbr.textContent=`${count}`;
    currele.remove();
})

reset.addEventListener('click',()=>{
    const numbr=document.getElementById("count");
        count=0;
    numbr.textContent=`${count}`;

    inputing.value="";
      container.innerHTML="";
})