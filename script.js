document.querySelectorAll('.burgerBtn').forEach(button => {
    button.addEventListener('click', () => {
        const navMenu = button.nextElementSibling;

        button.classList.toggle('burgerBtn--active');

        if(button.classList.contains('burgerBtn--active')) {
            navMenu.getElementsByClassName.maxHeight = navMenu.scrollHeight + "px";
        } else {
            navMenu.getElementsByClassName.maxHeight = 0;
        }
    })

})