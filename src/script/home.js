
import { footer } from "../components/common.js";
    
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Listen for the scroll event on the window
    window.addEventListener('scroll', function() {
      // Check if the user has scrolled down at least 50 pixels
      if (window.scrollY >= 50) {
        // Add the "navbar-scrolled" class to the navbar
        navbar.classList.add('sticky');
        document.querySelector("#Logo").src="../img/logo-dark.png";
      } else {
        // Remove the "navbar-scrolled" class from the navbar
        navbar.classList.remove('sticky');
        document.querySelector("#Logo").src="../img/logo.png";
      }
    });


    


   
    
 document.querySelector("#Footer").innerHTML =  footer();
