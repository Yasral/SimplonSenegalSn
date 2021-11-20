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


// window.addEventListener("scroll", function(){
//     console.log(window.scrollY);
//     var bougerHauteur = window.scrollY;
// });

// var bol;
// var bougerHauteur = window.scrollY;
// var parcours = document.querySelectorAll(".parcours-section");
// for(let i = 0; i < parcours.length; i++){
//     bol = parcours[i].getBoundingClientRect();
//     console.log(bol);
//     if (bougerHauteur - bol.y != 0) {
//         console.log("Nous sommes sur la partie formation");
//         console.log(bougerHauteur - bol.y)
//     }
// }

// window.addEventListener("scroll", function (e) { 
//     e.
// });

var blockParcoursTaille;
var blockPublicTaille;
var parcours = document.querySelector(".parcours-section");
var public = document.querySelector(".public-section");

blockParcoursTaille = parcours.getBoundingClientRect();
blockPublicTaille = public.getBoundingClientRect();
console.log(blockParcoursTaille);
console.log(blockPublicTaille);
window.addEventListener("scroll", function(e){
   console.log(window.scrollY);
   if(window.scrollY >= Math.ceil(blockParcoursTaille.top) && window.scrollY < Math.ceil(blockPublicTaille.top)){
       console.log("nous sommes sur la partie parcours");
   }
});