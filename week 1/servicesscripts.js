document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("productList");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    
    let start = 3; // Initial items displayed, change this as needed
    const itemsPerPage = 3; // Number of items to load per click
    
    // Function to load more items
    function loadMoreItems() {
      for (let i = start; i < start + itemsPerPage; i++) {
        const newProduct = `
          <div class="product">
            <h3>Product/Service Name ${i + 1}</h3>
            <p>Description and details about what the business offers.</p>
            <p>Pricing: $Z</p>
            <img src="product_image${i + 1}.jpg" alt="Product Image ${i + 1}">
          </div>
        `;
        productList.insertAdjacentHTML("beforeend", newProduct);
      }
      start += itemsPerPage;
    }
    
    // Event listener for "Load More" button
    loadMoreBtn.addEventListener("click", loadMoreItems);
  });