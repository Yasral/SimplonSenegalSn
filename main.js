var mediumScale = document.querySelectorAll(".medium-scale");
var formationCards = document.querySelectorAll(".formation-cards");
var miniLgVersionThree = window.matchMedia("(min-width:1500px)");
var miniLgVersionTwo = window.matchMedia("(min-width:992px) and (max-width:1499px)");

function versionTwo(){
    if (miniLgVersionTwo.matches) {
        for (let i = 0; i < mediumScale.length; i++) {
            mediumScale[i].classList.remove("col-lg-4");
            mediumScale[i].classList.add("col-lg-6");
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
            mediumScale[i].classList.add("col-lg-4");
        }

        for (let i = 0; i < formationCards.length; i++) {
            formationCards[i].style.maxWidth = "95%";
        }
    }
}

miniLgVersionThree.addEventListener("change", versionThree);
miniLgVersionTwo.addEventListener("change", versionTwo);
miniLgVersionThree.addEventListener("change", versionThree);

var blockParcoursTaille;
var blockPublicTaille;
var blockPartenariatTaille;
var blockParcoursBtn;
var blockPublicBtn;
var parcoursVerticalMenuScroll;
var publicVerticalMenuScroll;
var verticalValue = 500;

var parcours = document.querySelector(".parcours-section");
var public = document.querySelector(".public-section");
var partenariat = document.querySelector(".partenariat-section");
var parcoursBtn = document.querySelector(".parcours-see-more-button");
var publicBtn = document.querySelector(".public-see-more-button");
var parcoursVerticalMenu = document.querySelector(".scope-parcours");
var publicVerticalMenu = document.querySelector(".scope-public");

blockParcoursTaille = parcours.getBoundingClientRect();
blockPublicTaille = public.getBoundingClientRect();
blockPartenariatTaille = partenariat.getBoundingClientRect();
blockParcoursBtn = parcoursBtn.getBoundingClientRect();
blockPublicBtn = publicBtn.getBoundingClientRect();

console.log(blockParcoursTaille);
console.log(blockPublicTaille);
console.log(blockPartenariatTaille);
console.log(blockParcoursBtn);

// function removeBackgroundClasslist(section){
//     section.classList.remove("section-color-change");
// }

// function addBackgroundClasslist(section){
//     section.classList.add("section-color-change");
// }


function verticalMenuTopScroll(topValue, section){
    topValue = topValue + 100;
    section.style.top = topValue + "px";
    if (window.scrollY > Math.ceil(section.getBoundingClientRect().bottom)) {
        topValue = topValue + 100;
        section.style.top = topValue + "px";
    }
}

function hideDisplay(verticalNav){
    verticalNav.style.display = "none";
}

function showDisplay(verticalNav){
    verticalNav.style.display = "block";
}

window.addEventListener("scroll", function(e){

   if(window.scrollY >= Math.ceil(blockParcoursTaille.top) && window.scrollY < Math.ceil(blockParcoursBtn.top)){
    //    addBackgroundClasslist(parcours);
    //    removeBackgroundClasslist(public);
       verticalMenuTopScroll(verticalValue, parcoursVerticalMenu);
       showDisplay(parcoursVerticalMenu);
   }else if(window.scrollY >= Math.ceil(blockPublicTaille.top) && window.scrollY < Math.ceil(blockPublicBtn.top)){
    //    removeBackgroundClasslist(parcours);
    //    addBackgroundClasslist(public);
       hideDisplay(parcoursVerticalMenu);
       verticalMenuTopScroll(verticalValue, publicVerticalMenu);
       showDisplay(publicVerticalMenu);
   }else{
    //    removeBackgroundClasslist(public);
       hideDisplay(publicVerticalMenu);
   }
});