const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector.Selector('#menu-icon');
let navlist = document.querySelector.Selector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
