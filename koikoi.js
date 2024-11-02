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

// catagories
plains = ["Jan1","Jan2","Feb1","Feb2","Mar1","Mar2","Apr1","Apr2","May1","May2","Jun1","Jun2","Jul1","Jul2","Aug1","Aug2","Sep1","Sep2","Oct1","Oct2","Nov1","Dec1","Dec2","Dec3"]
animals = ["Feb4","Apr4","Jun4","Jul4","Aug3","Sep4","Oct4","Nov3"]
ribbons = ["Jan3","Feb3","Mar3","Apr3","May3","Jun3","Jul3","Sep3", "Oct3","Nov2"]
brights = ["Jan4","Mar4","Aug4","Nov4","Dec4"]

// sets
/*

Gokō (五光) – Five Brights – 10 points

Shikō (四光) – “Dry” Four Brights – 8 points

Ame-Shikō (雨四光) – Rainy Four Brights – 7 points

Sankō (三光) – “Dry” Three Brights – 6 points

Ino-shika-chō (猪鹿蝶) – Boar, Deer, Butterfly – 5 points
1 additional point awarded for each extra ‘Animal’ card

Tane (タネ) – Seeds (Five Animals) – 1 point
1 additional point awarded for each extra ‘Animal’ card

Akatan, Aotan no Chōfuku (赤短・青短の重複) – 3 Poetry Ribbons + 3 Blue Ribbons – 10 points
1 additional point awarded for each extra ‘Ribbon’ card

Akatan (赤短) – 3 Poetry Ribbons – 5 points
1 additional point awarded for each extra ‘Ribbon’ card

Aotan (青短) – 3 Blue Ribbons – 5 points
1 additional point awarded for each extra ‘Ribbon’ card

Tanzaku (短冊) – 5 Ribbons – 1 point
1 additional point awarded for each extra ‘Ribbon’ card

Kasu (カス) – 10 Dregs – 1 point
1 additional point awarded for each extra ‘Dregs’ card

*/
function updateImage(id, cardName){
    var current = document.getElementById(id)
    current.src = window.location.href.replace("koikoi.html","") + "cards/" + cardName + ".png"
}

updateImage("cardresult", "Dec2")