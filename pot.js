
let menu = document.getElementById('menu')
let bro = document.getElementById('top')





function opening() {

  menu.innerHTML = `<div id="ex"><ion-icon name="close-outline" onclick="closing()"></ion-icon></div>
   <div id="burger">
   
   <div id="scroll"><ul>
   <a href="index.html"><li id="sub-el" onclick="closing()">Home</li></a>
   <a href="work.html"><li id="sub-el" onclick="closing()">Work With Me</li></a>
   <a href="about.html"><li id="sub-el" onclick="closing()">About</li></a>
   <a href="work.html#projects"><li id="sub-el" onclick="closing()">Portfolio</li></a>
   <a href="work.html#contact"><li id="sub-el" onclick="closing()">Contact</li></a>
   
   </ul></div>
   
   </div>
   

   
   `
menu.style.width = "100%"









    
}


function closing() {

   menu.innerHTML = `<div id="menu"><ion-icon name="menu-outline" onclick="opening()"></ion-icon></div>`

  

   

   menu.style.width = "50%"
 

  
 
 
    
}







