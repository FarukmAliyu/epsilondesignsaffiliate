// script.js
document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      alert(`Thank you for joining, ${name}! We'll reach out to ${email} soon.`);
      // Here you can send data to your server or API for further processing
      document.getElementById('joinForm').reset();
    } else {
      alert('Please fill in both fields.');
    }
  });
  