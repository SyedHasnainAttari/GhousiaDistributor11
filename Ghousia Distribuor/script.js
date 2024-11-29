function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
 // Select buttons and modal
 const cartButtons = document.querySelectorAll('.add-to-cart');
 const modal = document.getElementById('cartModal');
 const form = document.getElementById('cartForm');

 let currentProduct = {};

 // Open modal when Add to Cart is clicked
 cartButtons.forEach(button => {
     button.addEventListener('click', (e) => {
         const product = e.target.closest('.product');
         currentProduct = {
             name: product.dataset.name,
             price: product.dataset.price
         };
         modal.style.display = 'flex';
     });
 });

 // Submit form and save data to local storage
 form.addEventListener('submit', (e) => {
     e.preventDefault();

     // Get user input
     const userName = document.getElementById('userName').value;
     const userLocation = document.getElementById('userLocation').value;
     const userPhone = document.getElementById('userPhone').value;
     const quantity = document.getElementById('quantity').value;

     // Create full cart object
     const cartData = {
         product: currentProduct,
         user: {
             name: userName,
             location: userLocation,
             phone: userPhone,
         },
         quantity: quantity
     };

     // Save to local storage
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
     cart.push(cartData);
     localStorage.setItem('cart', JSON.stringify(cart));

     // Close modal and reset form
     modal.style.display = 'none';
     form.reset();

     alert('Product added to cart!');
 });

 // Close modal when clicking outside of it
 window.addEventListener('click', (e) => {
     if (e.target === modal) {
         modal.style.display = 'none';
     }
 });
 document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    // Handle form submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate input
      if (!name || !email || !subject || !message) {
        alert("All fields are required!");
        return;
      }

      // Save data to local storage
      const contactData = JSON.parse(localStorage.getItem("contactData")) || [];
      contactData.push({ name, email, subject, message, date: new Date().toLocaleString() });
      localStorage.setItem("contactData", JSON.stringify(contactData));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your massege has been submited !",
        showConfirmButton: false,
        timer: 1500
      });
      
      contactForm.reset(); // Clear the form
    });
  });