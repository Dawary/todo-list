const inputbox = document.querySelector('.value');
const btn = document.querySelector('.btn');
const listContainer = document.querySelector('.list-container');

btn.addEventListener('click', () => {
    if (inputbox.value === '') {
        alert('You must write something!');
    } else {
        let div = document.createElement('div');
        div.className = 'items';

        let li = document.createElement('li');
        li.innerHTML = inputbox.value;

        let checkbox = document.createElement('input');
        checkbox.className = 'check';
        checkbox.type = 'checkbox';

        let span = document.createElement('span');
        span.className = 'delete';  // Added className for the span
        span.innerHTML = '❌';

       div.appendChild(checkbox);
        div.appendChild(li);
        div.appendChild(span);
        listContainer.appendChild(div);

        inputbox.value = '';  // Clear the input box after adding the item
        saveData()
    }
});




listContainer.addEventListener('click', (e)=>{
    if(e.target.className==='check'){
        e.target.nextElementSibling.classList.toggle('checked')
        saveData()
    }
    else if(e.target.className==='delete'){
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();