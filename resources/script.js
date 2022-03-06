let aboutMeLink = document.getElementById('aboutme-link');
let aboutMe = document.getElementById("aboutme");
let skillsLink = document.getElementById('skills-link');
let skills = document.getElementById("skills");
let ctaButton = document.getElementById("cta-main");

aboutMeLink.addEventListener('click', function() {
    aboutMe.scrollIntoView({behavior: "smooth"});
});

skillsLink.addEventListener('click', function() {
    skills.scrollIntoView({behavior: "smooth"});
});

ctaButton.addEventListener('click',  function() {
    aboutMe.scrollIntoView({behavior: "smooth"});
});

let progressHTML = document.querySelector('.html .progress');
let htmlTarget = document.querySelector('.html img');
let progressCSS = document.querySelector('.css .progress');
let cssTarget = document.querySelector('.css img');
let progressJS = document.querySelector('.js .progress');
let jsTarget = document.querySelector('.js img');
let numberHTML = document.querySelector('.html p span');
let numberCSS = document.querySelector('.css p span');
let numberJS = document.querySelector('.js p span');



const animateHTML = () => {
    const valueHTML = 90;
    const time = 1; 
    let data = +numberHTML.innerText;
     if(data < valueHTML) {
        numberHTML.innerText = Math.ceil(data + time);
        data = +numberHTML.innerText;
          setTimeout(animateHTML, 10);
        }else{
            numberHTML.innerText = valueHTML;
        }
};
   
const animateHTML2 = () => {

    numberHTML.innerText = '0';
    animateHTML();

}

const animateCSS = () => {
    const valueCSS = 80;
    const time = 1; 
    let data = +numberCSS.innerText;
     if(data < valueCSS) {
        numberCSS.innerText = Math.ceil(data + time);
        data = +numberCSS.innerText;
          setTimeout(animateCSS, 10);
        }else{
            numberCSS.innerText = valueCSS;
        }
};
   
const animateCSS2 = () => {

    numberCSS.innerText = '0';
    animateCSS();

}

const animateJS = () => {
    const valueJS = 50;
    const time = 1; 
    let data = +numberJS.innerText;
     if(data < valueJS) {
        numberJS.innerText = Math.ceil(data + time);
        data = +numberJS.innerText;
          setTimeout(animateJS, 20);
        }else{
            numberJS.innerText = valueJS;
        }
};
   
const animateJS2 = () => {

    numberJS.innerText = '0';
    animateJS();

}

let loadProgress = (element, number) => {
    element.style.width = 0;
    element.animate([{width: 0}, {width: number + '%'}],1000);
    element.style.width = number + '%';
}

const loadProgressHtml = function() {
    loadProgress(progressHTML, 90);
};
const loadProgressCSS = function() {
    loadProgress(progressCSS, 80);
};
const loadProgressJS = function() {
    loadProgress(progressJS, 50);
};

htmlTarget.addEventListener('click', loadProgressHtml);
htmlTarget.addEventListener('click', animateHTML2);
cssTarget.addEventListener('click', loadProgressCSS);
cssTarget.addEventListener('click', animateCSS2);
jsTarget.addEventListener('click', loadProgressJS);
jsTarget.addEventListener('click', animateJS2);



