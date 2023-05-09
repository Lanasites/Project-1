const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#header__conteiner").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}



// Скрипт для работы аккардиона
const boxes = Array.from(document.querySelectorAll(".faq__box")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
    e.preventDefault(); // сбрасываем стандартное поведение
    let currentBox = e.target.closest(".faq__box"); // определяем текущий бокс
    let currentContent = e.target.nextElementSibling; // находим скрытый контент
    currentBox.classList.toggle("active"); // присваиваем ему активный класс
    if (currentBox.classList.contains("active")) {
        // если класс активный ..
        currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
    } else {
        // в противном случае
        currentContent.style.maxHeight = 0; // скрываем контент
    }
}


// // скрипт для закрашивания фона меню при скроле
const header = document.getElementById('header');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

