document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert("Товар добавлен в корзину!"); // Пример реакции на клик
            // Здесь можно добавить логику для добавления товара в корзину
        });
    });
});
