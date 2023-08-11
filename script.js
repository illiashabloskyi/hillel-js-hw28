const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]; // Замініть на ваші зображення
let currentIndex = 0;

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const sliderImage = document.getElementById("sliderImage");

// Функція для оновлення зображення
function updateImage() {
  sliderImage.src = "./img/" + images[currentIndex];
  
  if (currentIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }
  
  if (currentIndex === images.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

// Обробники кліків на кнопки "Prev" і "Next"
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});

// Ініціалізація початкового зображення
updateImage();