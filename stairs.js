




var stairHeight, space, minHeight, maxHeight

var minWidth, maxWidth, growSize, stairWidth



function setupStairs () {
    console.log("setup Stairs")
    maxWidth = windowWidth
    minWidth = 10

    minHeight = windowHeight/3 //from top to bottom
    maxHeight = windowHeight

    stairHeight = 20

    space = 30

    rectMode(CENTER)

}


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


}



function drawStairs2(){
    console.log("start Stairs")

    fill('white')

    nbStairs = 16

    growSize = (maxWidth-minWidth)/(nbStairs-2)
    console.log("grow Size", growSize)
    stairWidth = minWidth

    for (var i = nbStairs; i > 0; i-- ){

        //(x, y, width, height)

        var rectX = windowWidth/2
        var rectY = maxHeight - (stairHeight+space)*i
        var rectWidth = stairWidth
        var rectHeight = stairHeight-i

        console.log("draw ", i)
        rect(rectX, rectY, rectWidth, rectHeight)


        stairWidth += growSize

    }


}