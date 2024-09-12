/*
    title: room
    author: LenaMK & lab scénographique MAPP 2024
    date: 2024-09-12
    description:

*/

var mic, fft, spectrum
var topLeft, topRight, bottomLeft, bottomRight

var varX, varY
var boxMargin = 50
function setup() { 
    colorMode(HSB, 360, 100, 100, 250);
    createCanvas(windowWidth, windowHeight); 
    angleMode(DEGREES)
   
    //set mic source
    mic = new p5.AudioIn()
    mic.start()
    playing = true
 
    fft = new p5.FFT(0.9, 128)  
    fft.setInput(mic)

    topLeft = {x: windowWidth/4, y: windowHeight/4}
    topRight = {x: windowWidth/4*3, y: windowHeight/4}
    bottomLeft = {x: windowWidth/4, y: windowHeight/4*3}
    bottomRight = {x: windowWidth/4*3, y: windowHeight/4*3}
    
    varX = 0
    varY = 0 
    frameRate(30);
} 



function drawRoomLines(){
    
    stroke('white')

    //pageTopLeft to topLeft
    line(0, 0, topLeft.x, topLeft.y)
    //pageTopRight to topRight
    line(windowWidth, 0, topRight.x, topRight.y)
    //pageBottomLeft to bottomLeft
    line(0, windowHeight, bottomLeft.x, bottomLeft.y)
    //pageBottomRight to bottomRight
    line(windowWidth, windowHeight, bottomRight.x, bottomRight.y)

    //topLeft to topRight
    line(topLeft.x, topLeft.y, topRight.x, topRight.y)
    //bottomLeft to bottomRight
    line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y)
    //topLeft to bottomLeft
    line(topLeft.x, topLeft.y, bottomLeft.x, bottomLeft.y)
    //topRight to bottomRight
    line(topRight.x, topRight.y, bottomRight.x, bottomRight.y)
}

function drawVerticalLines(){
    stroke('white')

    var drawLeft = 20 
    while(drawLeft < topLeft.x){

    }
}




function draw() {   

    background(0o0); 

    //get spectrum from fft analysis
    //spectrum = fft.analyze()
    sound = mic.getLevel()*13


    var randomMove = random([0, 1, 2, 3, 4])
    console.log(randomMove)
    //if(randomMove = 0) stay  

    varX += sound
    varY += sound

    if (randomMove == 0){
        //go up
        
        if(topLeft.y > boxMargin){
            topLeft.y -= varY
            topRight.y -= varY
            bottomLeft.y -= varY
            bottomRight.y -= varY
        }
    }
    else if (randomMove == 1){
        //go right

        if(topRight.x < (windowWidth - boxMargin)){
            topLeft.x += varX
            topRight.x += varX
            bottomLeft.x += varX
            bottomRight.x += varX
        }
    } 
    else if (randomMove == 2){
        //go down
        if(bottomRight.y < (windowHeight-boxMargin)){
            topLeft.y += varY
            topRight.y += varY
            bottomLeft.y += varY
            bottomRight.y += varY
        }    
    } else if (randomMove == 3){
        //go left
        if (topLeft.x > boxMargin){  
            topLeft.x -= varX
            topRight.x -= varX
            bottomLeft.x -= varX
            bottomRight.x -= varX
        }
    } 


    fill('white')

    drawRoomLines();

    //text(String(spectrum), windowWidth-250, windowHeight-50)
    //text(String(mic.getLevel()*1000), windowWidth-250, windowHeight-80)

    
} 


