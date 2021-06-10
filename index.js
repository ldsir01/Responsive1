const Button = document.getElementsByClassName("change-color")[0];
const box_ = document.getElementsByClassName("box")[0];

Button.addEventListener('click', () => {
    document.getElementsByClassName("box")[0].classList.toggle('active');
    document.getElementsByClassName("change-color")[0].classList.toggle('active');
    document.getElementsByClassName("round-1")[0].classList.toggle('active');
    document.getElementsByClassName("round-2")[0].classList.toggle('active');
})