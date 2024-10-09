document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    console.log(password);

    try {
      // Send the POST request to the Spring Boot API for registration
      const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: username,
            password: password,
          }),
        },
        alert("User Registered Successfully"),
        setTimeout(() => {
          window.location.href = "login.html"; // Redirect to login page
        }, 1000) // Delay redirect for 1 second (1000 milliseconds)
      );

      const result = await response.text();
 
    } catch (error) {
      // Handle network errors
      document.getElementById("error-message").textContent =
        "Error connecting to the server.";
      document.getElementById("success-message").textContent = "";
    }
  });
