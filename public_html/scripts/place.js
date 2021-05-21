function setup() {
  
    drawGrid = true
    
    pixels = {
      X:15,
      Y:10
    }
    
    
    
    size = {
      X:0,
      Y:0
    }
    
    if (windowHeight * pixels.Y < windowWidth * pixels.X)
    {size = {X: windowWidth, Y:windowHeight * pixels.Y / pixels.X}} else
    {size = {X: windowWidth * pixels.X / pixels.Y, Y:windowHeight }}
    
    createCanvas(size.X, size.Y);
    
    
    
    checkbox = createCheckbox('Grid', true);
    checkbox.changed(ChangeGridState);
  }
  
  
  function ChangeGridState(){
    drawGrid = this.checked()
  }
  
  
  function createGrid(){
    
    
    var gridStep = {
      X:width / pixels.X,
      Y:height / pixels.Y
    }
    
    
    
    stroke(220);
    
    
    //Y
    for (i = 1; i < pixels.Y; i++) {
  
      line(0, i * gridStep.Y, width, i * gridStep.Y)
      
    }
    
    //X
    for (i = 1; i < pixels.X; i++) {
      
      line(i * gridStep.X, 0, i * gridStep.X, height)
      
    }
    
  }
  
  
  function draw() {
    background(50);
    
    if(drawGrid){createGrid()}
  }