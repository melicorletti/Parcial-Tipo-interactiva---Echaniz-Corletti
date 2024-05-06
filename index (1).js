let colorHole;
let colorLetter = "#ffffff"
let colorcuadrado1;
let colorValue = 'black'
let texto = "CONTRASTE"
let myInput;
let sliderAnchoLetra;
let sliderTamanoLetra; // Agregamos esta variable para el slider de tamaño de letra
let checkbox;
let font;
let fillShapes = true;
let colorDrawBajada;
let titileoActivo = false; 


function preload() {
  font = loadFont('Copia de Raleway-Regular.ttf');
}

function updateCheckboxTextColors() {
  if (checkbox.checked()) {
    checkbox.elt.nextElementSibling.style.color = '#ffffff';
  } else {
    checkbox.elt.nextElementSibling.style.color = '#000000'; 
  }
}


function updateBackgroundColor() {
  if (checkbox.checked()) {
    background(0);
    fill(255);
    colorLetter = "#ffffff";
    colorcuadrado1 = "#FE4003";
    colorHole = 0;
    checkbox.elt.style.color = '#ffffff';
    colorDrawBajada = "#FE4003";
    titileoCheckbox.elt.style.color = '#ffffff';
    
  } else {
    background(255);
    fill(0);
    colorLetter = "#000000";
    colorcuadrado1 = '#0029ff';
    colorHole = 255;
    checkbox.elt.style.color = '#000000';
    colorDrawBajada = "#0029ff";
    titileoCheckbox.elt.style.color = '#000000';
  }
  updateCheckboxTextColors();
  

}

function setup() {
  
  fill('deeppink');
  textFont(font);
  textSize(36);
  text('p5*js', 10, 50);

  createCanvas(1680, 850)
  myInput = createInput("CONTRASTE")
  myInput.position(100, 265)
  myInput.addClass('myInput')

  // checkbox cambio de color
  checkbox = createCheckbox('   modo oscuro', false);
  checkbox.position(840, 40);
  checkbox.changed(updateBackgroundColor);
  checkbox.style('font-family', 'Raleway, sans-serif');

  // slider ancho de letras
  sliderAnchoLetra = createSlider(120, 160);
  sliderAnchoLetra.position(100, 320);
  sliderAnchoLetra.size(100);

  // Nuevo slider para controlar el tamaño de las letras
  sliderTamanoLetra = createSlider(10, 72, 36); // Rango de tamaño de letra: mínimo 10, máximo 72, valor inicial 36
  sliderTamanoLetra.position(100, 370); // Posición del slider
  sliderTamanoLetra.size(100); // Tamaño del slider

  titileoCheckbox = createCheckbox(' modo intermitente', false);
  titileoCheckbox.position(1000, 40);
  titileoCheckbox.style('font-family', 'Raleway, sans-serif');
  titileoCheckbox.changed(function() {
    titileoActivo = this.checked();
  });
}

function draw() {

  let anchoLetra = sliderAnchoLetra.value();
  let tamanoLetra = sliderTamanoLetra.value();

  updateBackgroundColor ();

  texto = myInput.value()
  
  let x = 100
  let y = 100


  
  for (let letra of texto.toUpperCase()) {
    textSize(tamanoLetra);
    if (letra == 'C') { 
    drawLetterC(x, y)
    } else if (letra == 'O') {
    drawLetterO(x,y)
    } else if (letra == 'N') {
    drawLetterN(x, y)
    } else if (letra == 'T') {
    drawLetterT(x, y)
    }else if (letra == 'R') {
    drawLetterR(x, y)
    }else if (letra == 'A') {
    drawLetterA(x, y)
    }else if (letra == 'S') {
    drawLetterS(x, y)
    }else if (letra == 'E') {
    drawLetterE(x, y)
    }else if (letra == 'B') {
    drawLetterB (x, y)
    }else if (letra == 'D') {
    drawLetterD (x, y)
    }else if (letra == 'F') {
    drawLetterF (x, y)
    }else if (letra == 'G'){
    drawLetterG (x, y)
    }else if (letra == 'H') {
    drawLetterH (x, y)
    } else if (letra =='I'){
    drawLetterI (x, y)
    } else if (letra == 'J'){
    drawLetterJ (x, y)
    } else if (letra == 'K'){
    drawLetterK (x, y)
    } else if (letra == 'L'){
    drawLetterL (x, y)
    } else if (letra== 'M'){
    drawLetterM (x, y)
    } else if (letra == 'P'){
      drawLetterP (x, y)
    } else if (letra == 'Q') {
      drawLetterQ (x, y)
    } else if (letra == 'U'){
      drawLetterU (x, y)
    } else if (letra == 'V'){
      drawLetterV (x, y)
    } else if (letra == 'W'){
      drawLetterW (x, y)
    }else if (letra == 'X'){
      drawLetterX (x, y)
    }else if (letra == 'Y'){
      drawLetterY (x, y)
    }else if (letra == 'Z'){
      drawLetterZ (x, y)
    }

    x = x + anchoLetra
  }
  
  drawBajada(100, 0);

  if (titileoActivo && frameCount % 60 < 30) {
    drawCuadrado1(8, 761);
    drawCuadrado2(97, 672);
    drawCuadrado1(185, 584);
    drawCuadrado1(97, 496);
    drawCuadrado2(361, 497);
    drawCuadrado2(9, 408);
    drawCuadrado1(538, 497);
    drawCuadrado1(626, 585);
    drawCuadrado1(802, 760);
    drawCuadrado2(802, 409);
    drawCuadrado1(1594, 409);
    drawCuadrado2(1594, 761);
    drawCuadrado1(1242, 761);
    drawCuadrado2(1418, 585);
    drawCuadrado2(1330, 409);
    drawCuadrado2(1154, 409);
  }

  if (titileoActivo && frameCount % 70 < 40) {
    drawCuadrado4(8, 584);
    drawCuadrado3(273, 585);
    drawCuadrado4(450, 760);
    drawCuadrado3(538, 671);
    drawCuadrado4(450, 408);
    drawCuadrado4(714, 497);
    drawCuadrado4(890, 498);
    drawCuadrado3(978, 498);
    drawCuadrado4(1154, 672);
    drawCuadrado3(1506, 497);
    drawCuadrado4(1242, 497);
  }

  if (titileoActivo && frameCount % 80 < 50) {
    drawCuadrado6(185, 672);
    drawCuadrado5(273, 497);
    drawCuadrado5(97, 408);
    drawCuadrado6(538, 583);
    drawCuadrado5(361, 672);
    drawCuadrado6(714, 585);
    drawCuadrado5(714, 760);
    drawCuadrado6(802, 672);
    drawCuadrado5(714, 409);
    drawCuadrado6(1067, 585);
    drawCuadrado6(1067, 760);
    drawCuadrado5(1506, 673);
    drawCuadrado5(874, 672);
    drawCuadrado6(1418, 761);
    drawCuadrado6(1594, 497);
    drawCuadrado5(1330, 585);
    drawCuadrado5(1418, 409);
    drawCuadrado6(1242, 585);
  }

  else {
    drawCuadrado1(8, 761);
    drawCuadrado2(97, 672);
    drawCuadrado1(185, 584);
    drawCuadrado1(97, 496);
    drawCuadrado2(361, 497);
    drawCuadrado2(9, 408);
    drawCuadrado1(538, 497);
    drawCuadrado1(626, 585);
    drawCuadrado1(802, 760);
    drawCuadrado2(802, 409);
    drawCuadrado1(1594, 409);
    drawCuadrado2(1594, 761);
    drawCuadrado1(1242, 761);
    drawCuadrado2(1418, 585);
    drawCuadrado2(1330, 409);
    drawCuadrado2(1154, 409);

    drawCuadrado4(8, 584);
    drawCuadrado3(273, 585);
    drawCuadrado4(450, 760);
    drawCuadrado3(538, 671);
    drawCuadrado4(450, 408);
    drawCuadrado4(714, 497);
    drawCuadrado4(890, 498);
    drawCuadrado3(978, 498);
    drawCuadrado4(1154, 672);
    drawCuadrado3(1506, 497);
    drawCuadrado4(1242, 497);

    drawCuadrado6(185, 672);
    drawCuadrado5(273, 497);
    drawCuadrado5(97, 408);
    drawCuadrado6(538, 583);
    drawCuadrado5(361, 672);
    drawCuadrado6(714, 585);
    drawCuadrado5(714, 760);
    drawCuadrado6(802, 672);
    drawCuadrado5(714, 409);
    drawCuadrado6(1067, 585);
    drawCuadrado6(1067, 760);
    drawCuadrado5(1506, 673);
    drawCuadrado5(874, 672);
    drawCuadrado6(1418, 761);
    drawCuadrado6(1594, 497);
    drawCuadrado5(1330, 585);
    drawCuadrado5(1418, 409);
    drawCuadrado6(1242, 585);
  }
  
}

function keyPressed() {
  texto = texto.concat(key);
  console.log(texto);
}

function drawBajada(x, y) {
  translate(x, 220);
  textSize(17); // Tamaño del texto
  fill(colorDrawBajada); // Color del texto
  textAlign(LEFT); // Alineación del texto
  text('Generación de una diferencia a partir del choque entre lo rígido y fluido de la forma, y lo claro y oscuro en cuanto a lo cromático.', 0, 10.3);
}

function drawCuadrado1 (x,y){
push()
stroke('rgba(0,0,0,0)')
strokeCap(PROJECT);
strokeJoin(MITER);
fill(colorcuadrado1)
strokeWeight(1)
translate(x, y)
scale(1.5, 1.5)
beginShape();
vertex(33.98,58.86);
vertex(33.98,43.81);
bezierVertex(33.98,39.040000000000006,30.109999999999996,35.17,25.339999999999996,35.17);
vertex(25.339999999999996,35.17);
bezierVertex(20.569999999999997,35.17,16.699999999999996,39.04,16.699999999999996,43.81);
vertex(16.699999999999996,51.32);
bezierVertex(16.699999999999996,55.480000000000004,13.319999999999997,58.86,9.159999999999997,58.86);
vertex(0,58.86);
bezierVertex(0,58.86,0,0,0,0);
vertex(58.86,0);
vertex(58.86,58.86);
vertex(33.980000000000004,58.86);
endShape();
pop()

}

function drawCuadrado2 (x,y) {
push()
stroke('rgba(0,0,0,0)')
strokeCap(PROJECT);
strokeJoin(MITER);
fill(colorcuadrado1)
strokeWeight(1)
translate (x,y)
scale(1.5, 1.5)
beginShape();
vertex(42.17,0);
vertex(0,0);
vertex(0,18.63);
vertex(29.18,18.63);
bezierVertex(35.32,18.63,40.26,23.75,39.97,29.96);
bezierVertex(39.699999999999996,35.77,34.69,40.24,28.869999999999997,40.24);
vertex(0,40.24);
bezierVertex(0,40.24,0,58.86,0,58.86);
vertex(58.86,58.86);
vertex(58.86,0);
vertex(42.17,0);
endShape();
pop()

}

function drawCuadrado3 (x,y) {
  push()
  stroke('rgba(0,0,0,0)')
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(colorcuadrado1)
  strokeWeight(1)
  translate (x,y)
  scale(1.5, 1.5)
  beginShape();
  vertex(35.99,58.87);
  bezierVertex(31.810000000000002,58.87,28.42,55.48,28.42,51.3);
  vertex(28.42,36.129999999999995);
  bezierVertex(28.42,31.939999999999994,25.020000000000003,28.539999999999996,20.830000000000002,28.539999999999996);
  vertex(12.210000000000003,28.539999999999996);
  bezierVertex(12.210000000000003,28.539999999999996,12.210000000000003,58.86999999999999,12.210000000000003,58.86999999999999);
  vertex(0,58.86999999999999);
  bezierVertex(0,58.86999999999999,0,0,0,0);
  vertex(58.86,0);
  bezierVertex(58.86,0,58.86,58.86,58.86,58.86);
  vertex(35.989999999999995,58.86);
  endShape()
  pop ()
  
}

function drawCuadrado4 (x,y) {
  push()
  stroke('rgba(0,0,0,0)')
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(colorcuadrado1)
  strokeWeight(1)
  translate (x,y)
  scale(1.5,1.5)
  beginShape();
  vertex(0.26,0);
  vertex(0,0);
  vertex(0,58.86);
  vertex(14.29,58.86);
  vertex(14.29,33.989999999999995);
  bezierVertex(14.29,29.819999999999993,17.669999999999998,26.439999999999994,21.84,26.439999999999994);
  vertex(21.84,51.25999999999999);
  bezierVertex(21.84,55.44999999999999,25.24,58.85999999999999,29.439999999999998,58.85999999999999);
  vertex(58.87,58.85999999999999);
  vertex(58.87,0);
  vertex(0.26,0);
  endShape();
  pop()
  
}

function drawCuadrado5 (x,y) {
push()
stroke('rgba(0,0,0,0)')
strokeCap(PROJECT);
strokeJoin(MITER);
fill(colorcuadrado1)
strokeWeight(1)
translate (x,y)
scale(1.5,1.5)
beginShape();
vertex(16.69,58.86);
vertex(58.86,58.86);
vertex(58.86,40.230000000000004);
vertex(29.68,40.230000000000004);
bezierVertex(23.54,40.230000000000004,18.6,35.11000000000001,18.89,28.900000000000006);
bezierVertex(19.16,23.090000000000007,24.17,18.620000000000005,29.990000000000002,18.620000000000005);
vertex(58.86,18.620000000000005);
bezierVertex(58.86,18.620000000000005,58.86,-0.009999999999994458,58.86,-0.009999999999994458);
vertex(0,-0.009999999999994458);
vertex(0,58.85000000000001);
vertex(16.69,58.85000000000001);
endShape();
pop()
}
function drawCuadrado6(x,y) {
push()
stroke('rgba(0,0,0,0)')
strokeCap(PROJECT);
strokeJoin(MITER);
fill(colorcuadrado1)
strokeWeight(1)
translate (x,y)
scale(1.5,1.5)
beginShape();
vertex(33.98,0);
vertex(33.98,15.05);
bezierVertex(33.98,19.82,30.109999999999996,23.69,25.339999999999996,23.69);
vertex(25.339999999999996,23.69);
bezierVertex(20.569999999999997,23.69,16.699999999999996,19.82,16.699999999999996,15.05);
vertex(16.699999999999996,7.540000000000001);
bezierVertex(16.7,3.38,13.32,0,9.16,0);
vertex(0,0);
bezierVertex(0,0,0,58.86,0,58.86);
vertex(58.86,58.86);
bezierVertex(58.86,58.86,58.86,0,58.86,0);
vertex(33.980000000000004,0);
endShape();
pop()
}