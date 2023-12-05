class Particle {
    constructor(xPos, yPos, radius, color) {
        //'status' represents whether this person is infected
        //0 -> healthy, 1 -> becoming infected, 2 -> complete infected, 4 -> dead.
        this.infectedTimes = 0;
        this.status = 0;
        this.statusLastDuration = 0;
        this.x = xPos;
        this.y = yPos;
        this.r = radius;
        this.colorBar = ["white", "yellow", "red", "black"]
        this.color = "white";
        if(color != null) {
            this.color = color;
            this.x = -100;
            this.y = -100;
        }
        this.svgElement;
        this.xStep = 0;
        this.yStep = 0;
        this.stepDuration = 0;
        this.flashDuration = 0;
        this.closeToInfected = 0;
        this.infectedTimes = 0;
        this.vaccination = 0;
        this.vaccinationLine = 0;
        this.mousePosX = 0;
        this.mousePosY = 0;
        this.mouseLineDuration = 0;
        this.deathCount = 0.01;
        this.opacity = 1;
    }

    drawParticle(svg) {
        this.svgElement = makeCircle(this.x, this.y, this.r, this.setRGBColor(this.color));
        svg.appendChild(this.svgElement);
    }

    statusChange() {
        if (this.statusLastDuration <= 0) {
            if (this.status == 0) {
                let randomNumber = randomNum(0, 1);
                if (randomNumber < Math.min((0.2+this.vaccination*0.25) + this.infectedTimes*(0.2-this.vaccination*0.3), 0.55)) {
                    this.infectedTimes += 1;
                    this.status = 1;
                    this.statusLastDuration = Math.abs(randomNum(10,140))*10;
                    this.svgElement.setAttribute("fill", this.setRGBColor("yellow"));
                } else if(randomNumber < Math.max((0.8-this.vaccination*0.35) - this.infectedTimes*(0.2-this.vaccination*0.1), 0.2)) {
                    this.infectedTimes += 1;
                    this.status = 2;
                    this.statusLastDuration = 70;
                    this.svgElement.setAttribute("fill", this.setRGBColor("red"));
                } else {
                    this.status = 0;
                }
            } else if (this.status == 1) {
                let randomNumber = randomNum(0, 1);
                if (randomNumber < Math.max((0.9-this.vaccination*0.3) - this.infectedTimes*0.2, 0.1)) {
                    this.status = 0;
                    this.statusLastDuration = 140;
                    this.svgElement.setAttribute("fill", this.setRGBColor("white"));
                } else {
                    this.status = 2;
                    this.statusLastDuration = 70;
                    this.svgElement.setAttribute("fill", this.setRGBColor("red"));
                }
            } else if (this.status == 2) {
                let randomNumber = randomNum(0, 1);
                if (randomNumber < Math.min((0.2+this.vaccination*0.4) + this.infectedTimes*0.5, 0.95)) {
                    this.status = 0;
                    this.statusLastDuration = 300;
                    this.svgElement.setAttribute("fill", this.setRGBColor("white"));
                } else {
                    this.status = 3;
                    this.statusLastDuration = 0;
                    this.svgElement.setAttribute("fill", this.setRGBColor("black"));
                }
            }
            this.color = this.colorBar[this.status];
        }
    }

    setRGBColor(color) {
        if(color == "white") {
            return "#FAF3F2";
        } else if(color == "yellow") {
            return "#e4f190";
        } else if(color == "red") {
            return "#d17b7d";
        } else if(color == "black") {
            return "#7b8caa";
        }
    }



}