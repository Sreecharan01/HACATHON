document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profile-form');
  
    profileForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const bio = document.getElementById('bio').value;
      const interests = document.getElementById('interests').value;
  
      // Save profile data to localStorage (you can replace this with server-side logic)
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('bio', bio);
      localStorage.setItem('interests', interests);
  
      alert('Profile updated successfully!');
    });
  
    // Populate form fields with saved profile data
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('bio').value = localStorage.getItem('bio') || '';
    document.getElementById('interests').value = localStorage.getItem('interests') || '';
  });
  