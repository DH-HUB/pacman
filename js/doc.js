

var grille=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,2,0,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,2,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
     [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,2,0,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,2,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],

];

function initGrille() {
    let _grille = document.querySelector('#grille');
    _grille.innerHTML = "";
    _grille.style.gridTemplateColumns = 'repeat('+grille[0].length+', 40px)';
    _grille.style.gridTemplateRows = 'repeat('+grille.length+', 40px)';
 
     for(let ligne in grille) {
             grille[ligne];
         
         for(let col in grille[ligne]) {
            let cellule = grille[ligne][col];
            let monElem = document.createElement("div");
            console.log(cellule);
            if(cellule == 0) {
             monElem.classList.add("mur");
         } else if(cellule == 1) {
             monElem.classList.add("sol");
         } else if(cellule == 2) {
             monElem.classList.add("bonbon");
         }
             _grille.append(monElem);
         };
     };
    }

    initGrille();