const image = document.getElementById("perfumeImage");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

image.addEventListener("click", () => {

    ```
modal.style.display = "flex";
modalImage.src = image.src;
```

});

closeModal.addEventListener("click", () => {

    ```
modal.style.display = "none";
```

});

modal.addEventListener("click", (e) => {

    ```
if (e.target === modal) {
    modal.style.display = "none";
}
```

});
