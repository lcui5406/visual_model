class VirusArea{
    constructor(color1, color2, color3){
        this.cx = 100;
        this.cy = 100;
        this.r1 = 30;
        this.r2 = this.r1 + 10;
        this.r3 = this.r2 + 10;
        this.r4 = this.r3 + 10;
        this.color = ["white", color1, color2, color3];
        this.width = 108;
        this.height = 84;
        this.svgElement1;
        this.svgElement2;
        this.svgElement3;
        this.svgElement4;
        this.currentStart = 1;
        this.currentLast = 10;
        this.xStep = 0;
        this.yStep = 0;
        this.stepDuration = 0;
    }
  
    drawVirus(svg){
        
        let temp = makeVirus(this.cx, this.cy, this.width, this.height, this.color, this.r1);
        this.svgElement1 = temp[0];
        this.svgElement2 = temp[1];
        this.svgElement3 = temp[2];
        this.svgElement4 = temp[3];
        svg.append(this.svgElement4);
        svg.append(this.svgElement3);
        svg.append(this.svgElement2);
        svg.append(this.svgElement1);
        console.log(temp);


        // this.svgElement1 = makeVirus(this.cx, this.cy, this.width, this.height, this.color, this.r1);
        // svg.append(this.svgElement1);
    }

    eachDraw(svg) {
        if(this.currentLast != 0) {
            this.currentLast -= 1;
            svg.append(this.svgElement4);
            svg.append(this.svgElement3);
            svg.append(this.svgElement2);
            svg.append(this.svgElement1);
        } else {
            this.currentLast = 10;
            if(this.currentStart == 1) {
                this.svgElement2.setAttribute("fill", this.color[1]);
                this.svgElement3.setAttribute("fill", this.color[2]);
                this.svgElement4.setAttribute("fill", this.color[3]);
            } else if(this.currentStart == 2) {
                this.svgElement2.setAttribute("fill", this.color[2]);
                this.svgElement3.setAttribute("fill", this.color[3]);
                this.svgElement4.setAttribute("fill", this.color[1]);
            } else if(this.currentStart == 3) {
                this.svgElement2.setAttribute("fill", this.color[3]);
                this.svgElement3.setAttribute("fill", this.color[1]);
                this.svgElement4.setAttribute("fill", this.color[2]);
            }


            this.currentStart += 1;
            if(this.currentStart == 4) {
                this.currentStart = 1;
            }
            svg.append(this.svgElement4);
            svg.append(this.svgElement3);
            svg.append(this.svgElement2);
            svg.append(this.svgElement1);
        }


        
    }

  }