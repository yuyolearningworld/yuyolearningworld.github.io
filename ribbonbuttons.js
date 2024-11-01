function subjectpress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    setTimeout(function(){window.location.replace("subjects.html")},2000)  
}

function koikoipress(){
    var w = 1000
    var h = 700
    var koikoi = window.open('koikoi.html', 'KoiKoi','resizable=0,width='+w+',height='+h+'')
    koikoi.addEventListener("resize", () => {
        koikoi.resizeTo(w, h);
    })

}

function settingspress(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forward"
    setTimeout(function(){window.location.replace("settings.html")},2000)
}