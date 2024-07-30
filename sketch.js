function setup() {
    // cria uma tela de 400px de largura por 400 px de altura
    createCanvas(400, 400);
     background("pink");
  }
  
  function draw() {
   
    
    stroke("white");
    fill("green");
    
   if (mouseIsPressed) {   
     rect(mouseX, mouseY, 20, 35)
  }
    
  }