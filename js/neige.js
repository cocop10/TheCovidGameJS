/*---------------------------Creer la neige------------------------------*/
function initSnow() {
    let windowW;
    let windowH;
    let numFlakes = 80; //nombre de flocon
    windowW = canvas.width;
    windowH = canvas.height;
    buildFlakes(numFlakes,windowW,windowH);
}

/*---------------------------Creer un flocon------------------------------*/
function Flake(x, y) {
    let maxWeight = 4;
    let maxSpeed = 4;

    this.initialX = x;
    this.x = x;
    this.y = y;
    this.horizontalMovement = randomBetween(-1, 1);

    this.weight = randomBetween(2, maxWeight);
    this.alpha = (this.weight / maxWeight);
    this.speed = this.alpha * maxSpeed;

    this.update = function () {
        this.x += this.horizontalMovement;
        this.y += this.speed;
        if (this.y >= 600) {
            this.y = -this.weight;
            this.x = this.initialX;
        }
    }
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

/*---------------------------Construire les flocons------------------------------*/
function buildFlakes(numFlakes,windowW, windowH) {
    flakes = [];
    for (let i = 0; i < numFlakes; i++) {
        let x = randomBetween(0, windowW);
        let y = randomBetween(0, windowH);
        let flake = new Flake(x, y, windowH);
        flakes.push(flake);
    }

    // draw flakes
    for (let i = 0; i < flakes.length; i++) {
        let flake = flakes[i];
        flake.update();
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.weight, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(127,255,0, ' + flake.alpha + ')';
        ctx.fill();
  }
}

