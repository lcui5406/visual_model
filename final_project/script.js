let particles = [];
let virusArea = [];
let virusOrigin = null;
let width = window.innerWidth;
let height = window.innerHeight;
const svg = document.getElementById("svg-canvas");
let lineList = new Array();
let count = 0;
let virusCount = 0;
define_color1 = document.getElementById('myGradient');
define_color2 = document.getElementById('color2');
define_color3 = document.getElementById('color3');
let numCount = 0;
let synth = new Tone.Synth().toDestination();
let now;
let text4 = document.getElementById("text4");
let text3 = document.getElementById("text3");
let text5 = document.getElementById("text5");
let text6 = document.getElementById("text6");
let text7 = document.getElementById("text7");
let text8 = document.getElementById("text8");
let text9 = document.getElementById("text9");
let text10 = document.getElementById("text10");
let text11 = document.getElementById("text11");
let text12 = document.getElementById("text12");
let colorCount = 0;
let colorStatus = 1;
text4.setAttribute("x", width/2 - 150);
text4.setAttribute("y", height/2 - 120);
text3.setAttribute("x", 20);
text3.setAttribute("y", height - 130);
text5.setAttribute("x", 20);
text5.setAttribute("y", height - 115);
text6.setAttribute("x", 20);
text6.setAttribute("y", (height) - 100);
text7.setAttribute("x", 20);
text7.setAttribute("y", (height) - 85);
text8.setAttribute("x", 20);
text8.setAttribute("y", (height) - 70);
text9.setAttribute("x", 20);
text9.setAttribute("y", (height) - 55);
text10.setAttribute("x", 20);
text10.setAttribute("y", (height) - 40);
text11.setAttribute("x", 20);
text11.setAttribute("y", (height) - 25);
text12.setAttribute("x", 20);
text12.setAttribute("y", (height) - 10);
text4.setAttribute("opacity", 0.4);
text3.setAttribute("opacity", 0.4);
text5.setAttribute("opacity", 0.4);
text6.setAttribute("opacity", 0.4);
text7.setAttribute("opacity", 0.4);
text8.setAttribute("opacity", 0.4);
text9.setAttribute("opacity", 0.4);
text10.setAttribute("opacity", 0.4);
text11.setAttribute("opacity", 0.4);
text12.setAttribute("opacity", 0.4);

//console.log(color1);
//console.log(define_color1);
// va[0] = [1,2];
// console.log(va[0]);
// console.log(va.length);
// va[1] = 2;
// console.log(va[1]);
// console.log(va.length);
// va[2] = 3;
// va.splice(1,1);
// console.log(va[0][1]);

const player = new Tone.Player("./this.mp3").toDestination();
player.loop = true;
Tone.loaded().then(() => {
	player.start();
  now = Tone.now();
  Tone.start();
});


/*This part is to draw the picture
  in each ms.*/
setInterval(() => {
  console.log(particles.length);
  numCount = 0;
  //console.log(lineList.length);
  // console.log(svg);
  // lineList.forEach(l => {
  //   if(l != undefined) {
  //     svg.remove(l[2]);
  //     count -= 1;
  //   }
  // })
  // console.log(svg);
  svg.replaceChildren()
  if(colorCount == 0) {
    colorCount = 9;
    if(colorStatus == 1) {
      colorStatus = 2;
      text4.setAttribute("fill", "#FFE5CA");
    } else if(colorStatus == 2) {
      colorStatus = 3;
      text4.setAttribute("fill", "#FA9884 ");
    } else if(colorStatus == 3) {
      colorStatus = 4;
      text4.setAttribute("fill", "#E74646");
    } else if(colorStatus == 4) {
      colorStatus = 1;
      text4.setAttribute("fill", "#FF0303");
    }
  } else {
    colorCount -= 1;
  }
  svg.appendChild(text4);
  svg.appendChild(text3);
  svg.appendChild(text5);
  svg.appendChild(text6);
  svg.appendChild(text7);
  svg.appendChild(text8);
  svg.appendChild(text9);
  svg.appendChild(text10);
  svg.appendChild(text11);
  svg.appendChild(text12);
  if(virusOrigin != null) {
    //virusOrigin.x += 1;
    //virusOrigin.svgElement1.setAttribute("x", virusOrigin.x);
    // if(virusCount == 0) {
    //   virusOrigin.svgElement.setAttribute("width", 108);
    //   virusOrigin.svgElement.setAttribute("height", 84);
    //   virusCount += 1;
    // } else {
    //   virusOrigin.svgElement.setAttribute("width", 84);
    //   virusOrigin.svgElement.setAttribute("height", 108);
    //   virusCount = 0;
    // }
    //console.log(virusOrigin.currentLast);
    if(virusOrigin.statusLastDuration > 0) {
      virusOrigin.statusLastDuration -= 1;
    }

    if (virusOrigin.stepDuration == 0) {
      virusOrigin.xStep = randomNum(-1, 1);
      virusOrigin.yStep = randomNum(-1, 1);
      virusOrigin.stepDuration = Math.round(randomNum(200,300));
    } else {
      virusOrigin.stepDuration -= 1;
    }
    if(virusOrigin.cx + virusOrigin.xStep - virusOrigin.r1 - 60 < 0 || virusOrigin.cx + virusOrigin.xStep + virusOrigin.r1 + 60 > width) {
      virusOrigin.xStep = randomNum(-1, 1);
      virusOrigin.yStep = randomNum(-1, 1);
      virusOrigin.stepDuration = Math.round(randomNum(200,300));
    }
    if(virusOrigin.cy + virusOrigin.yStep - virusOrigin.r1 - 60 < 0 || virusOrigin.cy + virusOrigin.yStep + virusOrigin.r1 + 60 > height) {
      virusOrigin.xStep = randomNum(-1, 1);
      virusOrigin.yStep = randomNum(-1, 1);
      virusOrigin.stepDuration = Math.round(randomNum(200,300));
    }
    virusOrigin.cx += virusOrigin.xStep;
    virusOrigin.cy += virusOrigin.yStep;
    virusOrigin.svgElement2.setAttribute("cx", virusOrigin.cx);
    virusOrigin.svgElement2.setAttribute("cy", virusOrigin.cy);
    virusOrigin.svgElement3.setAttribute("cx", virusOrigin.cx);
    virusOrigin.svgElement3.setAttribute("cy", virusOrigin.cy);
    virusOrigin.svgElement4.setAttribute("cx", virusOrigin.cx);
    virusOrigin.svgElement4.setAttribute("cy", virusOrigin.cy);



    if(virusOrigin.currentLast != 0) {
      virusOrigin.svgElement1.setAttribute("opacity", 0);
      virusOrigin.currentLast -= 1;
      svg.append(virusOrigin.svgElement4);
      svg.append(virusOrigin.svgElement3);
      svg.append(virusOrigin.svgElement2);
    } else {
      virusOrigin.currentLast = 10;
      if(virusOrigin.currentStart == 1) {
          
          virusOrigin.svgElement2.setAttribute("fill", "url(#color1)");
          virusOrigin.svgElement3.setAttribute("fill", "url(#color2)");
          virusOrigin.svgElement4.setAttribute("fill", "url(#color3)");
      } else if(virusOrigin.currentStart == 2) {
          virusOrigin.svgElement2.setAttribute("fill", "url(#color2)");
          virusOrigin.svgElement3.setAttribute("fill", "url(#color3)");
          virusOrigin.svgElement4.setAttribute("fill", "url(#color1)");
      } else if(virusOrigin.currentStart == 3) {
          virusOrigin.svgElement2.setAttribute("fill", "url(#color3)");
          virusOrigin.svgElement3.setAttribute("fill", "url(#color1)");
          virusOrigin.svgElement4.setAttribute("fill", "url(#color2)");
      }
      virusOrigin.currentStart += 1;
      if(virusOrigin.currentStart == 4) {
        virusOrigin.currentStart = 1;
      }
      


      

      svg.append(virusOrigin.svgElement4);
      svg.append(virusOrigin.svgElement3);
      svg.append(virusOrigin.svgElement2);
    }
    // virusOrigin.eachDraw(svg);
    // svg.appendChild(virusOrigin.svgElement4);
    // svg.appendChild(virusOrigin.svgElement3);
    // svg.appendChild(virusOrigin.svgElement2);
    // svg.appendChild(virusOrigin.svgElement1);
  }
  count = 0;
  particles.forEach(p => {
    if(p != null) {
      svg.appendChild(p.svgElement);
      if(p.vaccinationLine == 1) {
        let tempLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        tempLine.setAttribute("x1", p.x);
        tempLine.setAttribute("y1", p.y);
        tempLine.setAttribute("x2", p.mousePosX);
        tempLine.setAttribute("y2", p.mousePosY);
        tempLine.setAttribute("stroke", "#859C43");
        svg.append(tempLine);
        p.mouseLineDuration -= 1;
        if(p.mouseLineDuration == 0) {
          p.vaccinationLine = 0;
        }
      }




      if(p.status != 3) {
        if(p.status != 0) {
          p.statusChange();
          if(p.status != 3) {
            for(i = 0; i < particles.length; i++) {
              if((Math.abs(p.x-particles[i].x)+Math.abs(p.y-particles[i].y) <= 150) && particles[i].status != 3) {
                let tempLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
                tempLength = (101 - (Math.abs(p.x-particles[i].x)+Math.abs(p.y-particles[i].y)))/90;
                //console.log(tempLength);
                tempLine.setAttribute("x1", p.x);
                tempLine.setAttribute("y1", p.y);
                tempLine.setAttribute("x2", particles[i].x);
                tempLine.setAttribute("y2", particles[i].y);
                tempLine.setAttribute("stroke", "#FAF3F2");
                tempLine.setAttribute("opacity", tempLength);
                svg.append(tempLine);
                lineList[count] = [[p.x, p.y],[particles[i].x, particles[i].y],tempLine];
                count += 1;
              }
            }
          }
        } else {
          //situation of status = 0 -> close to a infected people more than 10s will be infected
          let exist = 0
          for(i = 0; i < particles.length; i++) {
            if((Math.abs(p.x-particles[i].x)+Math.abs(p.y-particles[i].y) <= 150) && particles[i].status != 3) {
              let a = randomNum(0,2);
              let tempLength;
              let tempLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
              
              tempLine.setAttribute("x1", p.x);
              tempLine.setAttribute("y1", p.y);
              tempLine.setAttribute("x2", particles[i].x);
              tempLine.setAttribute("y2", particles[i].y);
              tempLine.setAttribute("stroke", "#FAF3F2");
              svg.append(tempLine);
              lineList[count] = [[p.x, p.y],[particles[i].x, particles[i].y],tempLine];
              count += 1;
              if((particles[i].status == 1 || particles[i].status == 2)) {
                tempLine.setAttribute("stroke", "#e89792");
                exist = 1;
              }
            }
          }

          if(exist == 1) {
            p.closeToInfected += 1;
            if(p.closeToInfected == 10) {
              p.statusChange();
              p.closeToInfected = 0;
            }
          } else {
            p.closeToInfected = 0;
          }
        }




        if(p.statusLastDuration > 0) {
          p.statusLastDuration -= 1;
        }
    
        if (p.stepDuration == 0) { //自由移动的情况
          p.xStep = randomNum(-0.5, 0.5);
          p.yStep = randomNum(-0.5, 0.5);
          p.stepDuration = Math.round(randomNum(0,100));
        } else {
          p.stepDuration -= 1;
        }
        if(p.x + p.xStep + p.r < 0 || p.x + p.xStep + p.r > width) {
          p.xStep *= -1;
        }
        if(p.y + p.yStep + p.r < 0 || p.y + p.yStep + p.r > height) {
          p.yStep *= -1;
        }
        p.x += p.xStep;
        p.y += p.yStep;
        p.svgElement.setAttribute("cx", p.x);
        p.svgElement.setAttribute("cy", p.y);
        
        
        if(virusOrigin != null) {
          if(Math.sqrt(Math.pow(p.x - virusOrigin.cx, 2) + Math.pow(p.y - virusOrigin.cy, 2)) <= virusOrigin.r1 + 60) {
            if(p.status == 0) {
              p.statusChange();
              console.log("change status")
            }
          }
        }
      } else {
        p.x += p.deathCount;
        p.opacity *= 0.989;
        p.svgElement.setAttribute("cx", p.x);
        p.svgElement.setAttribute("opacity", p.opacity);
        p.deathCount *= 1.03;
        if(p.x > width * 2) {
          particles.splice(numCount, 1);
          numCount -= 1;
          let cxx = randomNum(0, width);
          let cyy = randomNum(0, height);
          let tempPar = new Particle(cxx, cyy, width * 0.004);
          particles.push(tempPar);
          tempPar.drawParticle(svg)
          
        }
      }
    }
    numCount += 1;
  })





  // virusArea.forEach(v => {
    
  //   if (v.flashDuration > 0) {
  //     v.flashing(width);
  //     v.svgElement.setAttribute("r", v.r);
  //     //console.log(v.r);
  //   } else {
  //     v.svgElement.setAttribute("r", width*0.0015);
  //     //svg.appendChild(v.svgElement);
  //     //console.log(v.r);
  //   }
  // })
}, 30);


/*This part is the actions after
  the mouse click event.*/

document.addEventListener("click", function (e) {
  now = Tone.now();
  synth.triggerAttackRelease("C3", "8n", now)
  synth.triggerAttackRelease("C4", "8n", now + 0.1)
  synth.triggerAttackRelease("C5", "8n", now + 0.2)

  console.log("123123");
  console.log(e.clientX);
  console.log(e.clientY);
  particles.forEach(p => {
    console.log(111);
    if (Math.abs(e.clientX - p.x) + Math.abs(e.clientY - p.y) < 130) {
      if(p.status != 3) {
        console.log(123);
        p.svgElement.setAttribute("stroke-width", "2");
        p.svgElement.setAttribute("stroke", "#CD7F32");
        p.vaccination = 1;
        p.vaccinationLine = 1;
        p.mousePosX = e.clientX;
        p.mousePosY = e.clientY;
        p.mouseLineDuration = 30;
      }
    }
  })
})


/*This part monitor the move of
  mouse and the actions corresponding
  with mouse.*/
function mousePosition(ev){
  return {
    x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
    y:ev.clientY + document.body.scrollTop - document.body.clientTop
  };
}
document.onmousemove = mouseMove;
function mouseMove(ev){
  ev = ev || window.event;
  x = mousePosition(ev).x;
  y = mousePosition(ev).y;
  let i = -5;
  let j = -5;
  virusArea.forEach(v => {
    v.svgElement.setAttribute("cx", x + i*10);
    v.svgElement.setAttribute("cy", y + j*10);
    j += 1
    if(j == 5) {
      j = -5;
      i += 1;
    }
  })
  particles.forEach(p => {
    if (Math.abs(x - p.x) + Math.abs(y - p.y) < 100 ) {
      p.stepDuration = Math.trunc((100 - (Math.abs(x - p.x) + Math.abs(y - p.y)))*10);
      p.xStep = (p.x-x)/100 * 0.5;
      p.yStep = (p.y-y)/100 * 0.5;
    }
  })
}

/*Function to create an
  array of person*/
function createParticlesArray(num, color, size, width, height) {
  let particleInstances = [];
  for (let i = 0; i < num; i++) {
    let particleX = randomNum(0, width);
    let particleY = randomNum(0, height);
    let particleSize;
    if (size == null) {
      particleSize = width * 0.004;
    } else {
      particleSize = size;
    }

    if (color == "green") {
      particleInstances.push(new Particle(particleX, particleY, particleSize, color));
    } else {
      particleInstances.push(new Particle(particleX, particleY, particleSize));
    }
    
  }
  return particleInstances;
}


// function readTextFile(fileName){
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", fileName, false);
//   console.log(11111);
//   rawFile.onreadystatechange = function(){
//       console.log(22222);
//       if(rawFile.readyState === 4){
//           if(rawFile.status === 200 || rawFile.status == 0){
//               var allText = rawFile.responseText;
//               alert(allText);
//               console.log(allText);
//           }
//       }
//   }
// }

// readTextFile("http://localhost/temp.txt");


// const request = new XMLHttpRequest();
// request.open("GET","https://api.pexels.com/v1/curated");
// request.send();
// request.onload = () => {
//     console.log(request);
//     if(request.status == 200){
//         console.log(JSON.parse(request.response));
//     }else{
//         console.log(`error ${request.status}`)
//     }
// }

// const requestUrl = "url of whatever you want to make a request to";
// fetch(requestUrl).then(response => response.json()).then(data => {console.log(data)})


/*This is the start
  of the main func.*/
function main(){
  console.log(111);
  
  console.log(svg);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  // svg.setAttribute("style", "background-color: #81D8D0");
  particles = createParticlesArray(160, "", null, width, height);
  virusArea = createParticlesArray(100, "green", width*0.0015, width, height);

  virusOrigin = new VirusArea("url(#color1)", "url(#color2)", "url(#color3)");
  virusOrigin.drawVirus(svg);


  for (let particle of particles) {
    particle.drawParticle(svg);
  }

  for (let vir of virusArea) {
    vir.drawParticle(svg);
  }
  now = Tone.now();
}
