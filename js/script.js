const menuBtn = document.querySelector('.menu_btn'),
aside = document.querySelector('.aside');

menuBtn.addEventListener('click', function(){
    aside.classList.toggle('active');
});

let select = document.querySelectorAll('.select');
let optionBox = document.querySelectorAll('.options');
const options = [...document.querySelectorAll('.options .item')];

let activeOption = 0;

window.onclick = (e) => {
    selectOne = e.target;
    optionBoxOne = selectOne.nextElementSibling;
    if(e.target.className == 'select'){
        select = e.target;
        selectOne.classList.toggle('active');
        optionBoxOne.classList.toggle('active');
    } else{
        classRemover();
    }
}

options.forEach((item, i) => {
    item.onmousemove = () => {
        hoverOptions(i);
    }
})

const hoverOptions = (i) => {
    options[activeOption].classList.remove('active');
    options[i].classList.add('active');
    activeOption = i;
    setValue();
}

window.onkeydown = (e) => {
    if(select.className.includes('active')){
        e.preventDefault();
        if(e.key === 'ArrowDown' && activeOption < options.length - 1){
            hoverOptions(activeOption + 1);
        } else if(e.key === 'ArrowUp' && activeOption > 0){
            hoverOptions(activeOption - 1);
        } else if(e.key === 'Enter'){
            select.classList.remove('active');
            optionBox.classList.remove('active');
        }
    }
}

const setValue = () => {
    select.innerHTML = select.value = options[activeOption].innerHTML;
}
function classRemover() {
    const selectAll = document.querySelectorAll('.select');
    const optionBoxAll = document.querySelectorAll('.options');
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.remove('active');
        optionBoxAll[i].classList.remove('active');
    }
}