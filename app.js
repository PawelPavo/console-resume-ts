"use strict";
var myName2 = "Pawel Jaskolski";
console.log("Name: " + myName2.toUpperCase());
var career = "Full stack Developer in Trainig";
console.log("Career: " + career);
console.log("Description: We are learning TypeScript");
console.log('');
console.log("My Interests:");
var myInterests = ["Coding", "Learning", "Reading"];
for (var i = 0; i < myInterests.length; i++) {
    console.log("- " + myInterests[i]);
}
console.log('');
console.log("My Dev Journey:");
var myPosition = [
    ["JavaScript", "Programming Language", "JavaScript can calculate, manipulate and validate data as well as update and change both HTML and CSS."],
    ["jQuery", "JavaScript library", "JQuery is a greatly simplifies JavaScript programming which is easy to learn."],
    ["ReactJS", "JavaScript library", "React is a JavaScript library created by Facebook, it is also a User Interface (UI) library for building UI components."],
    ["Naturally there is more...", "", ""]
];
function displayPositions(language, purpose, description) {
    console.log("- " + language + " | " + purpose + " | " + description);
}
displayPositions(myPosition[0][0], myPosition[0][1], myPosition[0][2]);
displayPositions(myPosition[1][0], myPosition[1][1], myPosition[1][2]);
displayPositions(myPosition[2][0], myPosition[2][1], myPosition[2][2]);
// how do I pass null?
displayPositions(myPosition[3][0], myPosition[3][1], myPosition[3][2]);
console.log('');
console.log("My Skills:");
var myNewSkills = ["Bootstrap", "JavaScript", "JQuery", "HTML", "CSS", "ReactJS"];
function displaySkill(codingSkills, difficulity) {
    if (difficulity === true) {
        console.log("* BAM " + codingSkills + " - this one is difficult");
    }
    else {
        console.log("* " + codingSkills);
    }
}
displaySkill("Bootstrap", false);
displaySkill("JavaScript", true);
displaySkill("JQuery", false);
displaySkill("HTML", false);
displaySkill("CSS", false);
displaySkill("ReactJS", true);
console.log('');
console.log('My daily Skills:');
var myDailySkills = [
    {
        skill: 'Drinking',
        cool: false
    },
    {
        skill: 'Coding',
        cool: true
    },
    {
        skill: 'Walking',
        cool: false
    },
    {
        skill: 'Breathing',
        cool: true
    },
    {
        skill: 'Cooking',
        cool: true
    },
    {
        skill: 'Eating',
        cool: false
    }
];
for (var j = 0; j < myDailySkills.length; j++) {
    if (myDailySkills[j].cool === true) {
        console.log('* BAM: ' + myDailySkills[j].skill);
    }
    else {
        console.log('* ' + myDailySkills[j].skill);
    }
}
console.log('');
console.log(' ======= Below is a complex version =======');
console.log('');
// ================= Below is a complex version
var style1 = [
    'background: #000',
    'color: #fff',
    'padding: 10px 20px',
    'line-height: 35px',
    'font-size: 20px'
].join(';');
// Found this on Google
var style2 = [
    'background: linear-gradient(#D33106, #571402)',
    'border: 1px solid #3E0E02',
    'color: white',
    'padding: 1px 5px',
    'display: block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)',
    'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 40px',
    'text-align: center',
    'font-weight: bold'
].join(';');
function reverseString(str) {
    return str.split('').reverse().join('');
}
;
var myName = 'Pawel Jaskolski';
var revName = reverseString(myName);
var interests = ['* Coding', '* Reading', '* Hikiong', '* Sleeping'];
var job = ['* ExpertBuild LLC', '* Playwire', '* SHCC'];
var title = ['Owner', 'Account Executive', 'Consultant'];
var description = ['in charge of buying, renovating and selling real estate', 'Assisted top clients with purchesed products', 'Oversaw 6 healthcare facilities'];
var mySkills = [
    {
        skill: '* Polish',
        cool: false
    },
    {
        skill: 'JavaScript',
        cool: true
    },
    {
        skill: '* Walking',
        cool: false
    },
    {
        skill: 'HTML',
        cool: true
    },
    {
        skill: 'CSS',
        cool: true
    },
    {
        skill: '* Cooking',
        cool: false
    }
];
console.log('%cWelcome to my console resume!', style1);
console.log('');
console.log('Name: ' + revName.toUpperCase() + ' 🔄 Pawel Jaskolski'.toUpperCase());
console.log('Career: ', 'Full Stack Developer in Training');
console.log('Description: ', 'Sequi Me!');
console.log('');
console.log('%cMy Interests:', style2);
for (var i = 0; i < interests.length; i++) {
    console.log(interests[i]);
}
console.log('');
console.log('%cMy Previous Experiance:', style2);
for (var i = 0; i < job.length; i++) {
    console.log(job[i] + ' - ' + title[i] + ' - ' + description[i]);
}
console.log('');
console.log('%cMy Skills:', style2);
for (var j = 0; j < mySkills.length; j++) {
    if (mySkills[j].cool === true) {
        console.log('* BAM: ' + mySkills[j].skill);
    }
    else {
        console.log(mySkills[j].skill);
    }
}
