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


