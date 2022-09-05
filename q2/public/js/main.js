const photoInput = document.querySelector("#photo");
const previews = document.querySelectorAll(".upload__container-preview img");

photoInput?.addEventListener("change", (e) => {
  console.log(photoInput.files);
  const file = photoInput.files ? photoInput.files[0] : undefined;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      const result = reader.result;
      previews.forEach((preview) => {
        preview.src = result;
      });
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  } else {
    previews.forEach((preview) => {
      preview.src = "/img/focus.png";
    });
  }
});
