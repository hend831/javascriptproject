
  
  var formati=JSON.parse(localStorage.getItem('Info'));


  // Create a div element
  var divElement = document.createElement('div');
  
  divElement.style.color="#fff";
  divElement.style.borderRadius="8px";

  var storecount=localStorage.getItem("totalcoount");
var storesum=localStorage.getItem("totasum");

  // Create an h5 element and add text content
  var h5 = document.createElement('h4');
  h5.textContent =`Number of pices  : ${storecount}`;
  h5.style.padding="30px";
  // Create another h4 element and add text content
  var h4_2 = document.createElement('h4');
  h4_2.textContent =`Total prices  : ${storesum}`; 
  h4_2.style.padding="30px";
  var btn_2 = document.createElement('button');
  btn_2.textContent = "Confirm";
  btn_2.classList.add('normal');
  btn_2.style.backgroundColor = '#088178';
  btn_2.style.color = '#fff';
  btn_2.style.marginLeft = '15px';
  btn_2.style.marginBottom = '5px';
  // Append the elements as children
  // divElement.appendChild(h4_1);
  divElement.appendChild(h5);
  divElement.appendChild(h4_2);
  divElement.appendChild(btn_2);
  btn_2.addEventListener('click',function () {
    window.open("buy.html")
  });

  // Add the div to the body of the HTML document
 
  var yy= document.getElementById('subb');
 yy.appendChild(divElement);


 //