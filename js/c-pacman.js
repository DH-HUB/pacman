class PacMan{

    x;
    y;
    direction;
    constructor()
    {
        this.x=5;
        this.y=2;
        this.direction=0;
    }
    deplacerPacman (){

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
    
    this.testColPacman()
    
    var pacmanElem = document.createElement("div")
    pacmanElem.classList.add("pacman");
    pacmanElem.style.gridColumn=(this.x);
    pacmanElem.style.gridRow=(this.y);
    _grille.appendChild(pacmanElem);
    // if(pacman.direction==0);
    }
    testColPacman(){
        if(grille[this.y-1][this.x-1]==0){
            if(this.direction==0){
                this.x--;
             }
             else if(this.direction==1){
                pacman.y--; 
             }
             else if(this.direction==2){
                this.x++; 
             }
             else if(this.direction==3){
                this.y++; 
               
             }
            }
           //col pacman+phantom    
    
         if(RedPhantom.x==this.x){
             if(RedPhantom.y==this.y){
                 window.alert('perdu');
    
    //affichage du message c'est gagné si'bonbons=0'*****************
                 if(nombreBonbon==0){
                 
                        window.alert('c\'est gagné');
                
             }
         }
         
            // stopGame();
         //fonction pacman mange les bonbons
         }
        //Mange les bonbon
         if(grille[this.y-1][this.x-1]==2){
            grille[this.y-1][this.x-1]=1
         }
        }   
}