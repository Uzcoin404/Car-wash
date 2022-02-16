let select = document.querySelectorAll('.select');
let optionBox = document.querySelectorAll('.options');
const options = [...document.querySelectorAll('.options .item')];

let activeOption = 0;

window.onclick = (e) => {
    selectOne = e.target;
    optionBoxOne = selectOne.nextElementSibling;
    if(e.target.classList.contains('select')){
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

// window.onkeydown = (e) => {
//     if(select.className.includes('active')){
//         e.preventDefault();
//         if(e.key === 'ArrowDown' && activeOption < options.length - 1){
//             hoverOptions(activeOption + 1);
//         } else if(e.key === 'ArrowUp' && activeOption > 0){
//             hoverOptions(activeOption - 1);
//         } else if(e.key === 'Enter'){
//             select.classList.remove('active');
//             optionBox.classList.remove('active');
//         }
//     }
// }

const setValue = () => {
    let optValue = options[activeOption].getAttribute('data-value');
    if (optValue == 'none') {
        select.innerHTML = options[activeOption].innerHTML;
        select.value = optValue;
    } else {
        select.innerHTML = select.value = optValue;
    }
    
}
function classRemover() {
    const selectAll = document.querySelectorAll('.select');
    const optionBoxAll = document.querySelectorAll('.options');
    for (let i = 0; i < selectAll.length; i++) {
        selectAll[i].classList.remove('active');
        optionBoxAll[i].classList.remove('active');
    }
}

const inputs = document.querySelectorAll('.form_input'),
selects = document.querySelectorAll('.form_select'),
switchs = document.querySelectorAll('.form_switch'),
selectOptions = document.querySelectorAll('.options'),
carBrand = document.querySelector('.car_brand_logo'),
carModel = document.querySelector('.car_model_text'),
carColor = document.querySelector('.car_color'),
carTerritoryCode = document.querySelector('.territory_code'),
carNumber = document.querySelector('.car_number'),
carPhoneNumber = document.querySelector('.car_phone_number'),
carWashType = document.querySelector('.wash_type'),
carServiceTypes = document.querySelector('.service_type_blog'),
carDescr = document.querySelector('.descr'),
carImg = document.querySelector('.car_img'),
carWashCost = document.querySelector('.total_cost');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function(){
        setInfo();
    });
}
for (let i = 0; i < selectOptions.length; i++) {
    selectOptions[i].addEventListener('mousemove', function(){
        setInfo();
    });
}
for (let i = 0; i < selectOptions.length; i++) {
    selectOptions[i].addEventListener('click', function(){
        setInfo();
    });
}

function setInfo() {
    let washTypeCost = 0;
    if (isEmpty(inputs[0].value)) {   
        carNumber.innerHTML = inputs[0].value
    } else {
        carNumber.innerHTML = 'A 123 NN'; // Default value
    }
    if (isEmpty(inputs[1].value)) {   
        carPhoneNumber.innerHTML = inputs[1].value
    } else {
        carPhoneNumber.innerHTML = '+998 90 622 50 22'; // Default value
    }
    if (isEmpty(inputs[2].value)) {   
        carDescr.innerHTML = inputs[2].value
    } else {
        carDescr.innerHTML = 'Kechgi soat 21:00ga'; // Default value
    }

    for (let i = 0; i < selects.length; i++) {
        if (selects[i].getAttribute('name') == 'model') {
            selects[i].value != 'none' ? carModel.innerHTML = selects[i].value : carModel.innerHTML = 'Malibu' // Default value
            selects[i].value != 'none' ? carImg.src = `../img/${selects[i].value}.png` : carImg.src = '../img/malibu.png';
        }
        if (selects[i].getAttribute('name') == 'color') {
            selects[i].value != 'none' ? carColor.innerHTML = selects[i].value : carColor.innerHTML = 'Oq' // Default value
        }
        if (selects[i].getAttribute('name') == 'territory_code') {
            selects[i].value != 'none' ? carTerritoryCode.innerHTML = selects[i].value : carTerritoryCode.innerHTML = 60 // Default value
        }
        if (selects[i].getAttribute('name') == 'wash_type') {
            selects[i].value != 'none' ? carWashType.innerHTML = selects[i].value : carWashType.innerHTML = "To'liq" // Default value
            if (carWashType.innerHTML == "To'liq") {
                washTypeCost = 40000;
            } else if (carWashType.innerHTML == "Faqat ichki qism") {
                washTypeCost = 20000;
            } else if (carWashType.innerHTML == "Faqat tashqi qism") {
                washTypeCost = 20000;
            }
        }
    }

    let washTypeLength = 0;
    for (let i = 0; i < switchs.length; i++) {
        if (switchs[i].checked) {
            setServiceType(switchs[i].getAttribute('data-value'));
            washTypeLength += 1;
        } else {
            removeServiceType(switchs[i].getAttribute('data-value'));
        }
    }
    carWashCost.innerHTML = washTypeCost + (washTypeLength * 5000);
}

function isEmpty(value) {
    if (!value || value.trim().length === 0) {
        return false;
    } else {
        return true;
    }
}

function setServiceType(innerText) {
    if (!isServiceType(innerText)) {
        let serviceType = document.createElement('span');
        serviceType.innerHTML = innerText;
        serviceType.className = 'service_type';
        carServiceTypes.appendChild(serviceType);
        console.log(serviceType);
    }
}

function isServiceType(innerText) {
    const carServiceType = document.querySelectorAll('.service_type');
    for (let i = 0; i < carServiceType.length; i++) {
        if (carServiceType[i].innerHTML == innerText) {
            return true;
            break;
        }
    }
}

function removeServiceType(innerText) {
    const carServiceType = document.querySelectorAll('.service_type');
    for (let i = 0; i < carServiceType.length; i++) {
        if (carServiceType[i].innerHTML == innerText) {
            carServiceType[i].remove();
        }
    }
}