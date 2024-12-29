const container = document.querySelector('#container');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');
const div7 = document.querySelector('#div7');
const div8 = document.querySelector('#div8');
const div9 = document.querySelector('#div9');

let count =0;

let firstchance='X';
let secchance='O';
let answer;
const player1= (div)=>{
        const creating = document.createElement('p');
        creating.textContent =`${firstchance}` ;
        div.appendChild(creating);
        // console.log(attack);
}

const player2= (div)=>{
        const creating = document.createElement('p');
        creating.textContent =`${secchance}` ;
        div.appendChild(creating);
        // console.log(attack);
}

container.addEventListener('click',(event)=>{
         console.log(event.target);
         const div=event.target;
        if(count%2==0){
             player1(div);
        }
        if(count%2==1){
             player2(div);
        }
        count++;
        answer = check();

        if(answer==true){
            if(count%2==0){
                 const result = document.createElement('h1');
                 result.textContent=`Player1 wins`;
                 container.appendChild(result)
            }
            if(count%2!=0){
                 const result = document.createElement('h1');
                 result.textContent=`Player2 wins`;
                 container.appendChild(result)
            }
        }
})

const check = ()=>{
     if(div1.contains(p)&&div2.contains(p) && div3.contains(p)){
           return true;
  }}