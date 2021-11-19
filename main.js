var mediumScale = document.querySelectorAll(".medium-scale");
var formationCards = document.querySelectorAll(".formation-cards");
var miniLgVersionThree = window.matchMedia("(min-width:1500px)");
var miniLgVersionTwo = window.matchMedia("(min-width:992px) and (max-width:1499px)");

function versionTwo(){
    if (miniLgVersionTwo.matches) {
        for (let i = 0; i < mediumScale.length; i++) {
            mediumScale[i].classList.remove("col-lg-4");
            console.log("removed something")
            mediumScale[i].classList.add("col-lg-6");
            console.log("added something")
        }

        for (let i = 0; i < formationCards.length; i++) {
            formationCards[i].style.maxWidth = "90%";
        }
    }
}

function versionThree() {
    if (miniLgVersionThree.matches) {
        for (let i = 0; i < mediumScale.length; i++) {
            mediumScale[i].classList.remove("col-lg-6");
            console.log("removed something")
            mediumScale[i].classList.add("col-lg-4");
            console.log("added something")
        }

        for (let i = 0; i < formationCards.length; i++) {
            formationCards[i].style.maxWidth = "95%";
        }
    }
}

miniLgVersionThree.addEventListener("change", versionThree);
miniLgVersionTwo.addEventListener("change", versionTwo);
miniLgVersionThree.addEventListener("change", versionThree);