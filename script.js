const bookList = document.getElementById("book-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
let cart = [];
let total = 0;

// --- DISPLAY BOOKS ---
if (bookList) {
  books.forEach((book, index) => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>Price: $${book.price.toFixed(2)}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    bookList.appendChild(div);
  });
}

// --- ADD TO CART ---
function addToCart(index) {
  const selectedBook = books[index];
  cart.push(selectedBook);
  total += selectedBook.price;
  updateCart();
}

// --- UPDATE CART ---
function updateCart() {
  if (!cartItems) return;
  cartItems.innerHTML = "";
  cart.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} - $${book.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// --- CONTACT FORM VALIDATION ---
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formMessage");

    if (!name || !email || !message) {
      feedback.textContent = "⚠️ Please fill in all fields.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = "✅ Message sent successfully!";
    feedback.style.color = "green";
    contactForm.reset();
  });
}