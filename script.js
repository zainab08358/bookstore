// --- BOOKSTORE DATA (UPDATED) ---
const books = [
  { 
    title: "Web Development Mastery",
    description: "A practical guide that teaches you how to plan, design, and code modern websites from scratch.",
    price: 9.49,
    image: "https://i.postimg.cc/pXwbpVSd/Untitled-design.jpg"
  },
  { 
    title: "Coding Made Simple",
    description: "A beginner-friendly roadmap that helps you understand coding concepts easily and quickly.",
    price: 6.99,
    image: "https://i.postimg.cc/XJyTkTmT/Untitled-design.jpg"
  },
  { 
    title: "Rise of Artificial Intelligence",
    description: "An engaging exploration of AI technologies shaping the future of robotics and automation.",
    price: 8.75,
    image: "https://i.postimg.cc/zGZ6qtLj/Untitled-design.jpg"
  },
  { 
    title: "Python for Absolute Beginners",
    description: "A simple and clear introduction to Python programming, designed for anyone with no coding experience.",
    price: 7.25,
    image: "https://i.postimg.cc/VvJpk2BW/Untitled-design.jpg"
  }
];

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
      <p>${book.description}</p>
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