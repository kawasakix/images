const images = document.querySelectorAll('.images')
const mainImage = document.querySelector('.main-image')
for (let i = 0; i < images.length; i++) {
    const element = images[i];
    element.addEventListener('click' , function(){
    let src = this.getAttribute("src");
    mainImage.setAttribute("src", src)

})
}


