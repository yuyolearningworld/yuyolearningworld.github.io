function subjectpress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    setTimeout(function(){window.location.replace("subjects.html")},2000)  
}

function koikoipress(){
    var koikoi = window.open('koikoi.html', 'KoiKoi','resizable=0,width=1000,height=700')
    koikoi.addEventListener("resize", function(){
        koikoi.resizeTo(1016, 774);
    })
}

function settingspress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forward"
    setTimeout(function(){window.location.replace("settings.html")},2000)
}