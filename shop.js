
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".cartt");
  
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const productDiv = event.target.closest(".pro");
  
            if (productDiv) {
                const imgSrc = productDiv.querySelector("img").src;
                const productName = productDiv.querySelector("#product1 .pro-container .pro .des h5").textContent;
                const price = parseFloat(productDiv.querySelector("#product1 .pro-container .pro .des h4").textContent);
  
                const cartItem = {
                    imgSrc: imgSrc,
                    productName: productName,
                    price: price
                };
  
                if (typeof(Storage) !== "undefined") {
                    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                    cartItems.push(cartItem);
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
                   
                } else {
                   
                }
            }
        });
    });
  });
  

  function openSignPage(){
    window.open("sign.html")
  }