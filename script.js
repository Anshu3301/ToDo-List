/* Key Learnings:
    1. DOM Manipulation (child.parentElement, parent.childElementCount, parent.children[1], parent.removeChild())
    2. Transparent-Hazy card (CSS, line:44-49)
    3. remove img Background (CSS, line:21-22)
*/

let outer = document.getElementById('outer');
let button = document.getElementById('add');
let check,names,edit,todelete,create;

button.addEventListener('click',(e)=>{
    if(input.value != ''){
        (create = () =>{ 
        let newtask = document.createElement('div')
        newtask.innerHTML = `<div class='task'>
        <span class="name">${input.value}</span>
        <div id="edit_delete">
           <div class="edit"><button class="edit"><i class="fa-solid fa-pen fa-xl "></i></button></div>
           <div class="todelete"><button class="todelete"><i class="fa-solid fa-trash fa-xl"></i></button></div>
        </div>
        </div>` ; 
    
        outer.append(newtask);      
        input.value = '';
        })()                                //IIFE

        check = Array.from(document.querySelectorAll('.task'));
        names = document.querySelectorAll('.name');
        edit = document.querySelectorAll('.edit');
        todelete = Array.from(document.querySelectorAll('.todelete'));
    

        todelete.forEach((b)=>{
            b.addEventListener('click', (e)=>{
                //console.log(e.target.parentElement.parentElement);
                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement.parentElement.parentElement);
            })
        })
        check.forEach((b)=>{
            b.addEventListener('dblclick', (e)=>{
                    e.target.children[0].style.textDecoration = 'line-through';
                    //console.log(e.target.children[1].children[0]);
                    e.target.children[1].children[0].style.visibility = 'hidden';
            })
        })
        edit.forEach((b)=>{
            b.addEventListener('click', (e)=>{
                input.value = String(e.target.parentElement.parentElement.parentElement.parentElement.children[0].innerText);
                //console.log(e.target.parentElement.parentElement.parentElement);
                e.target.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement.parentElement.parentElement);
            })
        })
   
    }
    else{
        alert("Enter a Task!");
    }
})





