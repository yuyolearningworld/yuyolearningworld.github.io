function logopress(){
    var click = new Audio('../misc/sounds/click.mp3');
    var main = new Audio('../misc/sounds/ylw.mp3');
    click.play()
    setTimeout(function(){
        main.play()
    },500)
}

function subjectpress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    var click = new Audio('../misc/sounds/click.mp3');
    click.play();
    setTimeout(function(){
        window.location.replace("subjects.html")
    },2000)  
}

function koikoipress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    var click = new Audio('../misc/sounds/click.mp3');
    click.play();
    setTimeout(function(){
        window.location.replace("koikoi.html")
    },2000) 
}

var musicwindow
function musicpress(){
    if (musicwindow == null) {} else {
        if (musicwindow.name != "") {
            musicwindow.focus()
            return
        }
    }
    var y = window.screen.height
    var x = window.screen.width
    setTimeout(function(){
        musicwindow = window.open("music.html", "yuyo Music Player", `height=550px, width=400px, top=${(y-500)/2}, left=${(x-350)/2}`)
    },100)
    var click = new Audio('../misc/sounds/click.mp3');
    click.play();
}











