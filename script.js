document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.see_more_btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const comment = button.previousElementSibling;
            comment.classList.toggle('expanded');

            if (comment.classList.contains('expanded')) {
                button.textContent = 'See Less';
            } else {
                button.textContent = 'See More';
            }
        });
    });

    // Burger Menu Logic
    const burgerMenu = document.querySelector('.burger_menu');
    const navUrl = document.querySelector('nav > ul');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            navUrl.classList.toggle('active');
        });
    }
});
