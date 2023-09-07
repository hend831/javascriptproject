document.querySelector(".name").onblur=function(){
    window.localStorage.setItem("input-name",this.value);
   }
   document.querySelector(".email").onblur=function(){
    window.localStorage.setItem("input-email",this.value);
   }
   document.querySelector(".subject").onblur=function(){
    window.localStorage.setItem("input-subject",this.value);
   }
   document.querySelector(".message").onblur=function(){
    window.localStorage.setItem("input-message",this.value);
   }
   function SubmitData(){
    alert("  You are submitting successfuly Thank You!");
    window.open("about.html");
   }

   function openSignPage(){
    window.open("sign.html")
  }