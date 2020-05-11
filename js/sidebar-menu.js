(function(){
    const sidebar = document.querySelector(".sidebar");
const openingButton = document.querySelector('.sidebar__humburger');
const closeButton = document.querySelector('.sidebar__close');

openingButton.addEventListener("click", function(){
    sidebar.classList.add('sidebar__opened');
});

closeButton.addEventListener("click", function(){
    sidebar.classList.remove('sidebar__opened');
});
}());