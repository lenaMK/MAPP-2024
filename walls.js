var barWidth



function setupWalls(){
    background('black')
    angle = atan(windowWidth / windowHeight)
    shapeSpeed = 100
    barWidth = 40
    diff = 25

}


function drawWalls(spectrum){

    /*locationX = windowWidth * noise(shapeSpeed * frameCount) 
    locationY = height * noise(shapeSpeed * frameCount)
    */
    //translate(locationX, locationY)
    
    var nbStripes = spectrum.length
    for (var i = 1; i <= nbStripes; i ++){
        console.log(i)
        var x1 = barWidth*i*2 
        var y1 = (barWidth-diff)*i*2
    
        var height = windowHeight-(x1*2)
        
        push()
            translate(x1, y1)
            
            beginShape()
                vertex(0, 0)
                fill(spectrum[i], 200, 100)
                vertex(barWidth, barWidth)
                vertex(barWidth, height-barWidth)
                vertex(0, height)
            endShape()    
    
        pop()

    }
    
    

}