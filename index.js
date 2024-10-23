const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});

const cartButton = document.getElementById('cart');
const cartSidebar = document.getElementById('cart_sidebar');
const closeCartButton = document.getElementById('close-cart');

cartButton.onclick = function () {
  cartSidebar.classList.toggle('translate-x-full');
}

closeCartButton.onclick = function () {
  cartSidebar.classList.toggle('translate-x-full');
}