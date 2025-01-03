console.log("Welcome to spotify");
let audioElement=new Audio();
let progressBar=document.getElementById("myProgressBar");
let masterPlay=document.getElementById("masterPlay");
let songItem= Array.from(document.getElementsByClassName("songItem"));  //collection of html elements
let songItemPlayButtons=Array.from(document.getElementsByClassName("songItemPlay"));


let songs=[{songName:"Allah_Duhai_Hai",filePath:"1.mp3",coverPath:"covers/1.webp"},
    {songName:"Dusk_Till_Dawn",filePath:"2.mp3",coverPath:"covers/2.webp"},
    {songName:"Vibez",filePath:"3.mp3",coverPath:"covers/3.webp"},
    {songName:"Entertainer",filePath:"4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Pillowtalk",filePath:"5.mp3",coverPath:"covers/5.jpg"}
]



// Step 1. Play /Pause functionality
function togglePlayPause()
{
    console.log("Play/Pause button clicked");
    if(audioElement.paused)
    {
       audioElement.play();
       masterPlay.classList.remove("fa-solid fa-play");
       masterPlay.classList.add("fa-solid fa-pause");
    }
    else{
       audioElement.pause(); 
       masterPlay.classList.remove("fa-solid fa-pause");
       masterPlay.classList.add("fa-solid fa-play");   
    }
}

masterPlay.addEventListener("click",togglePlayPause);


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


// step 4: include all songs

songItem.forEach((element,i)=>{
    let songName=element.getElementsByClassName("songName")[0];
 
    songName.innerText=songs[i].songName;
   

});

// step 5: play songs 

songItemPlayButtons.forEach((button,index)=>
{
    button.addEventListener("click",()=>
    {
        audioElement.src=songs[index].filePath;
        audioElement.play();
        
    });
});
