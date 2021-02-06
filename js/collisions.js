
/*---------------------------Collision de toutes les balles avec les bords------------------------------*/
function traiteCollisionsBalleAvecBords(b) {
  if (b.x + b.rayon > canvas.width) {
    //truc à savoir, pour ne pas que l'objet donne l'impression d'aller plus loin que le bord de l'écran, on le remet au point de contact
    b.x = canvas.width - b.rayon;// point de contact
    b.vitesseX = -b.vitesseX;
  } else if (b.x - b.rayon < 0) {
    b.x = b.rayon; // point de contact
    b.vitesseX = -b.vitesseX;
  }

  if (b.y - b.rayon < 0) {
    b.y = b.rayon;// point de contact
    b.vitesseY = -b.vitesseY;
  } else if (b.y + b.rayon > canvas.height) {
    b.y = canvas.height - b.rayon;// point de contact
    b.vitesseY = -b.vitesseY;
  }
}

/*---------------------------Collision du bonhomme avec les bords------------------------------*/
function traiteCollisionsJoueurAvecBords() {
  if (monstre.x > canvas.width - monstre.l) {
    monstre.x = canvas.width - monstre.l;
    monstre.vitesseX = -monstre.vitesseX;
  } else if (monstre.x < 0) {
    monstre.x = 0;
    monstre.vitesseX = -monstre.vitesseX;
  }
  if (monstre.y < 0) {
    monstre.y = 0;
    monstre.vitesseY = -monstre.vitesseY;
  } else if (monstre.y + monstre.h > canvas.height) {
    monstre.y = canvas.height - monstre.h;
    monstre.vitesseY = -monstre.vitesseY;
  }
}

/*---------------------------Collision de Macron------------------------------*/
function traiteCollisionsMacronAvecBords() {
  if (macron.x > canvas.width - macron.l - 125) {
    macron.x = canvas.width - macron.l - 125;
    macron.vitesseX = -macron.vitesseX;
  } else if (macron.x < 125) {
    macron.x = 125;
    macron.vitesseX = -macron.vitesseX;
  }
  if (macron.y < 0) {
    macron.y = 0;
    macron.vitesseY = -macron.vitesseY;
  } else if (macron.y + macron.h > canvas.height) {
    macron.y = canvas.height - macron.h;
    macron.vitesseY = -macron.vitesseY;
  }
}

/*---------------------------Collision du bonhomme avec les balles------------------------------*/
function traiteCollisionBalleAvecMonstre(b) {
  if (
    circRectsOverlap(
      monstre.x,
      monstre.y,
      monstre.l,
      monstre.h,
      b.x,
      b.y,
      b.rayon
    )
  ) {
    let index = tableauDesBalles.indexOf(b);
    if(b instanceof BalleChercheuse){
      return balleChercheuseImage.resetPos(0, 0);
    }
    else if (b.couleur == "green") {
      tableauDesBalles.splice(index, 1);
      nombreBallesVertes = nombreBallesVertes - 1;
    }
    else if (b.couleur == "red") {
      b.vitesseX = -b.vitesseX;
      b.vitesseY = -b.vitesseY;

      b.x = monstre.x - b.rayon;
      b.y = monstre.y - b.rayon;
      vie = vie - 1;
      changerMusique(assets.infection);
      setTimeout(() => {
        changerMusique(assets.virusFond);
      }, 2500);
    }
  }
}

// Fonctions génériques de collision cercle-cercle, rectangle-rectangle et cercle-rectangle
// pour les curieux, polygone-polygone convexes existe aussi voir algorithme SAT
// (Separation Axis Theorem)
// Collisions between rectangle and circle
// Collisions between aligned rectangles
function circleCollide(x1, y1, r1, x2, y2, r2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return dx * dx + dy * dy < (r1 + r2) * (r1 + r2);
}

function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
  if ((x1 > (x2 + w2)) || ((x1 + w1) < x2))
    return false; // No horizontal axis projection overlap
  if ((y1 > (y2 + h2)) || ((y1 + h1) < y2))
    return false; // No vertical axis projection overlap
  return true; // If previous tests failed, then both axis projections
  // overlap and the rectangles intersect
}

function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
  var testX = cx;
  var testY = cy;
  if (testX < x0) testX = x0;
  if (testX > (x0 + w0)) testX = (x0 + w0);
  if (testY < y0) testY = y0;
  if (testY > (y0 + h0)) testY = (y0 + h0);
  return (((cx - testX) * (cx - testX) + (cy - testY) * (cy - testY)) < r * r);
}