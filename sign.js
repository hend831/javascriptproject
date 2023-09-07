// let signupbtn=document.getElementById("signupbtn");
// let signinbtn=document.getElementById("signinbtn");
// let nameField=document.getElementById("nameField");
// let title=document.getElementById("title");


// signinbtn.onclick=function(){
//   nameField.style.maxHeight="0";
//   title.innerHTML="Sign In";
//   signupbtn.classList.add("disable");
//   signinbtn.classList.remove("disable");


// }

// signupbtn.onclick=function(){
//   nameField.style.maxHeight="60px";
//   title.innerHTML="Sign Up";
//   signupbtn.classList.remove("disable");
//   signinbtn.classList.add("disable");

// }




// hasnaa
let signupbtn=document.getElementById("signupbtn");
let signinbtn=document.getElementById("signinbtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");
let linkin=document.getElementById("linkin");
let linkup=document.getElementById("linkup")


linkin.onclick=function(){
  nameField.style.maxHeight="0";
  title.innerHTML="Sign In";
  
  linkin.classList.remove("disable");
  linkin.style.display="none";
  signinbtn.style.display="inline";
  signupbtn.style.display="none";
  linkup.style.display="inline";

}

linkup.onclick=function(){
  nameField.style.maxHeight="60px";
  title.innerHTML="Sign Up";
  linkup.classList.remove("disable");
  linkin.style.display="inline";
  signinbtn.style.display="none";
  signupbtn.style.display="inline";
  linkup.style.display="none";

}




function signup(){
    document.getElementById("login").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      //var confirmPassword = document.getElementById("confirmPassword").value;
      
       
      // Regular expressions for validation
      var usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;
      //var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

      if (!usernamePattern.test(username)) {
        alert("Username must be 3-16 characters long and can only contain letters, numbers, underscores, and hyphens.");
        return false;
      }
      /* if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      } */

      /* if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
      } */

      if (!passwordPattern.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and be 6-20 characters long.");
        return false;
      }

      if (email.includes("@")) {
        var user = {
          username: username,
          email: email,
          password: password
        };
      }
      var users = JSON.parse(localStorage.getItem("users")) || [];

      // Add the new user to the array
      users.push(user);

      // Store the updated array back into local storage
      localStorage.setItem("users", JSON.stringify(users));

      alert("Sign up successful!");
      window.location.assign("index.html")
      return true;

    
      
    });
}

function signin(){
    document.getElementById("login").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      // Retrieve the users array from local storage
      var users = JSON.parse(localStorage.getItem("users")) || [];

      // Find the user with matching email and password
      var user = users.find(function(user) {
        return user.email === email && user.password === password;
      });
      
      if (user) {
        // User found, perform login actions
        alert("Login successful!");
        window.location.assign("index.html");
      
        // Redirect to a new page or perform any other required actions
      } else {
        // User not found or invalid credentials
        alert("Invalid email or password. Please try again.");
      }

      // Clear the form
      document.getElementById("login-form").reset();
    });
}




