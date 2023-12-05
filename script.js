document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success");
    const errorMessage = document.getElementById("error");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
  
      fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
      })
        .then(response => response.text())
        .then(result => {
          if (result === "success") {
            // Show success message
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
          } else {
            // Show error message
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
          }
        })
        .catch(error => {
          // Show error message
          successMessage.style.display = "none";
          errorMessage.style.display = "block";
        });
    });
  });
  