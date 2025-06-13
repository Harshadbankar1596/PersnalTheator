window.addEventListener('DOMContentLoaded', () => {
  const signBtn = document.getElementById('signbtn');
  const name = localStorage.getItem('personalTheaterName');

  if (name) {
    signBtn.classList.add('profile-btn');
    signBtn.innerHTML = `
      <img class="profile-img" 
           src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=000000&color=ffffff" 
           alt="Profile Icon">
      <span class="profile-name">${name.split(" ")[0]}</span>
    `;
  }
});
