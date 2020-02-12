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
}