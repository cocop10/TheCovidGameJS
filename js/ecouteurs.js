//init mouse
let mousePos = {};

/*---------------------------Mouvement de la souris------------------------------*/
function traiteMouseMove(event) {
  var rect = canvas.getBoundingClientRect();
  mousePos.x = event.clientX - rect.left;
  mousePos.y = event.clientY - rect.top;
  monstre.setPos(mousePos.x, mousePos.y);
  if(balleChercheuseImage){
    balleChercheuseImage.setTarget(mousePos.x, mousePos.y);
  }
}


/*---------------------------Touche Entree------------------------------*/
function traiteKeyDown(event) {
  if(event.which === 13){
    switch (etatJeu) {
      case "MenuPrincipal":
        etatJeu = "JeuEnCours";
        break;
      case "EcranChangementNiveau":
        niveauSuivant();
        break;
    } 
  }
}


