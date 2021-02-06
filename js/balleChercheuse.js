class BalleChercheuse extends BalleAvecVitesseEtAngle {
  target = {};
  image;
  constructor(x, y, rayon, couleur,vitesse,image) {
    // constructeur de la classe mère
    super(x, y, rayon, couleur, vitesse, 0);
    this.image =image;
  }
  draw(ctx){
    ctx.save();
    ctx.drawImage(this.image,this.x-this.rayon,this.y-this.rayon,this.rayon*2,this.rayon*2);
    ctx.restore();
  }

  setTarget(x, y) {
    this.target.x = x;
    this.target.y = y;
  }

  resetPos(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceToTarget() {
    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  move() {
    // si aucune cible n'est définie, on ne fait rien
    if (this.target.x === undefined) return;
    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;
    this.angle = Math.atan2(dy, dx);
    if (this.distanceToTarget() < 3) return;
    super.move();
  }
}
