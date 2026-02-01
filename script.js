const products = [
  { name: "SmartDesk Pro", price: 52000, rating: 4.5, category: "Electronics" },
  { name: "NoiseBeat Headset", price: 2400, rating: 4.2, category: "Electronics" },
  { name: "PixelOne Phone", price: 31000, rating: 4.6, category: "Electronics" },
  { name: "VisionTab 10", price: 21000, rating: 4.4, category: "Electronics" },
  { name: "SnapShot Camera", price: 46000, rating: 4.6, category: "Electronics" },

  { name: "Urban Tee", price: 750, rating: 4.0, category: "Clothing" },
  { name: "Denim Flex Jeans", price: 1600, rating: 4.1, category: "Clothing" },
  { name: "Winter Shield Jacket", price: 2600, rating: 4.4, category: "Clothing" },
  { name: "Runner Sports Shoes", price: 2900, rating: 4.3, category: "Clothing" },
  { name: "Classic Cotton Cap", price: 550, rating: 3.9, category: "Clothing" },

  { name: "Mystery Island", price: 420, rating: 4.3, category: "Books" },
  { name: "Daily Notes Planner", price: 150, rating: 4.0, category: "Books" },
  { name: "Advanced English Guide", price: 650, rating: 4.2, category: "Books" },
  { name: "Quick Recipes Book", price: 700, rating: 4.2, category: "Books" },

  { name: "Steel Wrist Watch", price: 2300, rating: 4.5, category: "Accessories" },
  { name: "TravelMax Backpack", price: 1900, rating: 4.3, category: "Accessories" },
  { name: "SunGuard Glasses", price: 950, rating: 4.1, category: "Accessories" },
  { name: "Leather Charm Bracelet", price: 350, rating: 4.0, category: "Accessories" },
  { name: "SlimFit Wallet", price: 750, rating: 4.2, category: "Accessories" },
  { name: "Premium Leather Belt", price: 480, rating: 4.1, category: "Accessories" }
];

const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(list) {
  container.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "productCard";
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <p>Rating: ${product.rating}</p>
      <p>${product.category}</p>
    `;
    container.appendChild(card);
  });
}

function applyFilterAndSort() {
  let result =
    categoryFilter.value === "all"
      ? [...products]
      : products.filter(p => p.category === categoryFilter.value);

  switch (sortOption.value) {
    case "priceAsc": result.sort((a,b) => a.price - b.price); break;
    case "priceDesc": result.sort((a,b) => b.price - a.price); break;
    case "nameAsc": result.sort((a,b) => a.name.localeCompare(b.name)); break;
    case "nameDesc": result.sort((a,b) => b.name.localeCompare(a.name)); break;
    case "ratingAsc": result.sort((a,b) => a.rating - b.rating); break;
    case "ratingDesc": result.sort((a,b) => b.rating - a.rating); break;
  }

  displayProducts(result);
}

categoryFilter.addEventListener("change", applyFilterAndSort);
sortOption.addEventListener("change", applyFilterAndSort);

displayProducts(products);
