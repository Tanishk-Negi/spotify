console.log("Welcome to spotify");
let audioElement=new Audio('Zayn_-_Allah_Duhai_Hai_Cover_.mp3');
let playPauseButton=document.getElementById("playPauseBtn");
let progressBar=document.getElementById("myProgressBar");

let songs=[{songName:"Allah_Duhai_Hai",filePath:"songsList/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Allah_Duhai_Hai",filePath:"songsList/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Allah_Duhai_Hai",filePath:"songsList/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Allah_Duhai_Hai",filePath:"songsList/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Allah_Duhai_Hai",filePath:"songsList/1.mp3",coverPath:"covers/1.jpg"}
]




// Step 1. Play /Pause functionality
function togglePlayPause()
{
    console.log("Play/Pause button clicked");
    if(audioElement.paused)
    {
       audioElement.play();
      
    }
    else{
       audioElement.pause();
       
    }
}

playPauseButton.addEventListener("click",togglePlayPause);



//Step 2. update seekbar

audioElement.addEventListener("timeupdate", ()=>{
        let progress=(audioElement.currentTime/audioElement.duration)*100;
        progressBar.value=progress;
})


// Step 3.move seekbar with song

progressBar.addEventListener("input",()=>{
    let updateCurrent=(progressBar.value/100)* audioElement.duration;
    audioElement.currentTime=updateCurrent;
})
