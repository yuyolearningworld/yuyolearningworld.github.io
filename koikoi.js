window.addEventListener("resize", function(){
    window.resizeTo(1016, 774);
})

MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
allcards = []
for (i=0; i<MONTHS.length; i++) {
    for (i2=1; i2<5; i2++) {
        allcards.push(MONTHS[i]+String(i2))
    }
}
plains = []
animals = []
ribbons = []
brights = []
function updateImage(id, cardName){
    var current = document.getElementById(id)
    current.src = window.location.href.replace("koikoi.html","") + "cards/" + cardName + ".png"
}

updateImage("cardresult", "Dec2")