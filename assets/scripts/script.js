document.addEventListener("DOMContentLoaded", () => {
  // Welcome Alert
  const getStartedBtn = document.getElementById("getStarted");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      alert("Welcome to Lynkr! Let’s start connecting.");
    });
  }

  // jQuery Ready
  $(document).ready(() => {
    // Toggle Navbar for mobile view
    $(".nav-toggle").click(() => {
      $(".nav-links").toggleClass("active");
    });

    // Handle logout action
    $("#logout").click(() => {
      $("#dashboard").hide();
      $(".form-container").fadeIn();
    });
  });

  // Sidebar Toggle (single listener)
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // Registration Form Handling
  const registerForm = document.getElementById("registerForm");
  const message = document.getElementById("message");

  if (registerForm && message) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const userData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        gender: document.getElementById("gender").value,
        orientation: document.getElementById("orientation").value,
      };

      try {
        const res = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await res.json();
        if (res.ok) {
          message.innerText = "✅ " + data.msg;
          registerForm.reset();
        } else {
          message.innerText = "❌ " + (data.msg || "Registration failed");
        }
      } catch (err) {
        console.error(err);
        message.innerText = "❌ Error connecting to server";
      }
    });
  }

  // Slider Logic
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const slideContainer = document.querySelector(".slide-container");

  function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateSlider();
  }

  function updateSlider() {
    if (slideContainer) {
      slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  if (slides.length > 0) {
    updateSlider(); // Initialize slider
    setInterval(() => moveSlide(1), 5000); // Auto-slide every 5 seconds
  }
});
