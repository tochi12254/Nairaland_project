const addTopicDesktop = document.querySelector('.main_section--button');
const addTopicMobile = document.querySelector('.main_card--toggle');
const body = document.querySelector('body');
const main = document.querySelector('.main');
const mainCard = document.querySelector('.main_card');
const mainCardHeader = document.querySelector('.main_card--header');
const mainCardBody2 = document.querySelector('.main_card--body2');
const mainFooter = document.querySelector('.main_footer');
const cancel = document.querySelector('.main_card--body2-paragraph1-span');
const submit1 = document.querySelector('.main_card--body2-textarea-button');
const submit2 = document.querySelector('.main_card--body2-button2');
const day = document.querySelector('.date');


const coords = mainCard.getBoundingClientRect();
const coordsHeader = mainCardHeader.getBoundingClientRect();
const coordsFooter = mainFooter.getBoundingClientRect();


function showAddTopicDesktop(){
    const width = getComputedStyle(mainCardBody2).width;
    const newWidth = `${coordsHeader.width - (coordsHeader.width * 90 / 100)}`
    main.style.position = 'relative';
    mainCardBody2.style.display = 'block';
    mainCardBody2.style.position = 'absolute';
    mainCardBody2.style.top = `${coordsHeader.height}px`;
    mainCardBody2.style.left = `${newWidth / 2}px`;

    console.log({coords, coordsHeader});
    console.log(width, newWidth);
}

function showAddTopicMobile(){
    const mainPaddingBottom = getComputedStyle(main).paddingBottom;
    const paddingBottom = Number(mainPaddingBottom.slice(0, 2));
    console.log(paddingBottom);
    main.style.position = 'relative';
    mainCardBody2.style.display = 'block';
    mainCardBody2.style.position = 'absolute';
    mainCardBody2.style.height = `calc(100% + ${coordsFooter.height + paddingBottom }px)`;
    mainCardBody2.style.top = `0`;
    main.style.paddingBottom = '0';
    mainCardBody2.style.zIndex = '2000'
}

function cancelAddTopic(){
    mainCardBody2.style.display = 'none';
}

function cancelAndUpdate(){
    mainCardBody2.style.display = 'none';

    const newDiv = document.createElement('div');
    newDiv.className = 'submit-post'
    const image = document.createElement('img');
    image.src = "https://res.cloudinary.com/dxlgfcfi4/image/upload/v1699644807/check-mark_ve0gim.svg"
    const text = document.createTextNode('Your Topic Have Been Updated On Nairaland Forum')

    newDiv.appendChild(image)
    newDiv.appendChild(text)
    
    const firstChild = main.firstChild;
    main.insertBefore(newDiv, firstChild);
    main.style.position = 'relative';
    newDiv.style.position = 'absolute'
    newDiv.style.top = '130px';
    newDiv.style.zIndex = '2000';
}

addTopicDesktop.addEventListener('click', showAddTopicDesktop);
addTopicMobile.addEventListener('click', showAddTopicMobile);
cancel.addEventListener('click', cancelAddTopic);
submit1.addEventListener('click', cancelAndUpdate);
submit2.addEventListener('click', cancelAndUpdate);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const thisDay = date.getDay();
const thisMonth = date.getMonth();
const thisDate = `${days[thisDay]}, ${date.getDate()} ${months[thisMonth]} ${date.getFullYear()}`


day.textContent = thisDate;
