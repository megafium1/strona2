"use strict";

document.addEventListener("DOMContentLoaded", function() 
{
    let savedDark = localStorage.getItem("dark_mode");
    if (savedDark == "true") 
    {
        document.body.classList.add("dark_mode");
    }
});

  
  let dark = localStorage.getItem("dark_mode") == "true";
  
  function dark_mode() 
  {
      dark = !dark; 
      set_dark(); 
      localStorage.setItem("dark_mode", dark);
  }
  
  function set_dark() 
  {
      if (dark) 
      {
          document.body.classList.add("dark_mode");
      } 
      else 
      {
          document.body.classList.remove("dark_mode");
      }
  }
  

  document.addEventListener("DOMContentLoaded", function() 
  {
      let savedBigger = localStorage.getItem("bigger");
      if (savedBigger == "true") 
      {
          document.body.classList.add("biger");
      }
  });
  
  let bigger = localStorage.getItem("bigger") == "true";
  
  function biger() 
  {
      bigger = !bigger; 
      set_bigger(); 
      localStorage.setItem("bigger", bigger);
  }
  
  function set_bigger() 
  {
      if (bigger) 
      {
          document.body.classList.add("biger");
      } 
      else 
      {
          document.body.classList.remove("biger");
      }
  }
  




let isciast;
window.onload = function cookies(){
  if (localStorage.getItem("wasclicked") === "true")
    {  document.getElementById("cokies").classList.add("nocookies");
}
}
function cookies_yes(event) {
  event.preventDefault()
  document.getElementById("cokies").classList.add("nocookies");
  isciast = 1;
localStorage.setItem("wasclicked", "true");
}

function cookies_no(event) {
  event.preventDefault();
  document.getElementById("cokies").classList.add("nocookies");
  isciast = 0;
localStorage.setItem("wasclicked", "true");
}




