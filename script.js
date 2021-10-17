const panels = document.querySelectorAll('.panels');

function removeActives() {
  panels.forEach((panel) => panel.classList.remove('active'));
}

// Event listerners
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActives();
    panel.classList.add('active');
  });
});
