let isDragging = false;
let progressBar;
let progressFill;

function startScroll(event) {
    isDragging = true;
    progressBar = event.target.closest(".progress-bar");
    progressFill = progressBar.querySelector(".progress-fill");

    // Initial update on mousedown to set the progress at the click point
    updateProgress(event);

    document.addEventListener("mousemove", scrollProgress);
    document.addEventListener("mouseup", stopScroll);
}

function scrollProgress(event) {
    if (isDragging) {
        updateProgress(event);
    }
}

function stopScroll() {
    isDragging = false;
    document.removeEventListener("mousemove", scrollProgress);
    document.removeEventListener("mouseup", stopScroll);
}

function updateProgress(event) {
    // Calculate the fill level as a percentage based on cursor position
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.pageX - rect.left; // Use pageX for more consistent results
    let percentage = offsetX / rect.width;

    // Constrain percentage to 0-1 range
    percentage = Math.max(0, Math.min(percentage, 1));

    // Set the width of the progress fill
    progressFill.style.width = percentage * 100 + "%"; // Adjust for 300% width in CSS
}

// Attach the mousedown event to start the scroll on click
document.querySelectorAll(".progress-bar").forEach(bar => {
    bar.addEventListener("mousedown", startScroll);
});


/// Dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
    const signUpDropdown = document.querySelector(".sign-up-dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Show dropdown on hover
    signUpDropdown.addEventListener("mouseenter", () => {
        dropdownMenu.style.visibility = "visible";
        dropdownMenu.style.opacity = "1";
    });

    // Hide dropdown when not hovering
    signUpDropdown.addEventListener("mouseleave", () => {
        dropdownMenu.style.visibility = "hidden";
        dropdownMenu.style.opacity = "0";
    });
});

// Toggle between Sign-up and Login sectionsdocument.getElementById('toggleLogin').addEventListener('click', () => {
document.getElementById('toggleLogin').addEventListener('click', () => {
    console.log('Switching to Login page');
    console.log('Signup Page Style:', document.getElementById('signup-page').style.display);
    console.log('Login Page Style:', document.getElementById('login-page').style.display);
    
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex'; // Ensure 'flex' or correct layout is used
});
      

// Toggle back to the Sign-up section
document.getElementById('toggleSignup').addEventListener('click', () => {
    console.log('Switching to Sign-up page');
    console.log('Login Page Style:', document.getElementById('login-page').style.display);
    console.log('Signup Page Style:', document.getElementById('signup-page').style.display);

    // Switch to Sign-up page
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'flex'; // Ensure 'flex' or correct layout is used
});


// Signup Form Submission
document.querySelector(".signup-btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const investmentInterest = document.getElementById("investmentInterest").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Simulate sending confirmation email
    sendConfirmationEmail(email, fullName);

    // In a real-world app, you'd send the form data to the server via an API call to register the user

    // Redirect to login page after successful signup
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'flex'; 
});

// Function to simulate sending a confirmation email
function sendConfirmationEmail(email, fullName) {
    // This is where you'd typically call an API to send the email via your backend
    // For now, we'll simulate it with a simple alert
    alert(`Welcome, ${fullName}! A confirmation email has been sent to ${email}.`);

    // Simulate a backend email send request (e.g., Mailjet, SendGrid, etc.)
    // Example:
    // fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     to: email,
    //     subject: "Welcome to Our Platform!",
    //     text: `Hello ${fullName},\n\nThank you for signing up.`
    //   })
    // })
    // .then(response => response.json())
    // .then(data => console.log('Email sent successfully!', data))
    // .catch(error => console.error('Error sending email:', error));
}

// Login Form Submission
document.querySelector(".login-btn").addEventListener("click", function (e) {
    e.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login successful!");
        window.location.href = "./index.html"; 
    } else {
        alert("Invalid login credentials.");
    }
});

// Signup Form Functionality
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  alert('Signup successful! A confirmation email has been sent.');
  signupPage.style.display = 'none';
  loginPage.style.display = 'block';
});

// Login Form Functionality
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email && password) {
    alert('Login successful! Welcome back.');
    window.location.href = './index.html';
  } else {
    alert('Please enter your email and password.');
  }
});