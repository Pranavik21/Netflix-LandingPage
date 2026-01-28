// ----------------------------
// EMAIL SUBSCRIPTION FEATURE
// ----------------------------

// Get the elements
const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");
const plans = document.getElementById("plans");

// When user clicks the button
subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  // Basic email validation
  if (email === "") {
    alert("Please enter your email address.");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
  } else {
    // Hide input section and show plans
    plans.classList.remove("hidden");
    subscribeBtn.disabled = true;
    emailInput.disabled = true;
  }
});

/*With DOM Manipulation

Page reacts instantly

Validation messages appear

Inputs disable

Sections appear/disappear

 HERO EMAIL SIGN-IN */


const heroEmail = document.getElementById("heroEmail");
const heroBtn = document.getElementById("heroBtn");
const heroMessage = document.getElementById("heroMessage");

heroBtn.addEventListener("click", () => {
  const email = heroEmail.value.trim();

  if (email === "") {
    heroMessage.textContent = "Please enter your email address.";
    heroMessage.style.color = "red";
    heroMessage.classList.remove("hidden");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    heroMessage.textContent = "Please enter a valid email.";
    heroMessage.style.color = "red";
    heroMessage.classList.remove("hidden");
    return;
  }

  // Fake sign-in success
  heroMessage.textContent = `Signed in as ${email}`;
  heroMessage.style.color = "#00ff99";
  heroMessage.classList.remove("hidden");

  heroEmail.disabled = true;
  heroBtn.disabled = true;
});

// ----------------------------
// SIGN IN MODAL LOGIC
// ----------------------------

const signInBtn = document.getElementById("signInBtn");
const signinModal = document.getElementById("signinModal");
const closeModal = document.getElementById("closeModal");

const signinEmail = document.getElementById("signinEmail");
const signinPassword = document.getElementById("signinPassword");
const signinSubmit = document.getElementById("signinSubmit");
const signinMessage = document.getElementById("signinMessage");

// Open modal
signInBtn.addEventListener("click", () => {
  signinModal.classList.remove("hidden");
});

// Close modal
closeModal.addEventListener("click", () => {
  signinModal.classList.add("hidden");
});

// Fake sign-in validation
signinSubmit.addEventListener("click", () => {
  const email = signinEmail.value.trim();
  const password = signinPassword.value.trim();

  if (email === "" || password === "") {
    signinMessage.textContent = "Please fill in all fields.";
    signinMessage.style.color = "red";
    return;
  }

  signinMessage.textContent = `Signed in as ${email}`;
  signinMessage.style.color = "#00ff99";

  // Optional: close modal after delay
  setTimeout(() => {
    signinModal.classList.add("hidden");
  }, 1500);
});
