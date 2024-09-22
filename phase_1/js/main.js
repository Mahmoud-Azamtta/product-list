const allCategories = [
  "Electronics",
  "Clothing",
  "Home Appliances",
  "Books",
  "Toys",
  "Sports Equipment",
  "Furniture",
];

const allProducts = [
  {
    name: "Smartphone",
    category: "Electronics",
    price: 699,
    img: "/assets/products/smartphone.jpg",
  },
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    img: "/assets/products/laptop.jpg",
  },
  {
    name: "T-Shirt",
    category: "Clothing",
    price: 25,
    img: "/assets/products/tshirt.jpg",
  },
  {
    name: "Blender",
    category: "Home Appliances",
    price: 60,
    img: "/assets/products/blender.jpg",
  },
  {
    name: "Mystery Novel",
    category: "Books",
    price: 15,
    img: "/assets/products/novel.jpg",
  },
  {
    name: "Action Figure",
    category: "Toys",
    price: 30,
    img: "/assets/products/toy.jpg",
  },
  {
    name: "Football",
    category: "Sports Equipment",
    price: 40,
    img: "/assets/products/football.jpg",
  },
  {
    name: "Sofa",
    category: "Furniture",
    price: 500,
    img: "/assets/products/sofa.jpg",
  },
];

let selectedCategories = [];

const productsWrapper = document.getElementById("products");
const categoriesWrapper = document.querySelector(
  "#categories .buttons-wrapper",
);

const renderProducts = (products) => {
  let html = "";

  products.forEach((product) => {
    html += `
      <div class="product">
        <div class="product-img">
          <img src="${product.img}" alt="${product.name}" />
        </div>
        <div class="product-details">
          <h3>${product.name}</h3>
          <p class="category">Category: <em>${product.category}</em></p>
          <p class="price">Price: <strong>${product.price}$</strong></p>
        </div>
      </div>
    `;
  });

  if (html.length === 0) {
    html = '<p class="empty">No products found</p>';
  }

  productsWrapper.innerHTML = html;
};

const renderCategories = (categories) => {
  let html =
    '<button data-categ="all" id="btn-all" class="categ-btn selected" type="button">All</button>';

  categories.forEach((category, idx) => {
    html += `
      <button data-categ="${category.toLowerCase()}" id="btn-${idx}" class="categ-btn" type="button">${category}</button>
    `;
  });

  if (html.length === 0) {
    html = '<p class="empty">No categories yet</p>';
  }

  categoriesWrapper.innerHTML = html;
};

const filterProducts = () => {
  if (selectedCategories.length === 0) {
    renderProducts(allProducts);
    document.getElementById("btn-all").classList.add("selected");
    return;
  }

  const filtered = allProducts.filter(
    (product) =>
      selectedCategories.indexOf(product.category.toLowerCase()) > -1,
  );

  renderProducts(filtered);
};

const resetSelectedCategories = () => {
  for (let i = 0; i < allCategories.length; i++) {
    document.getElementById(`btn-${i}`).classList.remove("selected");
  }
  selectedCategories = [];
};

const updateSelectedCategories = (element) => {
  if (!element) return;

  const targetCategory = element.dataset.categ;
  const idx = selectedCategories.indexOf(targetCategory);
  const allBtn = document.getElementById("btn-all");

  if (targetCategory === "all") {
    console.log(selectedCategories);
    allBtn.classList.add("selected");
    renderProducts(allProducts);
    resetSelectedCategories();
    console.log(selectedCategories);
    return;
  }

  allBtn.classList.remove("selected");

  if (idx > -1) {
    element.classList.remove("selected");
    selectedCategories.splice(idx, 1);
  } else {
    element.classList.add("selected");
    selectedCategories.push(targetCategory);
  }

  filterProducts();
};

const handleCategorySelection = () => {
  categoriesWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("categ-btn")) {
      event.preventDefault();
      updateSelectedCategories(event.target);
    }
  });
};

renderCategories(allCategories);
renderProducts(allProducts);
handleCategorySelection();
