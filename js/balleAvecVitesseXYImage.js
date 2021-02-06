class BalleAvecVitesseXYImage extends Balle {
    vitesseX;
    vitesseY;
    image;
  
    constructor(x, y, rayon, couleur, vitesseX, vitesseY, image) {
      super(x, y, rayon, couleur);
      this.rayon = rayon;
      this.vitesseX = vitesseX;
      this.vitesseY = vitesseY;
      this.image = image;
    }
  
    draw(ctx){
        ctx.save();
        ctx.drawImage(this.image,this.x-this.rayon,this.y-this.rayon,this.rayon*2,this.rayon*2);
        ctx.restore();
      }
  
    move() {
      this.x += this.vitesseX;
      this.y += this.vitesseY;
    }
  }