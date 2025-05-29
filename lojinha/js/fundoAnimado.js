document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const posX = x * 100;
  const posY = y * 100;

  document.body.style.backgroundPosition = `${posX}% ${posY}%`;
});