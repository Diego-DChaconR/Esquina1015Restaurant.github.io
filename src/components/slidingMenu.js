function controlSlidingMenu() {
    var slidingMenu = document.getElementsByClassName("sliding-menu-container");
    if (slidingMenu[0].style.display != "none") {
        slidingMenu[0].style.display = "none";
    } else {
        slidingMenu[0].style.display = "flex";
    }
}

function controlSlidingMenuProducts() {
    var productMenu = document.getElementsByClassName("sub-nav-list");
    if (productMenu[0].style.display != "none") {
        productMenu[0].style.display = "none";
    } else {
        productMenu[0].style.display = "flex";
    }
}

function controlSlidingMenuMore() {
    var moreMenu = document.getElementsByClassName("sub-nav-more");
    if (moreMenu[0].style.display != "none") {
        moreMenu[0].style.display = "none";
    } else {
        moreMenu[0].style.display = "flex";
    }
}

function controlSlidingMenuLogin() {
    var loginMenu = document.getElementsByClassName("login-sliding-menu");
    if (loginMenu[0].style.display != "none") {
        loginMenu[0].style.display = "none";
    } else {
        loginMenu[0].style.display = "flex";
    }
}

function modifySlidingMenu() {
    var slidingMenu = document.getElementById("Menu-bars");
    var products = document.getElementsByClassName("nav-item");
    var loginButton = document.getElementById("login-sliding");
    var closeSlidingMenu = document.getElementById("close-sliding-menu");

    controlSlidingMenu();
    controlSlidingMenuProducts();
    controlSlidingMenuMore();
    controlSlidingMenuLogin();

    slidingMenu.addEventListener("click", controlSlidingMenu);
    closeSlidingMenu.addEventListener("click", controlSlidingMenu);
    products[0].addEventListener("click", controlSlidingMenuProducts);
    products[products.length - 1].addEventListener("click", controlSlidingMenuMore);
    loginButton.addEventListener("click", controlSlidingMenuLogin);
}

modifySlidingMenu();