

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




// **********************
// // Function to be called when "Add To Cart" button is clicked



// --------------------------------

var lista =JSON.parse(localStorage.getItem('cartItems'));
lista = (lista.length)-1;

var simg= lista -lista;
// ----------------------------
const singleProImageDiv = document.createElement('div');
singleProImageDiv.classList.add('single-pro-image');

// Create an img element with class 'MainImg'
const MainImg = document.createElement('img');
var storData =JSON.parse(localStorage.getItem('cartItems'));

var mainnImg= storData[lista].imgSrc;
MainImg.setAttribute('src',mainnImg);
MainImg.classList.add('MainImg');
MainImg.setAttribute('width', '100%');
MainImg.setAttribute('alt', 'x');


// Append the 'MainImg' img element to the 'single-pro-image' div
singleProImageDiv.appendChild(MainImg);

// Create a div element with class 'small-img-group'
const smallImgGroupDiv = document.createElement('div');
smallImgGroupDiv.classList.add('small-img-group');

// Create three 'small-img-col' divs and add them to 'smallImgGroupDiv'
for (let i = 0; i < 4; i++) {
  const smallImgColDiv = document.createElement('div');
  smallImgColDiv.classList.add('small-img-col');

  // Create an img element with class 'small-img'
  const SmallImg = document.createElement('img');
  
  var mg= storData[simg].imgSrc;
  SmallImg.setAttribute('src', mg); // Set your image source here
  SmallImg.setAttribute('width', '100%');
  SmallImg.classList.add('small-img');
  SmallImg.setAttribute('alt', '');
  SmallImg.style.visibility='hidden';
  // Append the 'small-img' img element to the 'small-img-col' div
  smallImgColDiv.appendChild(SmallImg);

  // Append the 'small-img-col' div to the 'small-img-group' div
  smallImgGroupDiv.appendChild(smallImgColDiv);
}

// Append the 'small-img-group' div to the 'single-pro-image' div
singleProImageDiv.appendChild(smallImgGroupDiv);

// Find the 'prodetails' section by its ID
const prodetailsSection = document.getElementById('prodetails');

// Append the 'single-pro-image' div to the 'prodetails' section
prodetailsSection.appendChild(singleProImageDiv);


// ----------------------------------------



// Create a div element with class 'single-pro-details'
const singleProDetailsDiv = document.createElement('div');
singleProDetailsDiv.classList.add('single-pro-details');

// Create an h6 element and set its text content
const h6 = document.createElement('h6');
h6.textContent = 'Home / T-Shirt';

// Create an h4 element with class 'pname' and set its text content
const h4Pname = document.createElement('h4');
h4Pname.classList.add('pname');
var storData =JSON.parse(localStorage.getItem('cartItems'));
var namee= storData[lista].productName;
h4Pname.textContent = namee;

// Create an h2 element with class 'product-price pprice' and set its text content
const h2ProductPrice = document.createElement('h2');
h2ProductPrice.classList.add('product-price', 'pprice');
var storData =JSON.parse(localStorage.getItem('cartItems'));
var pricee= storData[lista].price;
h2ProductPrice.textContent = pricee;

// Create a select element
const selectSize = document.createElement('select');

// Create and append option elements to the select element
const sizeOptions = ['Select size', 'XL', 'XXL', 'XXXL', 'XS', 'S', 'M'];
sizeOptions.forEach(optionText => {
  const option = document.createElement('option');
  option.textContent = optionText;
  selectSize.appendChild(option);
});

// Create an input element with class 'quantity' and set its attributes
const inputQuantity = document.createElement('input');
inputQuantity.setAttribute('type', 'number');
inputQuantity.classList.add('quantity');
inputQuantity.value = '1';

// Create a button element with class 'normal', set its attributes and add a click event listener
const buttonAddToCart = document.createElement('button');
buttonAddToCart.classList.add('normal');
buttonAddToCart.classList.add('addto');
buttonAddToCart.textContent = 'Add To Cart';
//buttonAddToCart.addEventListener('click', buyingSucceeded);

// Create an h4 element and set its text content
const h4ProductDetails = document.createElement('h4');
h4ProductDetails.textContent = 'Product Details';

// Create a span element and set its text content
const spanProductDescription = document.createElement('span');
spanProductDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi perferendis ipsam, repellat voluptate ipsum dolor mollitia excepturi perspiciatis molestias a similique aliquam, tempora, eum temporibus! Asperiores ipsum sed ipsam.';

// Append all created elements to the 'single-pro-details' div
singleProDetailsDiv.appendChild(h6);
singleProDetailsDiv.appendChild(h4Pname);
singleProDetailsDiv.appendChild(h2ProductPrice);
singleProDetailsDiv.appendChild(selectSize);
singleProDetailsDiv.appendChild(inputQuantity);
singleProDetailsDiv.appendChild(buttonAddToCart);
singleProDetailsDiv.appendChild(h4ProductDetails);
singleProDetailsDiv.appendChild(spanProductDescription);

// Find the parent element where you want to append the 'single-pro-details' div
const parentElement = document.getElementById('prodetails'); // Replace with the actual ID

// Append the 'single-pro-details' div to the parent element
parentElement.appendChild(singleProDetailsDiv);
  




document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtonn = document.querySelectorAll(".addto");

  addToCartButtonn.forEach(button => {
    button.addEventListener("click", event => {
      const productDiv = event.target.closest(".single-pro-details");

      if (productDiv) {
        // const imgSrc = productDiv.querySelector(".single-pro-image .MainImg").src;
        const productName = productDiv.querySelector(".pname").textContent;
        const price = parseFloat(productDiv.querySelector(".product-price ").textContent);
        const quantity = parseFloat(productDiv.querySelector(".quantity ").value);

        const info = {
          // imgSrc: imgSrc,
          productName: productName,
          price: price,
          quantity: quantity
        };

        if (typeof Storage !== "undefined") {
          let Info = JSON.parse(localStorage.getItem("Info")) || [];
          Info.push(info);
          localStorage.setItem("Info", JSON.stringify(Info));

          alert("Item added to cart!");
        } else {
          alert("Your browser doesn't support localStorage.");
        }
       
        window.open("cart.html", "_self");
        

      }
    });
  });
});



// function removeInfoFromLocalStorage() {
//   localStorage.removeItem('Info');
//   localStorage.removeItem('cartItems'); // Delete the 'cartItems' object
// localStorage.removeItem('totalcoount'); // Delete the 'totalcount' key
// localStorage.removeItem('totasum'); 
// }

// // Call the function when the page loads
// window.addEventListener('load', removeInfoFromLocalStorage);
