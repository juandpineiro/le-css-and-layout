// Activates the image gallery
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    // Preload large images
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;
    thumbnail.addEventListener("click", function() {
      // Set clicked image as display image
      
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.dataset.title);

      // Change which image is current
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update the image info
      let title = document.querySelector("#gallery-info .title");
      let description = document.querySelector("#gallery-info .description");
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}