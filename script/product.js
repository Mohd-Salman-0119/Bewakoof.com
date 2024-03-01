const BASE_URL = 'https://bewakoof-web-clone.vercel.app/api'

fetch('/json/fillters.json')
     .then(res => res.json())
     .then(data => {
          filltersFunction(data.filterVanue, '.filterCategory', "Category")
          filltersFunction(data.filtersizes, '.filterSizes', "Sizes")
          filltersFunction(data.filterbrand, '.filterBrand', "Brand")
          filltersFunction(data.filterColors, '.filterColor', "Color")
          filltersFunction(data.filterDesign, '.filterDesigns', "Design")
          filltersFunction(data.filterfit, '.filterFit', "Fit")
          filltersFunction(data.filtersleeve, '.filterSleeve', "Sleeve")
          filltersFunction(data.filterratings, '.filterRatings', "Ratings")
          filltersFunction(data.filterdiscount, '.filterDiscount', "Discount")

     })

function filltersFunction(data, referance, name) {
     const fillterReferance = document.querySelector(referance)

     data.forEach(ele => {
          const option = document.createElement('option');

          if (ele === name) {
               option.value = "none"
          } else {
               option.value = ele
          }

          option.innerHTML = ele
          fillterReferance.append(option)
     });

}

const rcieved = new URLSearchParams(window.location.search);
// const womensRcieved = new URLSearchParams(window.location.search);
const key = rcieved.get('category');

let count = document.querySelector('.countProduct');

if (key === "Mens") {
     const mensQuery = "_gender=male"
     const fetchedCloser = fetchProduct(mensQuery)
     fetchedCloser()
     sortByPrice(fetchedCloser)

     // filter by categories  
     fillterCategory(fetchedCloser)
     fillterBrand(fetchedCloser)
     fillterSizes(fetchedCloser)
     fillterDesign(fetchedCloser)
     fillterColor(fetchedCloser)
     fillterRating(fetchedCloser)

} else {
     const mensQuery = "_gender=female"
     const fetchedCloser = fetchProduct(mensQuery)
     fetchedCloser()
     sortByPrice(fetchedCloser)

     // filter by categories  
     fillterCategory(fetchedCloser)
     fillterBrand(fetchedCloser)
     fillterSizes(fetchedCloser)
     fillterDesign(fetchedCloser)
     fillterColor(fetchedCloser)
     fillterRating(fetchedCloser)
}

function sortByPrice(fetchedCloser) {
     const sortPrice = document.querySelector('.sortPrice');
     sortPrice.addEventListener('change', () => {
          const selectedValue = sortPrice.value;
          fetchedCloser(`_sort=${selectedValue}`)
     })
}
function fillterSizes(fetchedCloser) {
     const selected = document.querySelector('.filterSizes');

     selected.addEventListener('change', () => {
          const selectedValue = selected.value;
          fetchedCloser(`_size=${selectedValue}`)
     })
}

function fillterCategory(fetchedCloser) {
     const categoriesFilter = document.querySelector('.filterCategory');

     categoriesFilter.addEventListener('change', () => {
          const selectedValue = categoriesFilter.value;
          console.log(selectedValue)
          fetchedCloser(`_category=${selectedValue}`)
     })
}
function fillterBrand(fetchedCloser) {
     const selected = document.querySelector('.filterBrand');

     selected.addEventListener('change', () => {
          const selectedValue = selected.value;
          fetchedCloser(`_brand=${selectedValue}`)
     })
}

function fillterDesign(fetchedCloser) {
     const selected = document.querySelector('.filterDesigns');
     selected.addEventListener('change', () => {
          const selectedValue = selected.value;
          fetchedCloser(`_design=${selectedValue}`)
     })
}

function fillterRating(fetchedCloser) {
     const selected = document.querySelector('.filterRatings');

     selected.addEventListener('change', () => {
          const selectedValue = selected.value;
          fetchedCloser(`_rating=${selectedValue}`)
     })
}

function fillterColor(fetchedCloser) {
     const selected = document.querySelector('.filterColor');

     selected.addEventListener('change', () => {
          const selectedValue = selected.value;
          fetchedCloser(`_color=${selectedValue}`)
     })
}

// Fetch Product with query
function fetchProduct(query) {
     return function (value = "") {
          fetch(`${BASE_URL}/products?${query}&${value}`)
               .then(res => res.json())
               .then(data => {
                    count.innerHTML = `(${data.length})`
                    console.log(data)
                    productDataShow(data)
               })
               .catch(error => {
                    count.innerHTML = data.length
                    console.log(error)
               })
          console.log(query, value)
     }
}


function productDataShow(data) {
     const cardContainer = document.querySelector('.productCategoryGridWrapper')
     cardContainer.innerHTML = ""
     data.forEach((ele, index) => {
          // console.log(ele);

          let card = document.createElement('div');
          // card.classList.add('swiper-slide')
          card.classList.add('addToBack')
          // card.setAttribute('id', 'bestSellerCard')
          card.classList.add('img100px-radius-all4')

          let image = document.createElement('img');
          image.classList.add('img100px')
          image.classList.add('img100px-radius-4')


          let productDetails = document.createElement('div');
          productDetails.classList.add('producDetails');


          let dFlex = document.createElement('div');
          dFlex.classList.add('d-flex')
          dFlex.classList.add('d-flex-between')

          let producName = document.createElement('div');
          producName.classList.add('product-name');
          producName.classList.add('pd5px')

          let siteName = document.createElement('h3');
          siteName.classList.add('font12px')
          siteName.classList.add('bfk-black')

          siteName.classList.add('right8px')

          let superScript = document.createElement('sup')

          siteName.innerHTML = ele.brand;
          superScript.innerHTML = ` &#174;`
          siteName.appendChild(superScript);



          let producDisc = document.createElement('h2');
          producDisc.classList.add('font10px')
          producDisc.classList.add('shade-gray')

          // producDisc.classList.add('right8px')
          producDisc.classList.add('top4px')

          producDisc.innerHTML = ele.name;

          producName.appendChild(siteName);
          producName.appendChild(producDisc);

          let likeHeart = document.createElement('i');
          likeHeart.classList.add('fa-regular')
          likeHeart.classList.add('fa-heart')

          dFlex.append(producName, likeHeart);


          let productPriceBox = document.createElement('div');
          productPriceBox.classList.add('productPriceBox')
          productPriceBox.classList.add('d-flex')
          // productPriceBox.classList.add('mr-8px')
          productPriceBox.classList.add('pd5px')


          let discountedPrice = document.createElement('div');
          discountedPrice.classList.add('discountedPrice')
          discountedPrice.classList.add('p-balck')
          discountedPrice.classList.add('font14px')

          discountedPrice.classList.add('font-weight-6')

          let priceWithR = document.createElement('span')
          priceWithR.classList.add('font16px')
          priceWithR.innerHTML = `&#x20B9;`;

          discountedPrice.appendChild(priceWithR);
          discountedPrice.innerHTML = `&#x20B9; ${ele.discounted_price}`;


          let actualPriceText = document.createElement('div');
          actualPriceText.classList.add('actualPriceText')
          actualPriceText.classList.add('shade-gray')
          actualPriceText.classList.add('font12px')
          actualPriceText.classList.add('left5px')
          // actualPriceText.classList.add('top4px')
          actualPriceText.classList.add('line-through-text')

          actualPriceText.innerHTML = `&#x20B9;${ele.original_price}`

          let discountPresent = document.createElement('div');
          discountPresent.classList.add('discountPresent')
          discountPresent.classList.add('discount-green')
          discountPresent.classList.add('font10px')
          discountPresent.classList.add('left5px')
          discountPresent.classList.add('top4px')

          discountPresent.innerHTML = ele.offer

          productPriceBox.append(discountedPrice, actualPriceText, discountPresent);

          productDetails.append(dFlex, productPriceBox);

          image.src = ele.image;
          card.append(image, productDetails);

          cardContainer.append(card)

     })
}