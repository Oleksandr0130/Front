// что нужно сделать

// получить текст из поля ввода
// создать новый элемент списка т.е 'li'
// получить текст и записать в переменную
// добавить текст в список

// // вешаем слушатель на кнопку
// btnCreate.addEventListener('click', pushText)

// function pushText(){
//     // получить текст из поля ввода
//     const text = inputField.value.trim()
    
//     // создать новый элемент списка т.е 'li'
//     const listItem = document.createElement('li')
    
//     // получить текст и записать в переменную
//     listItem.textContent = text
    
//     // добавляем стили к созданным элементам
//     listItem.classList.add('list-item')
    
//     // добавить текст в список
//     list.appendChild(listItem)
    
//     // inputField.value = ''
// }


// const clearOne = function(){
//     if(listElement.hasChildNodes()){
//         listElement.firstChild.remove()
//     }
// }
// clearOneBtnElement.addEventListener('click', clearOne)


const inputField = document.querySelector('#input-field')
const btnCreate = document.querySelector('.btn')
const list = document.querySelector('.list')
const clearOneBtnElement = document.querySelector('#clear-one')
const listElement = document.querySelector('#list')

// Переменные и Начальный Список
// arrayObject - это массив объектов, представляющий изначальный список задач. Каждый объект содержит три ключа:
// task (строка) — описание задачи.
// date (строка) — дата выполнения задачи.
// done (логическое значение) — показывает, завершена ли задача (true) или нет (false).
let arrayObject = [
    {"task": "Купить продукты", "date": "2024-04-22", "done": true},
    {"task": "Позвонить другу", "date": "2024-04-23", "done": false},
    {"task": "Посетить врача", "date": "2024-04-24", "done": false},
    {"task": "Заплатить за квартиру", "date": "2024-04-25", "done": true},
    {"task": "Подготовить отчет", "date": "2024-04-26", "done": false},
    {"task": "Починить автомобиль", "date": "2024-04-27", "done": true},
    {"task": "Посадить цветы", "date": "2024-04-28", "done": false},
    {"task": "Прочитать книгу", "date": "2024-04-29", "done": true},
    {"task": "Сходить в спортзал", "date": "2024-04-30", "done": false},
    {"task": "Приготовить ужин", "date": "2024-05-01", "done": true}
]

// Функция callBackArray
// Эта функция принимает объект задачи и создает элемент HTML (<li>), представляющий задачу в списке.
// Она добавляет класс list-item к элементу <li>.
// Если task.done равно true, то добавляется класс list-item_done (который может, например, выделить завершенные задачи).
// Возвращает элемент HTML.
const callBackArray = (task) => {
    const htmlNode = document.createElement('li')
    htmlNode.classList.add('list-item')
    htmlNode.innerText = task.task
    if (task.done === true){
        htmlNode.classList.add('list-item_done')
    }
    return htmlNode
}

// Функция pushElements
// Использует метод map для преобразования элементов arrayObject в элементы HTML с помощью callBackArray.
// Очищает содержимое HTML-элемента list и затем добавляет созданные элементы в этот элемент.
// Таким образом, эта функция обновляет отображаемый список задач на экране.
function pushElements () {
    const arrayObjectCop = arrayObject.map(callBackArray)
    list.innerHTML = ''
    list.append(...arrayObjectCop)
}
pushElements()

// Добавление Новой Задачи
// При нажатии кнопки btnCreate запускается функция showNewList.
// showNewList берет текст из входного поля inputField и добавляет новый объект в arrayObject со значениями task, date (здесь оба принимают текст из входного поля), и done (начальное значение false).
// Затем вызывается pushElements для обновления списка на экране.
btnCreate.addEventListener('click', showNewList)
function showNewList () {
    const text = inputField.value
    arrayObject.push({
        "task" : text,
        "date" : text,
        "done" : false
})

// console.log(arrayObject)
pushElements()
}

// Изменение Статуса Задачи
// Функция changeStatus вызывается при клике на элемент списка.
// Она определяет элемент, который был нажат (event.target), и меняет значение done в соответствующем объекте arrayObject.
// Внутри changeStatus происходит перебор элементов arrayObject с использованием forEach, и если element.task совпадает с listItem.innerText, то значение done переключается (из true в false и наоборот).
// После изменения значения done, снова вызывается pushElements для обновления списка.
function changeStatus(event){
    const listItem = event.target;
    console.log(listItem.innerText)
    let arrayA = (element) => {
        if(element.task === listItem.innerText){
            element.done = !element.done
            pushElements()
            }
            console.log(arrayObject)
        }
        arrayObject.forEach(arrayA)
    }
    list.addEventListener('click', changeStatus)

    // Слушатель для кнопки очистки должен быть стрелочным
clearOneBtnElement.addEventListener('click', () => {
    arrayObject = arrayObject.filter(deleteElement); // Удаляем задачи с done === true
    pushElements(); // Обновляем список на экране
});

// Функция, определяющая, какие задачи оставить
function deleteElement(element) {
    return (element.done === false); // Удаляем только те, у кого done === false
}