
var nbLines, lineHeight, width, grow
var maxWidth, angle

function setupLines(spectrum){
    nbLines = spectrum.length

    lineHeight = windowHeight / nbLines

    
    maxWidth = windowWidth/3*2
    width = maxWidth
    grow = false

    angle = 0
}



function drawLines(spectrum){

    if (keyIsDown(DOWN_ARROW) === true) {

        translate(windowWidth, windowHeight)
        rotate(180)
        console.log("rotate")
        
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        
        if (angle < 75 )
            angle +=1
        else
            angle = -75

        rotate(angle)
        
        console.log("rotate")

    }
    if (keyIsDown(LEFT_ARROW) === true) {

        translate(-50, windowHeight/2)
        rotate(-42)
        console.log("rotate")

    }

    if (keyIsDown(BACKSPACE) === true){
        width = maxWidth
        grow = false
        lineHeight = windowHeight / nbLines
    }

    background(0o0); 

    var totalHeight = lineHeight * nbLines/2
    translate(0, totalHeight/2)


    for (i = 0; i < nbLines; i++){

        

        var moveUp = map(spectrum[i], 0, 255, 1, 55)

        var colorFromSpectrum = map(spectrum[i], 0, 255, 0, 360)
        stroke(colorFromSpectrum, 200, 100)
        strokeWeight(3)

        var diff = windowWidth - width
        var start = diff/2
        var end = windowWidth - diff/2

        line(start, lineHeight*i+moveUp, end, lineHeight*i+moveUp)

    }

    


    if (width == 30){
        grow = true
    }

    if (width == maxWidth){
        grow = false
    }



    if (grow == false){
        width -=1
        lineHeight -= 0.03
        
    }
    else if (grow == true) {
        width +=1
        lineHeight += 0.03
    }

}