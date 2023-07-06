document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  tener('scroll', function () {
    atualizarMenuAtivo();
});

function highlightMenuItem(event) {
  const menuItems = document.querySelectorAll('.ul-header li');
  menuItems.forEach(item => {
    item.classList.remove('selected');
  });

  const clickedItem = event.target.parentNode;
  clickedItem.classList.add('selected');
}