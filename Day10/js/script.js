async function displayProductData() {
    const productContainer = document.getElementById('productContainer');
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const products = await response.json();
  
      products.forEach(product => {
        const card = `
          <div class="col-md-3 mb-3">
            <div class="card">
              <img src="${product.image}" alt="${product.title}">
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text"><strong>$${product.price}</strong></p>
              </div>
            </div>
          </div>
        `;
        productContainer.innerHTML += card;
      });
  
    } catch (error) {
      productContainer.innerHTML = `Error: ${error.message}`;
      console.error('Error fetching product data:', error);
    }
  }

  document.addEventListener('DOMContentLoaded', displayProductData);
  