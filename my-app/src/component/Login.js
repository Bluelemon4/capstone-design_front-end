function handleSubmit(event) {
    event.preventDefault();

    var id = document.querySelector('input[type="id"]').value;
    var password = document.querySelector('input[type="password"]').value;

    console.log("아이디:", id);
    console.log("비밀번호:", password);
}

var loginForm = document.querySelector('form');

loginForm.addEventListener('submit', handleSubmit);