let aboutMeLink = document.getElementById('aboutme-link');
let aboutMe = document.getElementById("aboutme");
let skillsLink = document.getElementById('skills-link');
let skills = document.getElementById("skills");

aboutMeLink.addEventListener('click', function() {
    aboutMe.scrollIntoView({behavior: "smooth"});
});

skillsLink.addEventListener('click', function() {
    skills.scrollIntoView({behavior: "smooth"});
});

let progressHTML = document.querySelector('.html .progress');
let htmlTarget = document.querySelector('.html img');
let progressCSS = document.querySelector('.css .progress');
let cssTarget = document.querySelector('.css img');
let progressJS = document.querySelector('.js .progress');
let jsTarget = document.querySelector('.js img');

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
cssTarget.addEventListener('click', loadProgressCSS);
jsTarget.addEventListener('click', loadProgressJS);

/*
const loadProgress = function(target, number) {
    target.style.width = '0%';

    for (let i = 0; i <= number; i++) {

        target.style.width = i + '%';
        setTimeout(function(){console.log(i);}, 1000);
    }
};

loadProgress(progress, 60);*/
