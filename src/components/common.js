function footer() {
  return ` <section class="Footer">
    <p>Copyright © 2016 Foodies Hotel. All rights reserved. by Brighthemes</p>
    <p> PERMISSIONS AND COPYRIGHTS - CONTACT US</p>

   </section>`;
}
function navbar() {
  return ` 
               
    <nav>     
                        
    <img id="Logo" src="../img/logo.png" alt="">
  



  <div class="navPages">
       <a href="./Home.html">HOME</a>
       <a href="./Menu.html">MENU</a>
       <a href="./login.html">LOGIN</a>
       <a href="./sign-up.html">SIGN UP</a>


  </div>
  <div>
  </div>
  <div>
  </div>

  <span id="hamberger"><i class="fa-solid fa-bars fa-xl"></i></span>
  <span id="Cross"><i class="fa-solid fa-xmark fa-xl"></i></span>
 
  <div>

  <a id="cart" href="./cart.html" ><i class="fa-solid fa-cart-plus fa-lg"></i> </a>

  </div>

  </nav>
`;
}

export { footer, navbar };
