/*
    title: room
    author: LenaMK
    date: 2024-09-12
    description:

*/

var topLeft, topRight, bottomLeft, bottomRight

var varX, varY
var boxMargin = 50
function setupRoom() { 
   
    topLeft = {x: windowWidth/4, y: windowHeight/4}
    topRight = {x: windowWidth/4*3, y: windowHeight/4}
    bottomLeft = {x: windowWidth/4, y: windowHeight/4*3}
    bottomRight = {x: windowWidth/4*3, y: windowHeight/4*3}
    
    varX = 0
    varY = 0 
} 


/*
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
*/

function drawRoom(spectrum) {   

    background('black'); 

    //get spectrum from fft analysis
    //spectrum = fft.analyze()
    var colorFromSpectrum = map(spectrum[0], 0, 255, 0, 360)
        fill(colorFromSpectrum, 200, 100)
        stroke(colorFromSpectrum, 200, 100)
    
    beginShape()     
        vertex(0, 0)
        vertex(topLeft.x, topLeft.y)
        vertex(bottomLeft.x, bottomLeft.y)
        vertex(0, windowHeight)
        vertex(0,0)
    endShape()

    colorFromSpectrum = map(spectrum[4], 0, 255, 0, 360)
    fill(colorFromSpectrum, 200, 100)
    stroke(colorFromSpectrum, 200, 100)

    beginShape()        
        vertex(windowWidth, 0)
        vertex(topRight.x, topRight.y)
        vertex(bottomRight.x, bottomRight.y)
        vertex(windowWidth, windowHeight)
        vertex(windowWidth, 0)
    endShape()
    
    

} 


/*
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

*/