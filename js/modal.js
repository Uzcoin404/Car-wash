const main = document.querySelector('.main');
const modal_opener = document.querySelector('.modal_opener');
const modalBlog = document.querySelector('.modal_blog');
const closeIcon = document.querySelector('.modal_closer');

modal_opener.addEventListener('click', function(){
    modalBlog.classList.add('active');
    main.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    document.body.style.userSelect = 'none';
    modalBlog.style.pointerEvents = 'auto';
    modalBlog.style.userSelect = 'auto';
});
closeIcon.addEventListener('click', function(){
    modalBlog.classList.remove('active');
    main.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';
    document.body.style.userSelect = 'auto';
    modalBlog.style.pointerEvents = 'auto';
    modalBlog.style.userSelect = 'auto';
});