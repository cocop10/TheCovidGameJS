window.onload = main;
/*---------------------------Iniatialisation------------------------------*/
let canvas;
let ctx;
// ici on va stocker les objets graphiques du jeu, ennemis, etc.
let tableauDesBalles = [];
let nombreBallesVertes = 0;
let balleChercheuseImage;
let vitesseBalleChercheuse = 0.5;
let vmax = 5;
let vmin = 0;
let musiqueCourante;
let vie = 5;
let assets;
let niveauCourant = 0;
let etatJeu = "MenuPrincipal";
//init des assets
function main() {
  loadAssets(startGame);
}

function startGame(assetsLoaded) {
  //canvas et contexte
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  canvas.weight = 900;
  canvas.height = 600;
  //recherche des mvts souris et clics
  canvas.onmousemove = traiteMouseMove;
  document.onkeydown = traiteKeyDown;
  //recuperation assets
  assets = assetsLoaded;
  //load music
  changerMusique(assets.virusFond);
  //creation de la balle cherche, vitesse augment suivant le niveau
  balleChercheuseImage = new BalleChercheuse(0, 0, 25, "red", vitesseBalleChercheuse, assets.virus);
  //initialisation des balles niv 1
  creerDesBalles(1);
  //loop
  requestAnimationFrame(animationLoop);
}

/*---------------------------Animation------------------------------*/
function animationLoop() {
  // 1 on efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  afficheInfoJeu(); // scores, niveau etc.

  switch (etatJeu) {
    case "MenuPrincipal":
      afficheMenuPrincipal();
      break;
    case "JeuEnCours":
      updateJeu();
      break;
    case "EcranChangementNiveau":
      afficheEcranChangementNiveau();
      break;
    case "GameOver":
      afficheEcranGameOver();
  }
  requestAnimationFrame(animationLoop);
}

/*---------------------------Affichage des ecrans------------------------------*/
function afficheMenuPrincipal() {
  ctx.save();
  macron.draw(ctx);
  macron.move();
  traiteCollisionsMacronAvecBords();
  ctx.translate(80, 200);
  ctx.fillStyle = "#0f056b";
  ctx.font = "80pt Shakerato-PERSONAL";
  ctx.fillText("THE COVID GAME", 45, 45);
  ctx.fillStyle = "black";
  ctx.font = "50pt Shakerato-PERSONAL";
  ctx.fillText("START GAME", 220, 160);
  ctx.fillStyle = "red";
  ctx.font = "20pt Shakerato-PERSONAL";
  ctx.fillText("Press Enter to Start", 265, 200);
  castex.draw(ctx);
  trump.draw(ctx, 1, 0, 0);
  ctx.restore();
}

function afficheEcranChangementNiveau() {
  ctx.save();
  afficheTrump(ctx);
  ctx.translate(160, 120);
  ctx.fillStyle = 'black';
  ctx.font = '50px Shakerato-PERSONAL';
  ctx.fillText('LEVEL COMPLETE', 130, 120);
  ctx.font = '40px Shakerato-PERSONAL';
  ctx.fillStyle = 'green';
  if (vie > 1) {
    ctx.fillText('Il te reste ' + vie + ' vies !', 180, 180);
  }
  else {
    ctx.fillText('Il te reste ' + vie + ' vie !', 180, 180);
  }
  ctx.fillStyle = 'red';
  ctx.font = '20px Shakerato-PERSONAL';
  ctx.fillText('Press Enter to Next Level', 199, 470);

  ctx.restore();
}

function afficheEcranGameOver() {
  ctx.save();
  drawTrump(ctx);
  afficheVaccin(ctx);
  ctx.translate(160, 280);
  ctx.fillStyle = 'black';
  ctx.font = '90px Shakerato-PERSONAL';
  ctx.fillText('COVIDED', 155, 30);
  ctx.fillStyle = 'red';
  ctx.font = '60px Shakerato-PERSONAL';
  ctx.fillText('You ARE a LOOSER !', 80, 100);
  ctx.restore();
}

/*---------------------------Update du jeu------------------------------*/
function updateJeu() {
  monstre.draw(ctx);
  initSnow();
  updateBalles();
  monstre.move();
  traiteCollisionsJoueurAvecBords();
  // niv fini ?
  if (niveauFini()) {
    etatJeu = "EcranChangementNiveau";
  }
  // partie fini ?
  if (partieFinie()) {
    etatJeu = "GameOver";
  }
}

function niveauFini() {
  return nombreBallesVertes === 0;
}

function partieFinie() {
  return vie <=0;
}
/*---------------------------Niveau suivant------------------------------*/
function niveauSuivant() {
  console.log("NIVEAU SUIVANT");
  niveauCourant++;
  if (niveauCourant % 5) {
    vitesseBalleChercheuse += 0.2;
    vmax +=2;
    vmin +=1;
  }
  creerDesBalles((niveauCourant) * 0.6);
  balleChercheuseImage.resetPos(0, 0);
  etatJeu = "JeuEnCours";
}

/*---------------------------Affichage des ecrans------------------------------*/
function afficheInfoJeu() {
  ctx.save();
  if (niveauCourant !== 0) {
    ctx.fillStyle = "gold";
    ctx.font = "30pt Calibri";
    if (niveauCourant === 1) {
      ctx.fillText("Confinement Level : " + niveauCourant + " month", 400, 40);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.strokeText("Confinement Level : " + niveauCourant + " month", 400, 40);
    }
    else {
      ctx.fillText("Confinement Level : " + niveauCourant + " months", 400, 40);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.strokeText("Confinement Level : " + niveauCourant + " months", 400, 40);
    }
  }
  ctx.restore();
}

/*---------------------------Creation des balles------------------------------*/
function creerDesBalles(nb) {
  let tabCouleurs = ["red", "green"];
  for (let i = 0; i < nb - 1; i++) {
    let b;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let rayInf = 10;
    let raySup = 30;
    let r = randomBetween(rayInf,raySup);
    let indexCouleur = Math.floor(Math.random() * tabCouleurs.length);
    let couleur = tabCouleurs[indexCouleur];
    let vx = -5 + randomBetween(vmin,vmax);
    let vy = -5 + randomBetween(vmin,vmax);
    //on verifie qu'elle ne pop pas sur le joueur
    //creation d'une bounding box de 150*150
    while (
      circRectsOverlap(
        monstre.x,
        monstre.y,
        monstre.l + 150,
        monstre.h + 150,
        x,
        y,
        r
      )) {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
    };
    if (couleur == "green") {
      nombreBallesVertes++;
      b = new BalleAvecVitesseXYImage(x, y, r, couleur, vx, vy, assets.masque);
    }
    else {
      b = new BalleAvecVitesseXYImage(x, y, r, couleur, vx, vy, assets.virus);
    }
    // on ajoute la balle au tableau
    tableauDesBalles.push(b);
  }
  //on creer forcement une verte pour que le niveau 1 ne soit pas uniquement une rouge
  let v;
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let rayInf = 10;
  let raySup = 30;
  let r = rayInf + Math.random() * (raySup - rayInf);
  let couleur = "green";
  let vx = -5 + Math.random() * 10;
  let vy = -5 + Math.random() * 10;
  //on verifie qu'elle ne pop pas sur le joueur
  //creation d'une bounding box de 150*150
  while (
    circRectsOverlap(
      monstre.x,
      monstre.y,
      monstre.l + 150,
      monstre.h + 150,
      x,
      y,
      r
    )) {
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
  };
  nombreBallesVertes++;
  v = new BalleAvecVitesseXYImage(x, y, r, couleur, vx, vy, assets.masque);
  tableauDesBalles.push(v);
  tableauDesBalles.push(balleChercheuseImage);
}
/*---------------------------Update et collision des balles------------------------------*/
function updateBalles() {
  // utilisation d'un itérateur sur le tableau
  tableauDesBalles.forEach((b) => {
    b.draw(ctx);
    traiteCollisionsBalleAvecBords(b);
    traiteCollisionBalleAvecMonstre(b);
    b.move();
  });
}
