let normalIcon = true;

const icon = document.querySelector('#icon img');
icon.addEventListener('click', changeImage);

function changeImage() {
  const imageIcon = document.querySelector('#icon img');
  const image = document.querySelector('#left img');
  if (normalIcon) {
    imageIcon.src = "./assets/xis.svg";
    image.src = "./assets/360.gif";
    normalIcon = false;
  } else {
    imageIcon.src = "./assets/vector.png";
    image.src = "./assets/product.png";
    normalIcon = true;
  }
}