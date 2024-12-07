const imgContainerEl = document.querySelector(".img-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    imageNum = 8;

   addNewImages();
});

function addNewImages(){

    for (let index = 0; index < imageNum; index++) {
        
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)};`
    imgContainerEl.appendChild(newImgEl);
    }

}