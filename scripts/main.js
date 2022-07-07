const burger = {
    state : false,
    setState: (val) => this.state = val,
    getState: () => this.state,
    openMenu : (menu, but) => {
        menu.style.display="flex";
        but.style.backgroundImage="url('../testRemotEmployees/img/header/close.png')";
        this.state = true;
    },
    closeMenu : (menu, but) => {
        menu.style.display="none";
        this.state = false;
        but.style.backgroundImage="url('../testRemotEmployees/img/header/burger.png')";
    }
}

const validateForm = () => {
    alert("dsa");
}


const burgerMenu = document.getElementById("burger-menu");
const burgerButton = document.getElementById("burger");
burgerButton.addEventListener("click", (el) => {
    burger.getState() ? burger.closeMenu(burgerMenu, burgerButton) : burger.openMenu(burgerMenu, burgerButton)
});
const formItems = Array.from(document.getElementsByClassName("form-control"));
const form = document.getElementById("validateForm");
form.addEventListener('submit', (event) => {
	event.preventDefault();
    alert("Спасибо");
    formItems.forEach(element => {
        element.value="";
    });
});

