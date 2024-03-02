const footerContent = `
     <footer>
          <div
          class="footer-items-container d-flex flex-col d-flex-between pd20trpx"
          >
          <div class="bfk-logo font-weight-6">
          Bewakoof <sup class="bfk-logo-r">&#174;</sup>
          </div>

          <!-- Footer First Section -->
          <section class="footer-section d-flex d-flex-between">
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

          <section class="top3rem">
          <div class="bfk-features d-flex">
               <div class="bfk-policy witdh11_813rem"></div>

               <div class="download-app witdh11_813rem">
               <span class="footerTitle uppercase font12px"
                    >Dwonload the app</span
               >
               <!-- ><div class="grid2-1fr" -->
               <div class="imageContainer"></div>
               <!-- </div> -->
               </div>
               <div class="secure-paymet witdh17_813rem">
               <span class="footerTitle uppercase font12px"
                    >100% Secure Payment</span
               >
               <!-- ><div class="grid2-1fr" -->
               <div class="imageContainer"></div>
               <!-- </div> -->
               </div>
          </div>
          </section>

          <hr class="separator" />

          <section class="d-flex d-flex-between">
          <div class="mens-clothing witdh285px">
               <h4 class="font16px uppercase link-color mr-20px">
               Men's clothing
               </h4>
               <div class="topWear-collections"></div>
               <div class="bottomWear-collections mr-10rem"></div>
               <div class="features-collections mr-10rem"></div>
          </div>

          <div class="womens-clothing witdh285px">
               <h4 class="font16px uppercase link-color mr-20px">
               Women's clothing
               </h4>
               <div class="womens-topWear-collections"></div>

               <div class="womens-bottomWear-collections mr-10rem"></div>

               <div class="womens-bag-collections mr-10rem"></div>

               <div class="womens-features-collections mr-10rem"></div>
          </div>

          <div class="mobile-covers witdh285px">
               <h4 class="font16px uppercase link-color mr-20px">mOBILE COVERS</h4>
               <div class="mobile-covers-collections"></div>
          </div>
          <div class="success witdh285px"></div>
          </section>
          </div>
          <div class="footer-items-container font16px"></div>
     </footer>
`

class SpecialFooter extends HTMLElement {
     connectedCallback() {
          this.innerHTML = footerContent
     }
}

customElements.define('special-footer', SpecialFooter)