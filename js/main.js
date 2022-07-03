    //jquery for navbar
    var navLinks = document.getElementById("navLinks");

          function showMenu(){
               navLinks.style.right = "0";
          };
          function hideMenu(){
               navLinks.style.right = "-200px";

      };
     //jquery for gallery
     document.querySelectorAll('.image_container img').forEach(image =>{
          image.onclick = () =>{
              
           document.querySelector('.popup_image').style.display = 'block';
              document.querySelector('.popup_image img').src = image.getAttribute('src');
          
          }
       });
       document.querySelector('.popup_image span').onclick = () =>{
           document.querySelector('.popup_image').style.display = 'none';
       };