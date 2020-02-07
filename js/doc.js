

var grille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],//1 
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0 ],//2 
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],//3
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],//4
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ],//5 
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0 ],//6
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0 ],//7
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0 ],//8
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0 ],//9
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0 ],//10
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2 ],//11
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0 ],//12
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0 ],//13
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0 ],//14
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0 ],//15
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0 ],//16
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0 ],//17
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0 ],//18
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0 ],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0 ],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
];

var _grille = document.querySelector('#grille');

function initGrille() {

    _grille.innerHTML = "";
    _grille.style.gridTemplateColumns = 'repeat('+grille[0].length+', 40px)';
    _grille.style.gridTemplateRows = 'repeat('+grille.length+', 40px)';
 
     for(let ligne in grille) {
             grille[ligne];
         
         for(let col in grille[ligne]) {
            let cellule = grille[ligne][col];
            let monElem = document.createElement("div");
          //  console.log(cellule);
            if(cellule == 0) {
             monElem.classList.add("mur");
         } else if(cellule == 1) {
             monElem.classList.add("sol");
         } else if(cellule == 2) {
             monElem.classList.add("bonbon");
         }
         monElem.style.gridColumn=(+col)+1;
         monElem.style.gridRow=(+ligne)+1;
             _grille.append(monElem);
         };
     };
    }
  //  initGrille();
 

    var pacman = {
        x:5, 
        y:2,
        direction:0
    };
    function boucleRefresh (){
        initGrille();
        deplacerPacman();
      //  if(pacman.direction==0){


        setTimeout(boucleRefresh, 1000);   

     //   }
    };
 
 function deplacerPacman (){
     if(pacman.direction==0){
        pacman.x++;
     }
     else if(pacman.direction==1){
        pacman.y++; 
     }
     else if(pacman.direction==2){
        pacman.x--; 
     }
     else if(pacman.direction==3){
        pacman.y--; 
     }

  
    var pacmanElem = document.createElement("div")
    pacmanElem.classList.add("pacman");
    pacmanElem.style.gridColumn=(pacman.x);
    pacmanElem.style.gridRow=(pacman.y);
    _grille.appendChild(pacmanElem);
   // if(pacman.direction==0);
     }

boucleRefresh();
document.onkeypress=appuieTouche;
function appuieTouche(event){
    console.log(event.key)
switch(event.key){
  case "e":
  case "E":
      pacman.direction= 1
      break;
    case "s":
    case "S":
        pacman.direction= 2
        break;
    case "x":
    case "X":
        pacman.direction= 3
        break;
    case "d":
    case "D":
        pacman.direction= 0
        break;




}

}