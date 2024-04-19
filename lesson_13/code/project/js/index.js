// что нужно сделать

// получить текст из поля ввода
// создать новый элемент списка т.е 'li'
// получить текст и записать в переменную
// добавить текст в список


const inputField = document.querySelector('#input-field')
const btnCreate = document.querySelector('.btn')
const list = document.querySelector('.list')
const clearOneBtnElement = document.querySelector('#clear-one')
const listElement = document.querySelector('#list')


// вешаем слушатель на кнопку
btnCreate.addEventListener('click', pushText)

function pushText(){
    // получить текст из поля ввода
    const text = inputField.value

    // создать новый элемент списка т.е 'li'
    const listItem = document.createElement('li')

    // получить текст и записать в переменную
    listItem.textContent = text

    // добавляем стили к созданным элементам
    listItem.classList.add('list-item')

    // добавить текст в список
    list.appendChild(listItem)

    inputField.value = ''
}
const clearOne = function(){
    if(listElement.hasChildNodes()){
        listElement.firstChild.remove()
    }
}
clearOneBtnElement.addEventListener('click', clearOne)

function changeStatus(event){
    const listItem = event.target;
    listItem.classList.toggle('list-item_done');
}
list.addEventListener('click', changeStatus);
