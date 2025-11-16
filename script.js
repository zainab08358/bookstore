// Get DOM elements
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

// Initialize cart
let cart = [];
let total = 0;

// Add to cart function (called from HTML buttons)
function addToCart(title, price) {
  // Add item to cart array
  cart.push({ title, price });
  total += price;
  updateCart();
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
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