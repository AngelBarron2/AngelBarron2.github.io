const images = document.querySelectorAll('.draggable');

images.forEach(img => {
  const container = img.parentElement;

  img.addEventListener('mousedown', function (e) {
    e.preventDefault();

    const containerRect = container.getBoundingClientRect();
    const shiftX = e.clientX - img.getBoundingClientRect().left;
    const shiftY = e.clientY - img.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
      img.style.left = (pageX - containerRect.left - shiftX) + 'px';
      img.style.top = (pageY - containerRect.top - shiftY) + 'px';
    }

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
  });

  img.ondragstart = () => false; // prevent default drag ghost
});
