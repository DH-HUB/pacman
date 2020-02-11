

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
function getRandomIntInclusive( min, max)//mon resultat à reprendre!!!
{
   min=Math.ceil(min);
   max=Math.floor(max);
   return Math.floor(Math.random()*(max-min+1))+min;  
}

// nombre de bonbons
var nombreBonbon=0;

for(let ligne in grille) {
for(let col in grille[ligne]) {
    if(grille[ligne][col]==2){
        nombreBonbon++
    }
}
}
console.log("nombre de bonbon "+nombreBonbon)

//Blue Phantom



//Red Phantom



//Yellow Phantom

var YellowPhantom = {

    rows: 13,

    cols: 9,

    direction: "0",

    class: "yellow_phantom"

};

//Green Phantom

var GreenPhantom = {

    rows: 2,

    cols: 17,

    direction: "0",

    class: "green_phantom"

};

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
    var RedPhantom = {
        x: 11,
         y: 7,
         direction: 0,
         class: "red_phantom"
     
     }
     var BluePhantom = {
         x: 11,
         y: 7,
        direction: "0",
        class: "blue_phantom"
    
    };
    function boucleRefresh (){
        initGrille();
        deplacerPacman()
        deplacerRedPhantom()
        deplacerBluePhantom()
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

     testColPacman()
  
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

function testColPacman(){
    if(grille[pacman.y-1][pacman.x-1]==0){
        if(pacman.direction==0){
            pacman.x--;
         }
         else if(pacman.direction==1){
            pacman.y--; 
         }
         else if(pacman.direction==2){
            pacman.x++; 
         }
         else if(pacman.direction==3){
            pacman.y++; 
           
         }
        }
       //col pacman+phantom    

     if(RedPhantom.x==pacman.x){
         if(RedPhantom.y==pacman.y){
             window.alert('perdu');

//affichage du message c'est gagné si'bonbons=0'*****************
             if(nombreBonbon==0){
             
                    window.alert('c\'est gagné');
            
         }
     }
     
        // stopGame();
     //fonction pacman mange les bonbons
     }

     if(grille[pacman.y-1][pacman.x-1]==2){
        grille[pacman.y-1][pacman.x-1]=1
     }
    }   

    //
 function deplacerRedPhantom(){
 RedPhantom.direction= getRandomIntInclusive( 0, 3);



     if(RedPhantom.direction==0){
        RedPhantom.x++;
     }
     else if(RedPhantom.direction==1){
        RedPhantom.y++; 
     }
     else if(RedPhantom.direction==2){
        RedPhantom.x--; 
     }
     else if(RedPhantom.direction==3){
        RedPhantom.y--; 
       



     }

     testColRedPhantom()

     var RedPhantomElem = document.createElement("div")
     RedPhantomElem.classList.add("red_phantom");
     RedPhantomElem.style.gridColumn=(RedPhantom.x);
     RedPhantomElem.style.gridRow=(RedPhantom.y);
     _grille.appendChild(RedPhantomElem);
 }

function testColRedPhantom(){
    if(grille[RedPhantom.y-1][RedPhantom.x-1]==0){
        if(RedPhantom.direction==0){
            RedPhantom.x--;
         }
         else if(RedPhantom.direction==1){
            RedPhantom.y--; 
         }
         else if(RedPhantom.direction==2){
            RedPhantom.x++; 
         }
         else if(RedPhantom.direction==3){
            RedPhantom.y++; 
         }
        
  //col pacman+phantom

  

        }
        if(RedPhantom.x==pacman.x){
            if(RedPhantom.y==pacman.y){
                window.alert('perdu');
               
            }
        }
    } 
//**************************************bluePhantom */


function deplacerBluePhantom(){
    BluePhantom.direction= getRandomIntInclusive( 0, 3);
   
   
   
        if(BluePhantom.direction==0){
            BluePhantom.x++;
        }
        else if(BluePhantom.direction==1){
            BluePhantom.y++; 
        }
        else if(BluePhantom.direction==2){
            BluePhantom.x--; 
        }
        else if(BluePhantom.direction==3){
            BluePhantom.y--; 
          
   
   
   
        }
   
        testColBluePhantom()
   
        var BluePhantomElem = document.createElement("div")
        BluePhantomElem.classList.add("blue_phantom");
        BluePhantomElem.style.gridColumn=(BluePhantom.x);
        BluePhantomElem.style.gridRow=(BluePhantom.y);
        _grille.appendChild(BluePhantomElem);
    }
   
   function testColBluePhantom(){
       if(grille[BluePhantom.y-1][BluePhantom.x-1]==0){
           if(BluePhantom.direction==0){
            BluePhantom.x--;
            }
            else if(BluePhantom.direction==1){
                BluePhantom.y--; 
            }
            else if(BluePhantom.direction==2){
                BluePhantom.x++; 
            }
            else if(BluePhantom.direction==3){
                BluePhantom.y++; 
            }
        }


        if(BluePhantom.x==pacman.x){
            if(BluePhantom.y==pacman.y){
                window.alert('perdu');
   }
}
   }
