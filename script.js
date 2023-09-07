


$(document).ready(function() {
  var slides = $("#slideshow img");
  var currentSlide = 0;
  var slideInterval;

  // Start the slideshow
  startSlideshow();

  // Next button click event
  $("#next-button").click(function() {
    nextSlide();
    clearInterval(slideInterval); // Stop the automatic slideshow
  });

  // Previous button click event
  $("#prev-button").click(function() {
    prevSlide();
    clearInterval(slideInterval); // Stop the automatic slideshow
  });
  startSlideshow();
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 1500); // Change slide every 3 seconds
  }

  function nextSlide() {
    // Hide the current slide
    slides.eq(currentSlide).removeClass("active");

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides.eq(currentSlide).addClass("active");
  }

  function prevSlide() {
    // Hide the current slide
    slides.eq(currentSlide).removeClass("active");

    // Move to the previous slide
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    // Show the previous slide
    slides.eq(currentSlide).addClass("active");
  }


  
});


function readMorFun1() {
  
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "Read more";
    moreText1.style.display = "none";
  } 
  else {
    dots1.style.display = "none";
    btnText1.innerHTML = "Read less";
    moreText1.style.display = "inline";
  }
  
}

function readMorFun2(){
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } 
  else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}

function readMorFun3(){
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } 
  else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}









//localStorage.clear();

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
                cartItems.splice(2,1)
                localStorage.setItem("cartItems", JSON.stringify(cartItems));

               
            } else {
               
            }
        }
    });
});
});




//localStorage.clear()
var list =JSON.parse(localStorage.getItem('cartItems'));
// list = (list.length)-1;



var fff=JSON.parse(localStorage.getItem('Info'))||[];


for(var i=0;i<fff.length;i++){
const table = document.getElementById("tablee");

// Create a new tbody element
const newTBody = document.createElement("tbody");

// Add a class to the new tbody element
newTBody.classList.add("tableBody");
// Create a new table row with class "shopList"
const newRow = document.createElement("tr");
newRow.classList.add("shopList");

// Create cells for the new row
const removeCell = document.createElement("td");
removeCell.innerHTML = '<a href=""><i class="far fab fa-times-circle "id="delete"></i></a>';

const imageCell = document.createElement("td");

imageCell.innerHTML = '<img id="imgCart"  alt="">';
var storDataa =JSON.parse(localStorage.getItem('cartItems'));
var mainnImgg= storDataa[i].imgSrc;
imageCell.setAttribute('src',mainnImgg);

const productCell = document.createElement("td");
var mame= storDataa[i].productName;
productCell.textContent = mame;

const priceCell = document.createElement("td");
var priee= storDataa[i].price;
priceCell.textContent = priee;

const quantityCell = document.createElement("td");
var quan = fff[i].quantity;
quantityCell.innerHTML = '<h4></h4>';
quantityCell.textContent=quan;

const subtotalCell = document.createElement("td");
subtotalCell.textContent = quan* priee;
subtotalCell.classList.add("totaly");

// Append cells to the row

newRow.appendChild(removeCell);
newRow.appendChild(imageCell);
newRow.appendChild(productCell);
newRow.appendChild(priceCell);
newRow.appendChild(quantityCell);
newRow.appendChild(subtotalCell);

// Append the new row to the new tbody
newTBody.appendChild(newRow);

table.appendChild(newTBody);


var tablee = document.getElementById("tablee");
console.log(tablee.rows.item(0));

// Loop through each row and add a click event listener to the delete buttons
var deleteButtons = table.querySelectorAll("i[id^='delete']");
deleteButtons.forEach(function (i) {
  i.addEventListener("click", function() {
      // Get the parent row of the button that was clicked
      var row = i.closest("tr");
      // Delete the row
      console.log()
      for(var l=0;l<tablee.rows.length;l++){
        if (row==tablee.rows.item(l)) {
          for(var j=0;j<fff.length;j++){
            if (j==(l-1)){
            row.remove();
            fff.splice(j,1)
            //console.log("rowpriceCell")
            }
          }    
        }
        localStorage.setItem("Info", JSON.stringify(fff));
      }
      
  });
});


}

var fff=JSON.parse(localStorage.getItem('Info'))||[];

var count =0;
for(var i=0;i<fff.length;i++){

count=fff[i].quantity +count;

}
console.log(count);

var totalelements =document.getElementsByClassName("totaly");
var sum =0;

for(var i=0; i<totalelements.length;i++){
var textContent = totalelements[i].textContent;
sum += parseFloat(textContent);
}

console.log(sum);

localStorage.setItem("totalcoount",count);
localStorage.setItem("totasum",sum);



function OpenWin(){
window.open("offer.html");
}

function showPage(){
window.open("sign.html");
}
function openSignPage(){
  window.open("sign.html",_blank);
}


