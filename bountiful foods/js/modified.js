const fyear = document.querySelectorAll(".fyear");
const fMod = document.querySelectorAll(".fMod");

//day names array
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

// month name array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const today = new Date();

const dayName = daynames[today.getDay()];
const monthName = months[today.getMonth()];
const dateNum = today.getDate();
const dayNum = today.getDay();
const year = today.getFullYear();



for (let yearTag = 0; yearTag < fyear.length; yearTag++) {
    fyear[yearTag].innerHTML = year;
    fMod[yearTag].innerHTML = document.lastModified;
}

document.querySelector(
    ".date"
).innerHTML = `<p><strong>${dayName}, ${dateNum} ${monthName} ${year}</strong></p>`;

window.addEventListener("load", () => {
    if (dayNum == 1 || dayNum == 2) {
        document.querySelector(".banner").style.display = "block";
    } else {
        document.querySelector(".banner").style.display = "none";
    }
});