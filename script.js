// script.js

// Add event listener to splash screen
document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen after 2 seconds
    setTimeout(() => {
      document.querySelector('.splash-screen').style.display = 'none';
    }, 2000);
  });
  
  // Add event listener to learn more button
  document.querySelector('.hero button').addEventListener('click', () => {
    // Scroll to features section
    document.querySelector('.features').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add event listener to feature buttons
  document.querySelectorAll('.feature-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Prevent default link behavior
      e.preventDefault();
      // Open feature modal (TO DO: implement modal functionality)
      console.log('Feature modal will open here');
    });
  });
  
  // Add event listener to sign up button
  document.querySelector('.sign-up-btn').addEventListener('click', () => {
    // Redirect to sign up page
    window.location.href = './signup.html';
  });
  
  // Add event listener to navigation links
  document.querySelectorAll('header nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      // Prevent default link behavior
      e.preventDefault();
      // Scroll to corresponding section
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });