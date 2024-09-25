
var nbLines, lineHeight, width, grow

function setupLines(spectrum){
    nbLines = spectrum.length

    lineHeight = windowHeight / nbLines

    width = windowWidth

    grow = false
}



function drawLines(spectrum){

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

    

    if (grow == false){
        width -=1
        lineHeight -= 0.03
        
    }
    else if (grow == true) {
        width +=1
        lineHeight += 0.03
    }


    if (width == 30){
        grow = true
    }

    if (width == windowWidth){
        grow = false
    }

}