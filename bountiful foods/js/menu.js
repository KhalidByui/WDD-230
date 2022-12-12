
const menuBtn = document.getElementById("ham");
const ul = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    const dropDown = document.querySelector(".primary");

    if (!dropDown.classList.contains("open")) {
        dropDown.classList.add("open");
        menuBtn.textContent = "X";
        setTimeout(function() {
            ul.classList.remove("visuallyhidden");
        }, 20);
    } else {
        menuBtn.innerHTML = "&#9776;";
        ul.classList.add("visuallyhidden");
        ul.addEventListener(
            "transitionend",
            function(e) {
                dropDown.classList.remove("open");
            }, {
                capture: false,
                once: true,
                passive: false,
            }
        );
    }
});

const d = new Date();
document.getElementById("fMod").innerHTML = d;


// set active

function active() {
    switch (document.title) {
        case "Bountiful Foods - Home Page":
            document.querySelector("#home").classList.add("active");
            break;

        case "Bountiful Foods - Fresh Page":
            document.querySelector("#fresh").classList.add("active");
            break;

        case "Bountiful Foods - About Page":
            document.querySelector("#about").classList.add("active");
            break;

    }
}

active();