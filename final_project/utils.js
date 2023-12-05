function randomNum(lower, upper) {
  let num = lower + Math.random()*(upper-lower);
  return num;
}

function makeCircle(x, y, radius, color) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", radius);
  circle.setAttribute("fill", color);
  return circle;
}

function makeVirus(x, y, width, height, color, r) {
  let tempList = new Array();
  let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle1.setAttribute("cx", x);
  circle1.setAttribute("cy", y);
  circle1.setAttribute("r", r);
  circle1.setAttribute("fill", color[0]);
  tempList[0] = circle1;
  let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle2.setAttribute("cx", x);
  circle2.setAttribute("cy", y);
  circle2.setAttribute("r", r+20);
  circle2.setAttribute("fill", color[1]);
  tempList[1] = circle2;
  let circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle3.setAttribute("cx", x);
  circle3.setAttribute("cy", y);
  circle3.setAttribute("r", r+40);
  circle3.setAttribute("fill", color[2]);
  tempList[2] = circle3;
  let circle4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle4.setAttribute("cx", x);
  circle4.setAttribute("cy", y);
  circle4.setAttribute("r", r+60);
  circle4.setAttribute("fill", color[3]);
  tempList[3] = circle4;
  return tempList;


  let rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rectangle.setAttribute("x", x);
  rectangle.setAttribute("y", y);
  rectangle.setAttribute("width", width);
  rectangle.setAttribute("height", height);
  rectangle.setAttribute("fill", "red");
  return rectangle;
}