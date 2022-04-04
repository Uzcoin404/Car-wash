const main = document.querySelector('.main');
const filterBtn = document.querySelector('.filter_btn');
const filterBlog = document.querySelector('.filter_blog');

filterBtn.addEventListener('click', function(){
    filterBlog.classList.toggle('active');
    main.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    
});