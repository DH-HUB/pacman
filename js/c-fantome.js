class Fantome{

    x;
    y;
    direction;
    classe;

    constructor(couleur)
    {
        this.x=11;
        this.y=9;
        this.direction=0;
        this.classe=couleur;
    }




deplacerPhantom(){
 this.direction= getRandomIntInclusive( 0, 3);
 

     if(this.direction==0){
        this.x++;
     }
     else if(this.direction==1){
        this.y++; 
     }
     else if(this.direction==2){
        this.x--; 
     }
     else if(this.direction==3){
       this.y--; 
       



     }

     this.testColPhantom()

     var RedPhantomElem = document.createElement("div")
     RedPhantomElem.classList.add(this.classe);
     RedPhantomElem.style.gridColumn=(this.x);
     RedPhantomElem.style.gridRow=(this.y);
     _grille.appendChild(RedPhantomElem);
 }

testColPhantom(){
    if(grille[this.y-1][this.x-1]==0){
        if(this.direction==0){
            this.x--;
         }
         else if(this.direction==1){
            this.y--; 
         }
         else if(this.direction==2){
           this.x++; 
         }
         else if(this.direction==3){
           this.y++; 
         }
        
  //col pacman+phantom

        

        }//fonction bloquer les fantômes à l'interieur de la grille

        if(this.x>grille[0].length){
            this.x=1

        }
        if(this.x<1){
            this.x=grille[0].length

        }
        //fin de la eeeeeesssssssssssssssssssfonction bloquer les fantômes à l'interieur de la grille

        if(this.x==pacman.x){
            if(this.y==pacman.y){
                window.alert('perdu');
               
            }
        }
    } 
}