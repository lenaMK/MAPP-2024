/*
    title: conductor script
    author: LenaMK 
    date: 2024-09-21
    description:
        - conductor for the evening, organises different scripts for sound-based visualisations
        - MAPP 2024, lab scénographique, 28 septembre 2024

*/


var mic, fft, spectrum






function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);

    mic = new p5.AudioIn()
    mic.start()

    fft = new p5.FFT(0.8, 16)
    fft.setInput(mic)

}


//in minutes
var reduceTimeMin = 5
var roomTimeMin = 0.5

//in seconds
var reduceTimeSec = reduceTimeMin * 60 
var roomTimeSec = reduceTimeMin * 60 

// 60 frames per second
var reduceTimeFrames = reduceTimeSec * 60 
var roomTimeFrames = roomTimeSec * 60 

//order
var reduceStart = 1
var reduceEnd = reduceStart + reduceTimeFrames

var roomStart = reduceEnd 
var roomEnd = roomStart + roomTimeFrames


function mousePressed(){
    console.log(spectrum)
}

function draw() {


    spectrum = fft.analyze();

    //dans l'ordre chronologie
    
    if (frameCount == reduceStart){
        console.log("start reduce")
        setupCircleFloat()
        
    }
    else if (frameCount < reduceEnd){
        drawCircleFloat(spectrum)

    }

    /*
    else if (frameCount == roomStart){
        console.log("start room")
        setupRoom()
    }
    else if (frameCount < roomEnd){
        drawRoom()
    }
    else {
        background(0o0);
        fill(0, 100, 100)

        text("N.D", w/2, h/2)
    }*/
}




