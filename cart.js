function goToSubmet(){
    window.open('submet.html');
}

document.addEventListener("DOMContentLoaded", function () {
    const addToCart = document.querySelectorAll("#addto");
  
    addToCart.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const productDivv = event.target.closest(".single-pro-details",".single-pro-image");
  
            if (productDivv) {
                const imgSrcc = productDivv.querySelector("#product1 .MainImg").src;
                const productNamee = productDivv.querySelector("#product1 .single-pro-details .pname").textContent;
                const pricee = parseFloat(productDivv.querySelector("#product1 .single-pro-details .product-price ").textContent);
                const quantityy = parseFloat(productDivv.querySelector("#product1 .single-pro-details .quantity ").textContent);
  
                const info = {
                    imgSrcc: imgSrcc,
                    productNamee: productNamee,
                    pricee: pricee,
                    quantityy: quantityy
                };
  
                if (typeof(Storage) !== "undefined") {
                    let cartit = JSON.parse(localStorage.getItem("cartit")) || [];
                    cartit.push(info);
                    localStorage.setItem("cartit", JSON.stringify(cartit));
  
                    alert("Item added to cart!");
                } else {
                    alert("Your browser doesn't support localStorage.");
                }
            }
        });
    });
  });
 


