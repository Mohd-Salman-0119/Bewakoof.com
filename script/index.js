const header = `
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

`

const bottomHeader = `
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
`
const headerContainer = document.querySelector('.header-section-for-all');

headerContainer.innerHTML = header + bottomHeader

// export { header, bottomHeader }