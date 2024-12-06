if (window.localStorage.length == 0){
    window.localStorage.setItem("darkmode", "0")
}
function darklight(){
    document.getElementById("darkmode").style.transition = "opacity 1s"
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
        document.getElementById("darkmode").style.transition = ""
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
    } else {document.getElementById("darkmode").style.transition = ""}
},100)
