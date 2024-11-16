 window.addEventListener("resize", function(){
     window.resizeTo("416","620")
 })

const albumsongs = [
    ["index1.mp3","Twenty minutes, let me rest"],
    ["index2.mp3","夜桜甘雨"],
    ["index3.mp3","天神 be-bop"],
    ["index4.mp3","Museum in Green"],
    ["index5.mp3","雲仙霧中"],
    ["index6.mp3","Chillin 曽根崎"],
    ["index7.mp3","Sunset like a persimmon"],
    ["index8.mp3","Silent Dancer"],
    ["index9.mp3","Whisper of Rain"],
    ["indexA.mp3","Take the S Line"],
    ["indexB.mp3","Floating Ocean"],
    ["indexC.mp3","Sunrise on the Bell"]
]

document.getElementById("mobileuse_ok").addEventListener("click", function(){
    var click = new Audio('../misc/sounds/click.mp3');
    click.play();
    document.getElementById("mobileuse").style.animationName = "mobilemessagefadeout"
    document.getElementById("mobileuse").style.animationDelay = "0.5s"
    document.getElementById("mobileuse").style.animationDuration = "1s"
    document.getElementById("mobileuse").style.animationFillMode = "forwards"
})

var albumsong
var previousRandom
function setMusic(){
    var random = Math.round(Math.random()*(albumsongs.length-1))
    if(previousRandom == null) {} else {while(random == previousRandom){
        var random = Math.round(Math.random()*(albumsongs.length-1))
    }}
    previousRandom = random
    albumsong = new Audio('../misc/sounds/album/'+ albumsongs[random][0])
    albumsong.volume = 0.5
    document.getElementById("songname").innerHTML = albumsongs[random][1]
}
setMusic()

var playpause = false

setInterval(function(){
    if (albumsong.ended) {
        setMusic()
        albumsong.play()
    }
})

function playpauseFlip(){
    if (playpause == false){
        document.getElementById("playpause").innerHTML = "&#x23F8"
        albumsong.play()
        playpause = true

    } else {
        document.getElementById("playpause").innerHTML = "&#x23F5"
        albumsong.pause()
        playpause = false
    }  
}
document.getElementById("playpause").addEventListener("click",function(){
    playpauseFlip()
    var click = new Audio('../misc/sounds/click.mp3');
    click.play();
})

function newsong(){
    document.getElementById("playpause").innerHTML = "&#x23F5"
    albumsong.pause()
    playpause = false
    setMusic()
}
document.getElementById("newsong").addEventListener("click",function(){
    newsong()
    var click = new Audio('../misc/sounds/click.mp3');
    click.play();
})







