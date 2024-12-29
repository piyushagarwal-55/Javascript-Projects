
const inputing=document.querySelector('#inputfield');
const button1=document.querySelector('#button1');
const button2=document.querySelector('#button2');
const todolist=document.querySelector('#todolist');
const counting=document.querySelector('#count');
const container=document.createElement('ol');


function gettodolist(){
    return JSON.parse(localStorage.getItem('mainlocaltodolist'))
}

let localtodolist = gettodolist() || [];
let count =localtodolist.length;
function addtodo(input){
      
        
        
        counting.textContent=`${count}`;
        const creating = document.createElement('li');
         
        creating.innerHTML = `${input} <button class="delete">Delete</button>`;
        container.appendChild(creating);
        
        const dele=creating.querySelector(".delete");
        dele.addEventListener('click',(e)=>{
            creating.remove();
            count-=1;
            counting.textContent=`${count}`;
            const todoremove=e.target;
            const todoele=todoremove.parentElement.textContent.replace(' Delete','').trim();
            
            console.log(todoele);
            const todolistindex=localtodolist.indexOf(todoele);
            if(todolistindex != -1){
                localtodolist.splice(todolistindex,1);
                localStorage.setItem("mainlocaltodolist",JSON.stringify(localtodolist))
            }
            
}) 
      }     


   
function createtodo(){
    const input=inputing.value.trim();
    inputing.value="";
      if(input && !localtodolist.includes(input)){
        count+=1;
        addtodo(input);
      
       
    localtodolist.push(input);
        localtodolist=[...new Set(localtodolist)];
        localStorage.setItem("mainlocaltodolist",JSON.stringify(localtodolist));
    }
}
function adder(){
     createtodo();
    
    if(!todolist.contains(container)){
        todolist.appendChild(container);
         
    }
}
button1.addEventListener('click',()=>{
    adder();
})

inputing.addEventListener('keydown',(event)=>{
    const key=event.code;
    if(key==='Enter'){
        adder();
    }
})
button2.addEventListener('click',()=>{
    count=0;
    counting.textContent=`${count}`;
    container.innerHTML="";
    inputing.value="";
    localtodolist = [];
    localStorage.setItem("mainlocaltodolist", JSON.stringify(localtodolist));
})


const reload=()=>{
    console.log(localtodolist);
    localtodolist.forEach((currele)=>{
        addtodo(currele);
    }
)
if(!todolist.contains(container)){
    todolist.appendChild(container);

}
}
reload();