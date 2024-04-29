const avatar = document.querySelector('.login')


const urlApp = 'https://api.github.com/users/facebook'
let dataResponse

const getData = async (api) => {
    const serverResponse = await fetch(api)
    dataResponse = await serverResponse.json()
    dataWork(dataResponse)
}
getData(urlApp)

function dataWork(data){
    let imageDiv = document.createElement("div");// Создаем третий новый div для изображения
    let image = document.createElement("img");  // Создаем элемент изображения
    image.src = data.avatar_url;    // src є скороченням від "source" (джерело) і вказує шлях до зображення data.avatar_url                               
    imageDiv.classList.add("avatar-image"); // Присваиваем класс для стилизации (если требуется)
    imageDiv.appendChild(image); // Добавляем изображение внутрь элемента imageDiv         
    avatarUrlDiv.appendChild(imageDiv); // Добавляем созданный div внутрь элемента .avatar_url
}
