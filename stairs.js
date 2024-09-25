




var stairHeight, space, minHeight, maxHeight

var minWidth, maxWidth, growSize, stairWidth



function setupStairs () {
    console.log("setup Stairs")
    maxWidth = windowWidth
    minWidth = 100

    minHeight = windowHeight/3 //from top to bottom
    maxHeight = windowHeight

    stairHeight = 50

    space = 30

    rectMode(CENTER)

}


function drawStairs(){
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


}