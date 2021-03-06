var link = document.querySelector('.contacts-button');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal-close');

var form = popup.querySelector('.modal-form');
var login = popup.querySelector('.modal-input-login');
var mail = popup.querySelector('.modal-input-mail');

var storage = localStorage.getItem('modal-input-mail');

// Открытие окна
link.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
});


// закрытие окна
close.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

// отправка формы
form.addEventListener('submit', function (event) {
  if (!login.value || !password.value) {
    popup.classList.remove('modal-error');
    //popup.offsetWidth = popup.offsetWidth;
    console.log('Нужно ввести имя и электронную почту');
    popup.classList.add('modal-error');
    event.preventDefault();
  } else {
    localStorage.setItem('login', login.value);
    localStorage.setItem('mail', password.value);
  }
});

// закрытие на esc
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');

    }
  }
});
