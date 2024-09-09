function subjectpress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "3s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    setTimeout(function(){window.location.replace("subjects.html")},3000)
    
    
}

function koikoipress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "3s"
    document.getElementById("animation_frame").style.animationFillMode = "forward"
    setTimeout(function(){window.location.replace("koikoi.html")},3000)
}

function settingspress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "3s"
    document.getElementById("animation_frame").style.animationFillMode = "forward"
    setTimeout(function(){window.location.replace("settings.html")},3000)
}