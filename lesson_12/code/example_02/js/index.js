// console.log('test')

// меняем
const ourTitle = document.querySelector('.title')
// console.log(ourTitle)
ourTitle.innerText = 'Header'
ourTitle.classList.add('font-red')

// создаем новые nody
const ourSpan = document.createElement('span')
ourSpan.innerText = 'Text in span'
ourSpan.classList.add('span-style')
//созданную nody вставляем в нам нужное место
ourTitle.append(ourSpan)

// слушаем события
// создаем кнопку
const ourButton = document.createElement('button')
ourButton.innerText = 'lets go'
// размещаем кнопку
const divForButton = document.querySelector('.button')
divForButton.append(ourButton)
// вешаем слушатель на кнопку
ourButton.addEventListener('click', functionB)



// вспомагательная функция (callback)
function functionB(){
    console.log('Я функция functionB выполнилась');
}