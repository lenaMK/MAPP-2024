




var stairHeight, space, minHeight, maxHeight

var minWidth, maxWidth, growSize, stairWidth

var stairStartTime, angle
var nbFrames = 10


function setupStairs () {
    console.log("setup Stairs")
    maxWidth = windowWidth
    minWidth = 10
    minHeight = windowHeight/3 //from top to bottom
    maxHeight = windowHeight
    stairHeight = 20
    space = 30

    rectMode(CENTER)
    stairStartTime = frameCount
    stairsColor = random(0, 360)
    background('black')

}


function drawStairs(){
    background(0o0)
    
    fill('white')

    if (keyIsDown(DOWN_ARROW) === true) {
        translate(windowWidth, windowHeight)
        rotate(180)
        console.log("rotate")
        
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        translate(windowWidth/5*3, -windowHeight/3)
        rotate(90)
        
        console.log("rotate")

    }
    if (keyIsDown(LEFT_ARROW) === true) {

        translate(-450, windowHeight/2-100)
        rotate(-42)
        console.log("rotate")

    }

    nbStairs = 16

    growSize = (maxWidth-minWidth)/(nbStairs-2)
    console.log("grow Size", growSize)
    stairWidth = minWidth

    for (var i = nbStairs; i > 0; i-- ){

        var rectX = windowWidth/2
        var rectY = maxHeight - (stairHeight+space)*i
        var rectWidth = stairWidth
        var rectHeight = stairHeight-i

        var time = frameCount-stairStartTime
        var current = parseInt(time/nbFrames)
        if (current > nbStairs){
            stairStartTime = frameCount
            stairsColor = random(0, 360)
            current = 0
        }
        
        if (i == current){
            stroke('black')
            fill(stairsColor, 200, 100)
            rect(rectX, rectY, rectWidth, rectHeight)
        }
        


        stairWidth += growSize

    }


}


/*






function drawStairs1(){
    console.log("start Stairs")

    fill('white')

    nbStairs = (maxHeight - minHeight)/(stairHeight+space)
    console.log("nb stairs", nbStairs)

    growSize = (maxWidth-minWidth)/(nbStairs-2)
    console.log("grow Size", growSize)
    stairWidth = minWidth

    for (var i = 1; i <= nbStairs; i++ ){

        //(x, y, width, height)

        var rectX = windowWidth/2
        var rectY = minHeight + (stairHeight+space)*i
        var rectWidth = stairWidth
        var rectHeight = stairHeight

        console.log("draw ", i)
        rect(rectX, rectY, rectWidth, rectHeight)


        stairWidth += growSize

    }


}*/


