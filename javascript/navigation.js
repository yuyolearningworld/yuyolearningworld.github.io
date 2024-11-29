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

/*////////////////////////////////////
///////// Dark mode changer //////////
////////////////////////////////////*/

if (window.localStorage.length == 0){
    window.localStorage.setItem("darkmode", "0")
}
function darklight(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    setTimeout(function(){
        if (window.localStorage.getItem("darkmode") == 1) {
            window.localStorage.setItem("darkmode", "0")
        } else {
            window.localStorage.setItem("darkmode", "1")
        }
        
        if (document.getElementById("darkmode").style.opacity == 1){
            document.getElementById("darklight").setAttribute("src", "../misc/assets/lightmode.png")
        } else {
            document.getElementById("darklight").setAttribute("src", "../misc/assets/darkmode.png")
        }

    },1500)
    setTimeout(function(){
        document.getElementById("animation_frame").style.animationName = "pagechange_right"
        document.getElementById("animation_frame").style.animationDuration = "2s"
        document.getElementById("animation_frame").style.animationFillMode = "forwards"
    },2400)
}

setInterval(function(){
    if (window.localStorage.getItem("darkmode") == 0){
        document.getElementById("darkmode").style.opacity = 0
        document.body.style.cursor = "url('../misc/assets/cursor.png'), default";
        try{ document.getElementById("darklight").setAttribute("src", "../misc/assets/darkmode.png")}catch(err){}
    } 
    else if (window.localStorage.getItem("darkmode") == 1) {
        document.getElementById("darkmode").style.opacity = 1
        document.body.style.cursor = "url('../misc/assets/cursor-darkmode.png'), default";
        try{ document.getElementById("darklight").setAttribute("src", "../misc/assets/lightmode.png")}catch(err){}
    }
},100)










