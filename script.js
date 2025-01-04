console.log("Welcome to spotify");
let audioElement=new Audio();
let progressBar=document.getElementById("myProgressBar");
let masterPlay=document.getElementById("masterPlay");
let songItem= Array.from(document.getElementsByClassName("songItem"));  //collection of html elements
let songItemPlayButtons=Array.from(document.getElementsByClassName("songItemPlay"));
let currentIndex=0;
let masterSongName=document.getElementById("masterSongName");


let songs=[{songName:"Allah_Duhai_Hai",filePath:"1.mp3",coverPath:"c1.webp"},
    {songName:"Dusk_Till_Dawn",filePath:"2.mp3",coverPath:"c2.webp"},
    {songName:"Vibez",filePath:"3.mp3",coverPath:"c3.webp"},
    {songName:"Entertainer",filePath:"4.mp3",coverPath:"c4.jpg"},
    {songName:"Star_Dust",filePath:"8.mp3",coverPath:"c5.jpg"},
    {songName:"Fingers",filePath:"6.mp3",coverPath:"c1.webp"},
    {songName:"Let_me",filePath:"7.mp3",coverPath:"c3.webp"}
]


// Step 1. Play /Pause functionality
function togglePlayPause()
{
    console.log("Play/Pause button clicked");
    if(audioElement.paused)
    {
       audioElement.play();
       this.classList.remove("fa-solid"," fa-play");
     //  this.classList.add("fa-solid fa-pause");
    }
    else{
       audioElement.pause(); 
       this.classList.remove("fa-solid"," fa-pause");
     //  this.classList.add("fa-solid fa-play");   
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
    let songCover=element.getElementsByTagName("img")[0];
    songName.innerText=songs[i].songName;
    songCover.src=songs[i].coverPath;

});

// step 5: play songs 

songItemPlayButtons.forEach((button,index)=>
{
    button.addEventListener("click",()=>
    {
        currentIndex=index;
        audioElement.src=songs[index].filePath;
        audioElement.load();
        masterSongName.innerText=songs[index].songName;
        if(audioElement.paused)
        {
        audioElement.play();
        }
        else{
            audioElement.pause();
        }
        
    });
});


// step 6:play previous and next songs

document.getElementById("next").addEventListener("click",()=>{
    if(currentIndex >= songs.length-1)
    {
        currentIndex=0;
        
    }
    else{
       currentIndex=currentIndex+1;
    }
    audioElement.src=songs[currentIndex].filePath;
    masterSongName.innerText=songs[currentIndex].songName;

    if(audioElement.paused)
    {
        audioElement.play();
    }
    masterPlay.classList.remove("fa-solid fa-pause");
    masterPlay.classList.add("fa-solid fa-play");
    
})


document.getElementById("previous").addEventListener("click",()=>{
    if(currentIndex<=0)
    {
        currentIndex=songs.length-1;
    }
    else{
        currentIndex=currentIndex-1;
    }
    audioElement.src=songs[currentIndex].filePath;
    masterSongName.innerText=songs[currentIndex].songName;
    if(audioElement.paused)
    {
        audioElement.play();
    }
    masterPlay.classList.remove("fa-solid fa-pause");
    masterPlay.classList.add("fa-solid fa-play");
    
})





