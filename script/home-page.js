const BASE_URL = 'https://bewakoof-web-clone.vercel.app/api'

hideBottomHeader();
searchedItems();


function hideBottomHeader() {
  const menuItems = document.querySelectorAll('.dropDwonMenuWrapper span');

  // Get a reference to the .bottom-header-wrapper-container
  const bottomHeaderContainer = document.querySelector('.bottom-header-wrapper-container');

  // Add event listeners for mouseenter and mouseleave on each menu item
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
      // Hide the bottom header container
      bottomHeaderContainer.style.display = 'none';
    });

    menuItem.addEventListener('mouseleave', () => {

      bottomHeaderContainer.style.display = 'block';
    });
  });
}



async function searchedItems() {
  const searchedItemContainer = document.querySelector('.search-feild-popup');
  const searchFeildControl = document.querySelector('.search-input-form-control');
  const searchInput = document.querySelector('[search-data]');



  let cardData = [];
  let brandQuantities = {};

  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();

    data.forEach(ele => {
      const brandName = ele.brand;
      brandQuantities[brandName] = (brandQuantities[brandName] || 0) + 1;
    })
    // console.log(brandQuantities);

    cardData = data.map(ele => {
      const showSearched = document.createElement('div');
      const anchor = document.createElement('a');
      anchor.classList.add('pd12px');
      anchor.classList.add('font12px');
      anchor.classList.add('d-block');
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('d-flex');
      contentDiv.classList.add('d-flex-between');
      contentDiv.classList.add('show-searched');

      const name = document.createElement('span');
      const nOfItem = document.createElement('span');
      const hr = document.createElement('hr');

      name.innerHTML = ele.brand;
      nOfItem.innerHTML = brandQuantities[ele.brand];

      contentDiv.append(name, nOfItem);
      anchor.append(contentDiv);
      showSearched.append(anchor, hr);

      return {
        brand: ele.brand,
        category: ele.category,
        name: ele.name,
        element: showSearched,
      };
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Filter the product data based on the search term
    const filteredProducts = cardData.filter((product) => {
      const productName = product.name.toLowerCase();
      const productBrand = product.brand.toLowerCase();

      return productName.includes(searchTerm) || productBrand.includes(searchTerm);
    });

    displayResults(filteredProducts, searchedItemContainer);

  });

  // Add an input event listener to clear results when the search input is empty
  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '') {
      searchedItemContainer.innerHTML = ''; // Clear the results container
    }
  });

  showAndHideSearchedArea(searchedItemContainer, searchFeildControl);
}

function showAndHideSearchedArea(searchedItemContainer, searchFeildControl) {
  searchFeildControl.addEventListener('click', e => {
    e.stopPropagation();
    searchedItemContainer.style.display = 'block';
  });


  document.body.addEventListener('click', () => {
    searchedItemContainer.style.display = 'none';
  });

  searchFeildControl.addEventListener('click', e => {
    e.stopPropagation(); // Prevent the click event from propagating to the body
  });
}

function displayResults(results, container) {
  container.innerHTML = '';
  const anchor = document.createElement('a');
  anchor.classList.add('pd12px');
  anchor.classList.add('font12px');
  anchor.classList.add('d-block');
  anchor.classList.add('success-color');

  anchor.innerHTML = 'View all result'
  let i = 0;
  results.forEach(product => {
    container.appendChild(product.element);
    return;
  });
  container.append(anchor)
}

window.addEventListener('load', function () {
  // Hide the loading animation when the page is fully loaded
  setTimeout(function () {
    var loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.display = 'none';
  }, 1000); // 10000 milliseconds (10 seconds)
});


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