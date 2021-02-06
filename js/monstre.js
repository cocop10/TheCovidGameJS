// exemple d'objet litteral
let monstre = {
  x: 50,
  y: 92,
  l: 50,
  h: 92,
  scale: 1,
  incScale: 0,
  angle: 0,
  incAngle: 0,
  vitesseX: 0,
  vitesseY: 0,
  donneTonNom: function () {
    return "Je m'appelle Paul, je suis en x= " + this.x + " y=" + this.y;
  },
  
  draw: function (ctx) {
    ctx.save();
    ctx.drawImage(assets.bonhomme, this.x, this.y)
    ctx.restore();
  }
  ,
  setPos: function (x, y) {
    this.x = x - this.l / 2;
    this.y = y - this.h / 2;
  },
  move: function () {
    this.x += this.vitesseX;
    this.y += this.vitesseY;
    this.angle += this.incAngle;
    this.scale += this.incScale;
    if (this.scale > 2) this.incScale = -this.incScale;
    if (this.scale < 1) this.incScale = -this.incScale;
  },
};



