
const form = document.querySelector('.form');
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const todosUl = document.getElementById('todos');
const pageNumbers = document.querySelector('page_control');
const currentPage = document.querySelector('.current_page');
const firstPageBtn = document.getElementById('first_page');
const prevPageBtn = document.getElementById('previous_page');
const nextPageBtn = document.getElementById('next_page');
const lastPageBtn = document.getElementById('last_page');

let selectedPage = 1;
function update() {
    let currentTodos = document.querySelectorAll('li');
    let pages = Math.ceil(currentTodos.length/5);
    selectedPage = pages;
    currentPage.innerHTML = selectedPage +' / '+ pages;
    currentTodos.forEach(function(item,index) {
        item.style.display='none'
        if(index <(selectedPage)*5 && index >= (selectedPage-1)*5) {
            item.style.display='block'
        }
    })
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(input.value===''){
        alert('please enter value..')
        return
    }
    let inputText = input.value;
    let li = document.createElement('li');
    li.innerHTML = `
        <span>${inputText}</span>
        <i class="fa-regular fa-trash-can icon"></i>
        <i class="fa-solid fa-check icon"></i>
    `
    li.classList.add('todo');
    todosUl.appendChild(li);
    input.value = '';
    update();
})

prevPageBtn.addEventListener('click',function(){
    let currentTodos = document.querySelectorAll('li');
    let pages = Math.ceil(currentTodos.length/5);
    if(pages===0) {
        return
    }
    if(selectedPage > 1) {
        selectedPage--
    }
    currentPage.innerHTML = selectedPage +' / '+ pages;
    currentTodos.forEach(function(item,index) {
        item.style.display='none'
        if(index <(selectedPage)*5 && index >= (selectedPage-1)*5) {
            item.style.display='block'
        }
    })
})
lastPageBtn.addEventListener('click',function(){
    let currentTodos = document.querySelectorAll('li');
    let pages = Math.ceil(currentTodos.length/5);
    if(pages===0) {
        return
    }
    selectedPage = pages
    console.log(selectedPage)
    currentPage.innerHTML = selectedPage +' / '+ pages;
    currentTodos.forEach(function(item,index) {
        item.style.display='none'
        if(index <(selectedPage)*5 && index >= (selectedPage-1)*5) {
            item.style.display='block'
        }
    })
})
firstPageBtn.addEventListener('click',function(){
    let currentTodos = document.querySelectorAll('li');
    let pages = Math.ceil(currentTodos.length/5);
    if(pages===0) {
        return
    }
    selectedPage =1
    console.log(selectedPage)
    currentPage.innerHTML = selectedPage +' / '+ pages;
    currentTodos.forEach(function(item,index) {
        item.style.display='none'
        if(index <(selectedPage)*5 && index >= (selectedPage-1)*5) {
            item.style.display='block'
        }
    })
})
nextPageBtn.addEventListener('click',function(){
    let currentTodos = document.querySelectorAll('li');
    let pages = Math.ceil(currentTodos.length/5);
    if(pages===0) {
        return
    }
    if(pages > selectedPage) {
        selectedPage++
    }
    console.log(selectedPage)
    currentPage.innerHTML = selectedPage +' / '+ pages;
    currentTodos.forEach(function(item,index) {
        item.style.display='none'
        if(index <(selectedPage)*5 && index >= (selectedPage-1)*5) {
            item.style.display='block'
        }
    })
})

todosUl.addEventListener('click',function(e){
    let currentTodos = document.querySelectorAll('li');
    let pages = Math.ceil(currentTodos.length/5);
    currentPage.innerHTML = selectedPage +' / '+ pages;
    currentTodos.forEach(function(item,index) {
        item.style.display='none'
        if(index <(selectedPage)*5 && index >= (selectedPage-1)*5) {
            item.style.display='block'
        }
    let element = e.target.parentElement;
    if(e.target.classList.contains('fa-trash-can')) {
        element.classList.add('delete')
        function deleting(){
            element.remove();
        }
        setTimeout(deleting,1000)
        function reload(){
            currentTodos[selectedPage*5].style.display='block';
        }
        setTimeout(reload,1200)
        
    }
    if(e.target.classList.contains('fa-check')) {
        element.classList.toggle('through')
        }  
    })
})

