function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}
function draw() {
 
  background(0);  //背景顏色
  
  
 noFill()//不充滿顏色
  // stroke("#a6b1e1")  //線條顏色
  
  rectMode(CENTER)
  
      for(var j=-1;j<int(height/(50));j++)
  {
    for(var i=-1;i<int(width/(50));i++)
    {
      stroke("#282096")
        ellipse(25+(i*50),25+(j*50),mouseX/25)
        stroke("#247ba0")
        rect(25+(i*50),25+(j*50),mouseX/25)
        stroke("#fb3640") 
        ellipse(50+(i*50),50+(j*50),mouseX/25) 
        stroke("#f7fe72") 
        ellipse(50+(i*50),0+(j*50),mouseX/25) 
        ellipse(25+(i*50),0+(j*50),mouseX/25) 
        ellipse(25+(i*50),25+(j*50),mouseX/25) 
        ellipse(0+(i*50),25+(j*50),mouseX/25) 
        ellipse(0+(i*50),50+(j*50),mouseX/25) 
        
    }    
  }

}