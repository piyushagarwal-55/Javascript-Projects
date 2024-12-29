const selected = document.querySelectorAll('.button');
const body=document.querySelector('body');

console.log(body);





     selected.forEach((curr)=>{
        curr.addEventListener('click',(e)=>{
            switch(e.target.id){
                case 'button1':
                    const heading=document.getElementById('head1');
                    let change=document.createElement('h1');
                    change.textContent=`You have choose the color RED`;
                    
                    heading.replaceWith(change);
                    
                    body.style.backgroundColor="red";
                    
                    change.setAttribute("id", 'head1');  
                    break;
            }
            switch(e.target.id){
                case 'button2':
                    const heading=document.getElementById('head1');
                    let change=document.createElement('h1');
                    change.textContent=`You have choose the color Purple`;
                    heading.replaceWith(change);
                    body.style.backgroundColor="purple";
                    change.setAttribute("id", 'head1');
                    break;
            }
            switch(e.target.id){
                case 'button3':
                    const heading=document.getElementById('head1');
                    let change=document.createElement('h1');
                    change.textContent=`You have choose the color green`;
                    heading.replaceWith(change);
                    body.style.backgroundColor="green";
                    change.setAttribute("id", 'head1');
                    break;
            }
            switch(e.target.id){
                case 'button4':
                    const heading=document.getElementById('head1');
                    heading.textContent=`You choose the color cyan`;
                    body.style.backgroundColor="cyan";
                    
                    break;
            }
        })
    })