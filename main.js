const popoverOpen = document.querySelector('.actions-popover');
const shareButtonActive = document.querySelector('.actions-buton');
const shareArrowActive = document.querySelector('.share-icon');

shareButtonActive.addEventListener("click", function(){
    popoverOpen.classList.toggle('show');
    shareArrowActive.classList.toggle('active-icon');
    this.classList.toggle('active');
});
