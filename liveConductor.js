/*
    title: conductor script
    author: LenaMK 
    date: 2024-09-21
    description:
        - conductor for the evening, organises different scripts for sound-based visualisations
        - MAPP 2024, lab scénographique, 28 septembre 2024
    docs and links:
        - using key codes: https://p5js.org/reference/p5/keyCode/
        - key codes: https://www.toptal.com/developers/keycode
        - quick HSB: https://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html

*/


var mic, fft, spectrum
var alpha
var scene





function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
    angleMode(DEGREES)

    mic = new p5.AudioIn()
    mic.start()

    fft = new p5.FFT(0.8, 16)
    fft.setInput(mic)

    alpha = 1

    scene = 0

}


//in minutes
var reduceTimeMin = 5
var roomTimeMin = 5

//in seconds
var reduceTimeSec = reduceTimeMin * 60 
var roomTimeSec = roomTimeMin * 60 

// 60 frames per second
var reduceTimeFrames = reduceTimeSec * 60 
var roomTimeFrames = roomTimeSec * 60 

//order
var reduceStart = 1
var reduceEnd = reduceStart + reduceTimeFrames

var roomStart = reduceEnd 
var roomEnd = roomStart + roomTimeFrames
var alpha

function mousePressed(){
    console.log(spectrum)
    
}

function keyPressed() {
    if (key === 'r') {
        background(0o0);
    }
    //combine with a black background key for flash effect 
    //when alpha is not false
    if (key === 'f') 
        background('white')

    if (key === '1') {
        setUpVStrips(spectrum)
        scene = 1 
    }
    else if (key === '2'){
        setupCircleFloat()
        scene = 2 
    }
    else if (key === '3') {
        scene = 3 
    }
        
}



function draw() {


    spectrum = fft.analyze();
    
    if (scene == 1){
        
        drawVStrips(spectrum)
    } else if (scene == 2){
        alpha = false
        drawCircleFloat(spectrum, alpha)
    } else if (scene == 3){
        alpha = true
        drawCircleFloat(spectrum, alpha)
    }

  
    //dans l'ordre chronologie
    /*
    if (frameCount == reduceStart){
        console.log("start reduce")
        setUpVStrips(spectrum)
        
    }
    else if (frameCount < reduceEnd){
        angle = 0
        drawVStrips(spectrum, angle)

    }

 if (frameCount == reduceStart){
        console.log("start reduce")
        setupRoom()
        
    }
    else if (frameCount < reduceEnd){
        
        drawRoom()

    }



    if (frameCount == reduceStart){
        console.log("start reduce")
        setupCircleFloat()
        
    }
    else if (frameCount < reduceEnd){
        var alpha = false
        drawCircleFloat(spectrum, alpha)

    }else if (frameCount == roomStart){
        
    }
    else if (frameCount < roomEnd){
        var alpha = true
        drawCircleFloat(spectrum, alpha)
    }
    

    
    else if (frameCount == roomStart){
        
    }
    else if (frameCount < roomEnd){
        var alpha = true
        drawCircleFloat(spectrum, alpha)
    }
    else {
        background(0o0);
        fill(0, 100, 100)

        text("N.D", w/2, h/2)
    }*/
}




