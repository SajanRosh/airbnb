let review = document.getElementById('reviews');
let soldout = document.getElementById('soldout');
window.addEventListener('scroll',() =>{

    if(window.scrollY > 760){
        review.style.display = 'block'
    }else{
        review.style.display='none';
    }
    if(window.scrollY > 850){
        soldout.style.display = 'flex'
        review.style.display='flex'
        review.style.justifyContent='space-between'
    }else{
        soldout.style.display='none'
    }
})
