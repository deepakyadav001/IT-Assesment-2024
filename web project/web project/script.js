function openFullscreen(imgSrc) {
    const fullscreenOverlay = document.getElementById("fullscreen-overlay");
    const fullscreenImage = document.getElementById("fullscreen-image");

    fullscreenImage.src = imgSrc;
    fullscreenOverlay.style.display = "block";
}

function closeFullscreen() {
    const fullscreenOverlay = document.getElementById("fullscreen-overlay");
    fullscreenOverlay.style.display = "none";
}

const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        const imgSrc = img.src;
        openFullscreen(imgSrc);
    });
});
