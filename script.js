// ------------------------------
// Part 1: Event Handling Example
// ------------------------------
document.getElementById("clickMeBtn").addEventListener("click", () => {
    document.getElementById("message").textContent = "🎉 Button was clicked!";
  });
  
  // ------------------------------
  // Part 2: Interactive Elements
  // ------------------------------
  
  // 🌗 Dark Mode Toggle
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // ➕ Counter
  let counter = 0;
  document.getElementById("incrementBtn").addEventListener("click", () => {
    counter++;
    document.getElementById("counterValue").textContent = counter;
  });
  document.getElementById("decrementBtn").addEventListener("click", () => {
    counter--;
    document.getElementById("counterValue").textContent = counter;
  });
  
  // ❓ FAQ Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
  
  // ------------------------------
  // Part 3: Form Validation
  // ------------------------------
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedback = document.getElementById("formFeedback");
  
    let errors = [];
  
    // Validate name (must not be empty)
    if (name.length < 2) {
      errors.push("Name must be at least 2 characters.");
    }
  
    // Validate email (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }
  
    // Validate password (min 6 chars, contains number)
    if (password.length < 6 || !/\d/.test(password)) {
      errors.push("Password must be at least 6 characters and contain a number.");
    }
  
    // Show feedback
    if (errors.length > 0) {
      feedback.innerHTML = errors.join("<br>");
      feedback.className = "error";
    } else {
      feedback.textContent = "✅ Registration successful!";
      feedback.className = "success";
    }
  });
  