export function headerSections() {
     return ` <!-- Header Section Start -->
     <div class="header-section-for-all">
       <!-- Top Header section -->
       <div class="topBarWrapperHeader d-flex">
         
         <div>
           <!-- Todo! Offer Page Need  -->
           <a href="screens/offers.html">Offers</a>
           <!-- Todo! Fanbook Page Need  -->
           <a href="/screens/fanbook.html" onclick="route()">Fanbook</a>
           <!-- Todo! Download App Page Need  -->
           <a href="/screens/download-app.html" onclick="route()"
             ><i class="fa-solid fa-mobile-screen-button"></i>Download App</a
           >
           <!-- Todo! Membership Page Need  -->
           <a href="/screens/tribe-membership.html" onclick="route()">TriBe Membership</a>
         </div>
 
         <!-- Empty Div -->
         <div></div>
         <div></div>
 
         <div> 
           <!-- Todo! Contact Page Need  -->
           <a href="/contacts=us">Contact Us</a>
           <!-- Todo! Track Order Page Need  -->
           <a href="/track=order">Track Order</a>
         </div>
       </div>
 
       <!-- Main header section -->
       <div class="main-bar-wrapper-header d-flex d-flex-between">
         <div class="logo-and-menu-items d-flex">
 
           <div class="bewakoof-logo-container d-flex flex-center">
             
             <a href="index.html" class="reponsive-none d-block d-flex-between"><img
                 src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
                 alt="Bewakoof Logo"/>
             </a>
             <div class="bfk-eye-logo d-flex d-flex-jcenter left5px d-none">
               <i class="ri-menu-2-line menu-icon"></i>
               <a href="#" class="eye-bfk text-align-center top4px"><img
                 src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
                 alt="Bewakoof Logo"/>
             </a>
             </div>
            
           </div>
 
           
           <div class="dropDwonMenuWrapper d-flex reponsive-none">
             <!-- Todo! Mens Drop Down Menu -->
           <span class="mensFun"><a >Man</a>
               <!-- Mega Drop dwon Start -->
               <div class="container-dropDwonMenu-Wrapper">
                 <div class="dropDwon-collection-container d-flex d-flex-around">
                   <!-- Column 1 Start-->
                   <div class="col-1-mega-menu">
                     <div class="top-wear-mega">
                       <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Top Wear</a>
                     </div>
                     <div class="Innerwear-longewear">
                       <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px;">Innerwear & Loungewear</a>
                     </div>
                   </div>
                   <!-- Column 1 End-->
 
 
                   <!-- Column 2 Start-->
 
 
                   <div class="col-2-mega-menu">
                     <div class="bottom-wear-mega">
                       <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Bottom Wear</a>
                     </div>
                     <div class="accessories-mega">
                       <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Accessories</a>
                     </div>
                    
                   </div>
                   <!-- Column 2 End-->
 
                    <!-- Column 3 Start-->
                   <div class="col-3-mega-menu">
                     <div class="winter-wear-mega">
                       <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Winter Wear</a>
                     </div>
                     <div class="footwear-mega">
                       <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Foot Wear</a>
                     </div>
                     <div class="plus-size-mega">
                       <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Pluse Size</a>
                     </div>
                    
                   </div>
                    <!-- Column 3 End-->
                    <div class="separator2"></div>
 
                    <div class="col-4-mega-menu pd-10-15px width224px d-flex flex-col" style="margin-right: 10%;">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px shade-gray d-block">Specials</a>
                    </div>
                 </div>
             </div>
             <!-- Mega Dropdwon End -->
             </span>
             <!-- Todo! Women Drop Down Menu -->
           <span class="womenFun"><a>Women</a>
                   <!-- Mega Drop dwon Start -->
                   <div class="container-dropDwonMenu-Wrapper">
                     <div class="dropDwon-collection-container d-flex d-flex-around">
                       <!-- Column 1 Start-->
                       <div class="col-1-mega-menu-women">
                         <div class="top-wear-mega-women">
                           <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Top Wear</a>
                         </div>
                       </div>
                       <!-- Column 1 End-->
     
     
                       <!-- Column 2 Start-->
     
     
                       <div class="col-2-mega-menu-women">
                         <div class="bottom-wear-mega-women">
                           <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Bottom Wear</a>
                         </div>
                         <div class="accessories-mega-women">
                           <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Accessories</a>
                         </div>
                         <div class="Innerwear-longewear-women">
                           <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px;">Loungewear</a>
                         </div>
                       </div>
                       <!-- Column 2 End-->
     
                        <!-- Column 3 Start-->
                       <div class="col-3-mega-menu-women">
                         <div class="winter-wear-mega-women">
                           <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Winter Wear</a>
                         </div>
                         <div class="footwear-mega-women">
                           <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Foot Wear</a>
                         </div>
                         <div class="plus-size-mega-women">
                           <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Pluse Size</a>
                         </div>
                        
                       </div>
                        <!-- Column 3 End-->
                        <div class="separator2"></div>
     
                        <div class="col-4-mega-menu-women pd-10-15px width224px d-flex flex-col" style="margin-right: 10%;">
                         <a href="#" class="font14px mr-20px pd-0-30-0-0px shade-gray d-block">Specials</a>
                        </div>
                     </div>
                 </div>
                 <!-- Mega Dropdwon End -->
             </span>
             <!-- Todo! Mobile Covers Drop Down Menu -->
           <span ><a>Mobile Covers</a>
              <!-- Mega Drop dwon Start -->
              <div class="container-dropDwonMenu-Wrapper">
              
               <div class="dropDwon-collection-container ">
 
                 <p class="pd-10-15px">Popular</p>
 
                 <section class="d-flex d-flex-between pd-10-15px" style="width: 80%;">
                
                 <!-- Column 1 Start-->
                 <div class="col-1-mega-menu-popluor" style="margin-top: 2%;">
                   <div class="nothing-mega-covers">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Nothing</a>
                   </div>
                   <div class="apple-mega-covers">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Apple</a>
                   </div>
                 </div>
                 <!-- Column 1 End-->
 
 
                 <!-- Column 2 Start-->
                 <div class="col-2-mega-menu-covers" style="margin-top: 2%;">
                   <div class="xiomi-mega-covers">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Xaimoi</a>
                   </div>
                   <div class="samsung-mega-covers">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Samsung</a>
                   </div>
                 </div>
                 <!-- Column 2 End-->
 
                  <!-- Column 3 Start-->
                 <div class="col-3-mega-menu-covers" style="margin-top: 2%;">
                   <div class="oneplus-mega-covers">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none">Winter Wear</a>
                   </div>
                   <div class="realme-mega-covers">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Foot Wear</a>
                   </div>
                   <div class="vivo-mega-covers">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" style="margin-top: 50px">Pluse Size</a>
                   </div>
                  
                 </div>
                  <!-- Column 3 End-->
                  <div class="separator2"></div>
 
                  <section class="for-image-covers" style="position: relative;">
                   <section class="col-4-mega-menu-covers d-flex flex-col">
                     <a href="#" class="font14px mr-20px pd-0-30-0-0px shade-gray">Others Brand</a>
 
                     <div class="other-brand-covers font14px mr-20px pd-0-30-0-0px mega-blk d-block text-transform-none" >
                     </div>
                     
                 </section>
                
                 
               </section>
               </section>
               </div> 
           </div>
           <!-- Mega Dropdwon End -->
             </span>
           </div>
         </div>
         <div class="search-input-and-action-icons d-flex">
           <!-- Todo! Need to more work on the search bar -->
           <div class="search-input-form-control d-flex  reponsive-none">
             <i class="fa-solid fa-magnifying-glass"> </i>
             <input
               class="myInput"
               type="text"
               placeholder="Search by product, category or collection"
               search-data
             />
           </div>
        
 
           <hr class="separator reponsive-none" />
 
           <div class="action-icons-button d-flex pd-10-15px">
             <!-- Todo! Login Text -->
           <a href="/Login_&_signUp/css/scripts/login.html" class="reponsive-none">
             <i class="fa-regular fa-user"></i>
           </a>
               <i class="fa-solid fa-magnifying-glass d-none" > </i>
               <a href="">
                 <i class="fa-regular fa-heart"></i>
 
               </a>
               <a href="project.html">
               <i class="fa-solid fa-bag-shopping goCart"></i>
               </a>
             <!-- <a href="#"> -->
               <img
                 src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                 alt="country"
             />
           <!-- </a> -->
           </div>
         </div>
       
       </div>
       <!-- Bottom Header section -->
 
       <div class="bottom-header-wrapper-container">
         <ul class="helpList">
           <li> <span  class="mensFun"><a href="">man</a></span>
             
           </li>
           <li ><span class="womenFun"> <a href="">women</a></span></li>
           <li><a href="#">accessories</a></li>
           <li><a href="#">bewakoof air</a></li>
           <li><a href="#">official march</a></li>
           <li><a href="#">plus size</a></li>
         </ul>
       </div>
     </div>
     <!-- Header Section End -->`
}
export function footerSections() {
     return `<footer >
     <div class="footer-items-container  d-flex flex-col d-flex-between ">
         <div class="bfk-logo font-weight-6">
           Bewakoof <sup class="bfk-logo-r">&#174;</sup>
         </div>

         <!-- Footer First Section -->
         <section class="footer-section d-flex  d-flex-between">
           
           <div class="customer-service">
             <span class="footerTitle uppercase font12px">CUSTOMER SERVICE</span>
           </div>
           <div class="about-company">
             <span class="footerTitle uppercase font12px">Company</span>
           </div>

           <div class="connect-with-us">
             <span class="footerTitle uppercase font12px">Connect with us</span>
           </div>
           <div class="keep-up-to-date">
             <span class="footerTitle uppercase font12px">KEEP UP TO DATE</span>
             
           </div>


           
         </section>


         <section class="top3rem ">

           <div class="bfk-features d-flex d-flex-between">
             <div class="bfk-policy witdh11_813rem">
             
             </div>


             <div class="download-app witdh11_813rem">
               <span class="footerTitle uppercase font12px">Dwonload the app</span>
               <!-- ><div class="grid2-1fr" -->
                 <div class="imageContainer"></div>
               <!-- </div> -->
             </div>
             <div class = "secure-paymet witdh17_813rem">
               <span class="footerTitle uppercase font12px">100% Secure Payment</span>
               <!-- ><div class="grid2-1fr" -->
                 <div class="imageContainer"></div>
               <!-- </div> -->
             </div>

             

           </div>
          </section>

          <hr class="separator">

          <section class="d-flex d-flex-between">
           
           <div class="mens-clothing witdh285px">
             <h4 class="font16px uppercase link-color mr-20px">Men's clothing</h4>
             <div class="topWear-collections">
           
             </div>
             <div class="bottomWear-collections mr-10rem">
           
             </div>
             <div class="features-collections mr-10rem">
           
             </div>
             
           </div>

           <div class="womens-clothing witdh285px">
             <h4 class="font16px uppercase link-color mr-20px">Women's clothing</h4>
             <div class="womens-topWear-collections">
           
             </div>

             <div class="womens-bottomWear-collections mr-10rem">
           
             </div>

             <div class="womens-bag-collections mr-10rem">

             </div>

             <div class="womens-features-collections mr-10rem">
           
             </div>
             
           </div>

           <div class="mobile-covers witdh285px">
             <h4 class="font16px uppercase link-color mr-20px">mOBILE COVERS</h4>
             <div class="mobile-covers-collections">
             </div>
           </div>
           <div class="success witdh285px">
           </div>
             
          </section>
     </div>
     <div class="footer-items-container font16px">
       
     </div>
</footer>`
}