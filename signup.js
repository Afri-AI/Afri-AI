function saveSignup(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    localStorage.setItem("beta_user", JSON.stringify({ name, email }));
    document.getElementById("signup-message").innerText = "Thank you for signing up!";
  } else {
    document.getElementById("signup-message").innerText = "Please fill in all fields.";
  }
}