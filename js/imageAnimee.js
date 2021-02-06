// exemple d'objet litteral
let castex = {
    x: 0,
    y: 0,
    l: 458 * 0.8,
    h: 545 * 0.8,
    scale: 1,
    incScale: 0,
    angle: 0,
    incAngle: 0,
    vitesseX: 0,
    vitesseY: 0,
    draw: function (ctx) {
        ctx.save();
        ctx.translate(-100, 20);
        ctx.drawImage(assets.castex, this.x, this.y, this.l, this.h);
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



// exemple d'objet litteral
let macron = {
    x: 80,
    y: 0,
    l: 408 * 0.4,
    h: 335 * 0.4,
    scale: 1,
    incScale: 0,
    angle: 0,
    incAngle: 0,
    vitesseX: 2,
    vitesseY: 0,
    draw: function (ctx) {
        ctx.save();
        ctx.translate(0, 0);
        ctx.drawImage(assets.macron, this.x, this.y, this.l, this.h);
        ctx.restore();
    }
    ,
    move: function () {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
        this.angle += this.incAngle;
        this.scale += this.incScale;
        if (this.scale > 2) this.incScale = -this.incScale;
        if (this.scale < 1) this.incScale = -this.incScale;

    },
};


// exemple d'objet litteral
let trump = {
    x: 570,
    y: 50,
    l: 428 * 0.6,
    h: 583 * 0.6,
    scale: 1,
    incScale: 0,
    angle: 0,
    incAngle: 0,
    vitesseX: 2,
    vitesseY: 0,
    draw: function (ctx, pourcentage, a, b) {
        ctx.save();
        ctx.translate(a, b);

        ctx.drawImage(assets.trump, this.x, this.y, this.l * pourcentage, this.h * pourcentage);
        ctx.restore();
    }
};

function afficheTrump(ctx){
    let trumpDanceTableau = [
      assets.trump1,
      assets.trump2,
      assets.trump3,
      assets.trump4,
      assets.trump5,
      assets.trump6,
      assets.trump7,
      assets.trump7,
      assets.trump8,
      assets.trump9,
      assets.trump10,
      assets.trump11,
      assets.trump12,
      assets.trump13,
      assets.trump14,
      assets.trump15,
      assets.trump16,
      assets.trump17,
      assets.trump18,
      assets.trump19,
      assets.trump20,
      assets.trump21,
      assets.trump22,
      assets.trump23,
      assets.trump24,
      assets.trump25,
      assets.trump26,
      assets.trump27,
      assets.trump28,
      assets.trump29,
      assets.trump30,
      assets.trump31,
      assets.trump32

  ];
  drawAnimatedImage(trumpDanceTableau,710,400,0,1,60,ctx);
  }

  function afficheVaccin(ctx){
    let vaccinTableau = [
      assets.vaccin1,
      assets.vaccin2,
      assets.vaccin3,
      assets.vaccin4,
      assets.vaccin5,
      assets.vaccin6,
      assets.vaccin7,
      assets.vaccin7,
      assets.vaccin8,
      assets.vaccin9,
      assets.vaccin10,
      assets.vaccin11,
      assets.vaccin12,
      assets.vaccin13,
      assets.vaccin14,
      assets.vaccin15,
      assets.vaccin16,
      assets.vaccin17,
      assets.vaccin18,
      assets.vaccin19,
      assets.vaccin20,
      assets.vaccin21,
      assets.vaccin22,
      assets.vaccin23,
      assets.vaccin24,
      assets.vaccin25,
      assets.vaccin26,
      assets.vaccin27,
      assets.vaccin28,
      assets.vaccin29,
      assets.vaccin30,
      assets.vaccin31,
      assets.vaccin32

  ];
  drawAnimatedImage(vaccinTableau,150,140,0,0.5,60,ctx);
  drawAnimatedImage(vaccinTableau,450,140,0,0.5,60,ctx);
  drawAnimatedImage(vaccinTableau,750,140,0,0.5,60,ctx);
  }

/*---------------------------Creer un GIF------------------------------*/
function drawAnimatedImage(arr,x,y,angle,factor,changespeed,ctx) {
    if (!factor) {
        factor = 1;
    }
    if (!changespeed) {
        changespeed = 1;
    }
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);
    if (!!arr[Math.round(Date.now()/changespeed) % arr.length]) {
    ctx.drawImage(arr[Math.round(Date.now()/changespeed) % arr.length], -(arr[Math.round(Date.now()/changespeed) % arr.length].width * factor / 2), -(arr[Math.round(Date.now()/changespeed) % arr.length].height * factor / 2), arr[Math.round(Date.now()/changespeed) % arr.length].width * factor, arr[Math.round(Date.now()/changespeed) % arr.length].height * factor);
    }
    ctx.restore();
}

/*---------------------------Afficher aléatoirement------------------------------*/
function drawTrump(ctx){
    let x = -600 + Math.random() * canvas.width;
    let y = -200 + Math.random() * canvas.height;
    trump.draw(ctx,0.5,x,y);
   }