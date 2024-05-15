
const products = [
    {
        image: '../images/hyperpc-one-deepcool.jpg',
        price: 1000,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },
    {
        image: '../images/hyperpc-gaming-fury.jpg',
        price: 2000,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },
    {
        image: '../images/hyperpc-one-deepcool.jpg',
        price: 3005,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },
    {
        image: '../images/hyperpc-one-deepcool.jpg',
        price: 3060,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },
    {
        image: '../images/hyperpc-one-deepcool.jpg',
        price: 300,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },
    {
        image: '../images/hyperpc-one-deepcool.jpg',
        price: 300,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },
    {
        image: '../images/hyperpc-one-deepcool.jpg',
        price: 300,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },
    {
        image: '../images/hyperpc-one-deepcool.jpg',
        price: 300,
        description: 'Компьютер: модель One <br> Процессор: Intel Core i5 <br> 16 ГБ оперативной памяти <br> 512 ГБ SSD',
    },

];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const listItem = document.createElement('li');

    const img = document.createElement('img');
    img.src = product.image;
    img.className = 'foto';
    listItem.appendChild(img);

    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';

    const description = document.createElement('p');
    description.innerHTML = product.description;
    productInfo.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `Цена: ${product.price} руб.`;
    productInfo.appendChild(price);

    const button = document.createElement('button');
    button.textContent = 'Добавить в корзину';
    button.onclick = () => addToCart(product);
    productInfo.appendChild(button);

    listItem.appendChild(productInfo);

    productList.appendChild(listItem);
});
function addToCart(product) {
    console.log('Товар добавлен в корзину:', product);
    alert(`Товар добавлен в корзину: ${product.description.replace(/<br>/g, '\n')}`);
}
