MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var all_playable_cards = []
for (var i=0; i<MONTHS.length; i++) {
    for (i2=1; i2<5; i2++) {
        all_playable_cards.push(MONTHS[i]+String(i2))
    }
}

// catagories
PLAINS = ["Jan1","Jan2","Feb1","Feb2","Mar1","Mar2","Apr1","Apr2","May1","May2","Jun1","Jun2","Jul1","Jul2","Aug1","Aug2","Sep1","Sep2","Oct1","Oct2","Nov1","Dec1","Dec2","Dec3"]
ANIMALS = ["Feb4","Apr4","May4","Jun4","Jul4","Aug3","Sep4","Oct4","Nov3"]
RIBBONS = ["Jan3","Feb3","Mar3","Apr3","May3","Jun3","Jul3","Sep3", "Oct3","Nov2"]
BRIGHTS = ["Jan4","Mar4","Aug4","Nov4","Dec4"]

setInterval(function(){
    if (document.getElementById("fullscreen")){
        if (screen.height != window.innerHeight || screen.width != window.innerWidth) {
            document.getElementById("fullscreen").style.visibility = "visible"
            document.getElementById("fullscreentext").style.visibility = "visible"
        } else {
            document.getElementById("fullscreen").style.visibility = "hidden"
            document.getElementById("fullscreentext").style.visibility = "hidden"
        }
    }
    try{
        var totalinvertcard = [
        document.getElementsByClassName("yourcards"),
        document.getElementsByClassName("card"),
        document.getElementsByClassName("setcards"), 
        document.getElementById("card1"), 
        document.getElementById("card2"), 
        document.getElementById("card3")]
    totalinvertcard.forEach(function(value){
        for (i=0; i<value.length; i++){
            if (document.getElementById("darkmode")){
                if (document.getElementById("darkmode").style.opacity == 1) {
                    value.item(i).style.webkitFilter = "invert(100%)"
                    value.item(i).style.Filter = "progid:DXImageTransform.Microsoft.BasicImage(invert='1');"
                    document.getElementById("card1").style.webkitFilter = "invert(100%)"
                    document.getElementById("card2").style.webkitFilter = "invert(100%)"
                    document.getElementById("card3").style.webkitFilter = "invert(100%)"
                    document.getElementById("card1").style.Filter = "progid:DXImageTransform.Microsoft.BasicImage(invert='1');"
                    document.getElementById("card2").style.Filter = "progid:DXImageTransform.Microsoft.BasicImage(invert='1');"
                    document.getElementById("card3").style.Filter = "progid:DXImageTransform.Microsoft.BasicImage(invert='1');"
                    document.getElementById("yuyohand").style.webkitFilter = "invert(100%)"
                    document.getElementById("yuyohand").style.Filter = "progid:DXImageTransform.Microsoft.BasicImage(invert='1');"
                } else {
                    value.item(i).style.webkitFilter = ""
                    value.item(i).style.Filter = ""
                    document.getElementById("card1").style.webkitFilter = ""
                    document.getElementById("card2").style.webkitFilter = ""
                    document.getElementById("card3").style.webkitFilter = ""
                    document.getElementById("card1").style.Filter = ""
                    document.getElementById("card2").style.Filter = ""
                    document.getElementById("card3").style.Filter = ""
                    document.getElementById("yuyohand").style.webkitFilter = ""
                    document.getElementById("yuyohand").style.Filter = ""
                }   
                }else{}
            }
        })
    }catch(err){}
}, 1)

//player 2 is yuyo
var player1cards = []
var player1sets = {
    "plains":  [],
    "animals": [],
    "ribbons": [],
    "brights": []
}

var player2cards = []
var player2sets = {
    "plains":  [],
    "animals": [],
    "ribbons": [],
    "brights": []
}
var table = [[null,null,null,null,null,null,null,null,null],
             [null,null,null,null,null,null,null,null,null]]

function addImage(element, carddir){ //adds card image to html img element
    var current = document.getElementById(element)
    current.style.outline = "1px solid #0e0e0e"
    current.src = window.location.href.replace("index.html","") + carddir
}
function removeImage(element){ //sets html img element to nocard.png
    var current = document.getElementById(element)
    current.style.outline = "1px solid #d8d8d8"
    current.src = window.location.href.replace("index.html","") + cardURL("nocard")
}

function getRandomcard(){ //picks a card.png file dir at random and returns it
    index = Math.round(Math.random()*(all_playable_cards.length-1))
    return all_playable_cards[index]
} 

function cardURL(card){ //input name of card and returns with url to access it
    return `misc/cards/${card}.png`
}
function REVERSEcardURL(src){ //input name of card and returns with url to access it
    src = src.replace(`${window.location.protocol}//${window.location.host}/misc/cards/`,"")
    src = src.replace(".png","")
    return src
}

var current_clicked
var previous_clicked
function elementclick(id){ //updates current_clicked var with clickable element and sets old to previously clicked 
    previous_clicked = current_clicked
    current_clicked = id
    if (previous_clicked == id && current_clicked == id){
        current_clicked = id
        previous_clicked = null
    }
    checkCards(current_clicked,previous_clicked)
}


function flipAnimation(){  //runs the complete animation for the flip
    document.getElementById("cardresult").style.animation = "flip 1s linear 0s 1 normal forwards running"
    document.getElementById("cardback").style.animation = "backflip 1s linear 0s 1 normal forwards running"
}
function setDeck(){
    while(all_playable_cards.includes(card) == false){
        var card = getRandomcard()
    }
    removeCardfromPlay(card)
    document.getElementById("cardresult").src = cardURL(card)
}

function flipReset(){
    document.getElementById("cardresult").style.animation = "reset 1s linear 0s 1 normal forwards running"
    setDeck()
}

function removeCardfromPlay(card){ //removes the inputted card for the list of cards that can be used in the game
    ArrayRemoveItem(all_playable_cards,card)
    
}

function ArrayRemoveItem(array ,item){
    index = array.indexOf(item)

    if (index !== -1) {
        array.splice(index, 1)
    }
}

function addToHand(card, player_array , player_num){ //adds card image dir inputed to a free space in your hand
    var cardurl = cardURL(card)
    if (player_array.length >= 16){return}
    player_array.push(card)
    removeCardfromPlay(card)
    for (index=0; index<player_array.length; index++) {}
    if (player_num == 1) {
        addImage(`handcard${index}`,cardurl)
    } else {}
} 

function removeFromHand(pos){ // removes card from a specific position in your hand
    removeImage(`handcard${pos}`)
} 

function addToTable(x,y,card){ //adds card to specific position on table
    addImage(`table${y}-${x}`, cardURL(card))
    table[y-1][x-1] = card
    removeCardfromPlay(card)
} 
function removeFromTable(x,y){ //removes card to specific position on table
    removeImage(`table${y}-${x}`)
    table[y-1][x-1] = null
}
function cardSet(card){ //returns which set a card belongs to
    var total_setlist = [PLAINS,RIBBONS,ANIMALS,BRIGHTS]
    var name_list = ["plains","ribbons","animals","brights"]
    for (o=0; o<total_setlist.length; o++){
        for (i=0; i<total_setlist[o].length; i++){
            if (total_setlist[o][i] == card){
                return name_list[o]
            }
        }
    }
}

function addToSets(card, player_num){ //adds specific card to the correct array
    if (player_num == 1) {
        var current_dir = player1sets
    } else {
        var current_dir = player2sets
    }
    current_dir[cardSet(card)].push(card)
    removeCardfromPlay(card)
    for(index=1; index<=current_dir[cardSet(card)].length-1; index++){}
    if (player_num == 1) {
        try{addImage(`${cardSet(card).substring(0,1)}${index}`, cardURL(card))}catch(err){}
    } else {
        try{addImage(`y${cardSet(card).substring(0,1)}${index}`, cardURL(card))}catch(err){}
    }
    checkSets(player_num)
}

function YUYOturn(){
    console.log(`[Yuyo turn]`)
    var matches = []
    var d1table = table[0].concat(table[1])
    for(o=0;o<player2cards.length;o++){
        for(i=0;i<d1table.length;i++){
            if (d1table[i] == null){} else{
                if(String(player2cards[o]).substring(0,player2cards[o].length-1)
                    == String(d1table[i]).substring(0,d1table[i].length-1)){
                        matches.push([player2cards[o],d1table[i]])
                }
            }
        }
    }
    if(matches.length == 0){
        //no matchable cards
        console.log("no matches :(")
        try{for(o=1;o<table.length;o++){
            if (table[o].length == null){} else{
                try{for(i=1;i<table[o].length;i++){
                if(REVERSEcardURL(document.getElementById(`table${i}-${o}`).src) == "nocard"){
                    addToTable(o,i,player2cards[0])
                    ArrayRemoveItem(player2cards,player2cards[0])
                    return
                }
            }}catch(err){}
            }
        }
        }catch(err){}
    }
    else if(matches.length > 0){
        //there are matches
        var current = matches[0]
        var deckcardNotFound = 0
        for(o=0;o<=1;o++){
            if (table[o].length == null){} else{
                try{for(i=0;i<table[o].length;i++){
                    if(document.getElementById(`table${o+1}-${i+1}`) == null){}
                    else{ 
                        if(document.getElementById(`table${o+1}-${i+1}`).src == window.location.href.replace("index.html","") + cardURL(current[1])){   
                            removeFromTable(i+1,o+1)
                            addToSets(current[1],2)
                            addToSets(current[0],2)
                            ArrayRemoveItem(player2cards,current[0])
                            var deckcard = getRandomcard()
                            for(o=0;o<table.length;o++){
                                if (table[o].length == null){} else{
                                    try{for(i=0;i<table[o].length;i++){
                                        if(document.getElementById(`table${o+1}-${i+1}`) == null){}
                                        else{ 
                                            var currentScr = document.getElementById(`table${o+1}-${i+1}`).src

                                            console.log(String(REVERSEcardURL(currentScr)).substring(0,REVERSEcardURL(currentScr).length-1))
                                            console.log(deckcard.substring(0,deckcard.length-1))
                                            
                                            if(String(REVERSEcardURL(currentScr)).substring(0,REVERSEcardURL(currentScr).length-1) 
                                                == deckcard.substring(0,deckcard.length-1)){
                                                addToSets(REVERSEcardURL(currentScr),2)
                                                addToSets(deckcard,2)
                                                removeFromTable(i+1,o+1)
                                                removeCardfromPlay(deckcard)
                                                removeCardfromPlay(REVERSEcardURL(currentScr))
                                                deckcard = null
                                                currentScr = null
                                                return                                  
                                            } else{
                                                deckcardNotFound += 1
                                                console.log(deckcardNotFound)
                                            }
                                            }
                                            if (i>9){
                                                i = 0
                                            }
                                            if(deckcardNotFound == 18){ //noo matchable card for deck
                                                for(o=0;o<table.length;o++){
                                                    if (table[o].length == null){} else{
                                                        try{for(i=0;i<table[o].length;i++){
                                                            if(REVERSEcardURL(document.getElementById(`table${o+1}-${i+1}`).src) == "nocard"){
                                                                addToTable(i+1,o+1,deckcard)
                                                                return
                                                            } else{}
                                                        }}catch(err){}
                                                    }
                                                }
                                            }
                                        }
                                    }catch(err){}
                                }
                            }
                        }
                    }
                }}catch(err){}
            }
        }
    }
}


var scoreArray = []
var scoreChange = false
function checkSets(player_num){ // checks if and what set has been completed, returns with set object if true
    if (player_num == 1){
        var set = player1sets
    } else{
        var set = player2sets
    }
    var comboNames = ["Goko", 
    "Shiko", 
    "AmeShiko", 
    "Sanko", 
    "TsukimiZake", 
    "HanamiZake", 
    "Inoshikacho", 
    "Tane", 
    "AkatanAotanNoChofuku", 
    "Akatan", 
    "Aotan", 
    "Tanzaku", 
    "Kasu"]
    var comboResults = [false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false]
    var combos = {
        "Goko":{
            "name": "Gokō (五光)",
            "points": 10,
            "requireFunc": function(){
                var current = set // picks correct player set
                if(current.brights.includes("Jan4") 
                    && current.brights.includes("Mar4")
                    && current.brights.includes("Aug4")
                    && current.brights.includes("Nov4")
                    && current.brights.includes("Dec4")){
                        comboResults[0] = true
                    }
            }
        },
        "Shiko":{
            "name": "Shikō (四光)",
            "points": 8,
            "requireFunc": function(){
                var current = set // picks correct player set
                if(current.brights.includes("Jan4") 
                    && current.brights.includes("Mar4")
                    && current.brights.includes("Aug4")
                    && current.brights.includes("Dec4")){
                        comboResults[1] = true
                    }
            }
        },
        "AmeShiko":{
            "name": "Ame-Shikō (雨四光)",
            "points": 7,
            "requireFunc": function(){
                var current = set // picks correct player set
                if (current.brights.length == 4 && current.brights.includes("Nov4")){
                    comboResults[2] = true
                }
            }
        },
        "Sanko":{
            "name": "Sankō (三光)",
            "points": 6,
            "requireFunc": function(){
                var current = set // picks correct player set
                if (current.brights.length == 3 && !(current.brights.includes("Nov4"))){
                    comboResults[3] = true
                }
            }
        },
        "TsukimiZake":{
            "name": "Tsukimi-zake (月見酒)",
            "points": 5,
            "requireFunc": function(){
                var current = set
                if (current.animals.includes("Sep4") 
                    && current.brights.includes("Aug4")){
                    comboResults[4] = true
                }
            }
        },
        "HanamiZake":{
            "name": "Hanami-zake (花見酒)",
            "points": 5,
            "requireFunc": function(){
                var current = set
                if (current.animals.includes("Sep4") 
                    && current.brights.includes("Mar4")){
                    comboResults[5] = true
                }
            }
        },
        "Inoshikacho":{
            "name": "Inoshikachō (猪鹿蝶)",
            "points": 5,
            "requireFunc": function(){
                var current = set
                if (current.animals.includes("Jul4") 
                    && current.animals.includes("Oct4") 
                    && current.animals.includes("Apr4")){
                    comboResults[6] = true
                }
            }
        },
        "Tane":{
            "name": "Tane (タネ)",
            "points": 1,
            "requireFunc": function(){
                var current = set
                if (current.animals.length >= 5){
                    var returnScore = current.animals.length - 4
                    comboResults[7] = returnScore
                }
            }
        },
        "AkatanAotanNoChofuku":{
            "name": "Akatan Aotan no Chōfuku (赤短・青短の重複)",
            "points": 10,
            "requireFunc": function(){
                var current = set
                if (current.animals.includes("Jan3") 
                    && current.animals.includes("Feb3")
                    && current.animals.includes("Mar3")
                    && current.animals.includes("Jun3")
                    && current.animals.includes("Sep3") 
                    && current.animals.includes("Oct3")){
                    comboResults[8] = true
                }
            }
        },
        "Akatan":{
            "name": "Akatan (赤短) ",
            "points": 5,
            "requireFunc": function(){
                var current = set
                if (current.animals.includes("Jan3") 
                    && current.animals.includes("Feb3")
                    && current.animals.includes("Mar3")){
                    comboResults[9] = true
                }
            }
        },
        "Aotan":{
            "name": "Aotan (青短) ",
            "points": 5,
            "requireFunc": function(){
                var current = set
                if (current.animals.includes("Jun3")
                    && current.animals.includes("Sep3") 
                    && current.animals.includes("Oct3")){
                    comboResults[10] = true
                }
            }
        },
        "Tanzaku":{
            "name": "Tanzaku (短冊)",
            "points": 1,
            "requireFunc": function(){
                var current = set
                if (current.ribbons.length >= 5){
                    var returnScore = current.ribbons.length - 4
                    comboResults[11] = returnScore
                }
            }
        },
        "Kasu":{
            "name": "Kasu (カス)",
            "points": 1,
            "requireFunc": function(){
                var current = set
                if (current.plains.length >= 10){
                    var returnScore = current.plains.length - 9
                    comboResults[12] = returnScore
                }
            }
        },
    }
    scoreArray = []
    scoreChange = false
    for(i=0;i<comboNames.length;i++){
        combos[comboNames[i]]["requireFunc"]()
        if(comboResults[i] != false){
            scoreChange = true
            if (comboResults[i] === true){
                scoreArray.push([combos[comboNames[i]]["name"],Number(combos[comboNames[i]]["points"])])
            }
            if (Number(comboResults[i])){
                scoreArray.push([combos[comboNames[i]]["name"],Number(combos[comboNames[i]]["points"]*comboResults[i])])
            }
        }
    }
    console.log(scoreArray)
    if (scoreChange && player_num == 1){
        scoreChange = false
        SETCOMPLETE(1,scoreArray)
    }
    if (scoreChange && player_num == 2){
        scoreChange = false
        SETCOMPLETE(2,scoreArray)
    } 
    scoreChange = false
}

var decktable
function checkCards(card1, card2){ //checks the 2 inputed cards and plays a result based of what is supposed to happen
    document.getElementById(card1).style.opacity = "0.5"
    try{document.getElementById(card2).style.opacity = "1"}catch{}
    var card1name = REVERSEcardURL(document.getElementById(card1).src)
    try{var card2name = REVERSEcardURL(document.getElementById(card2).src)}catch{}
    setTimeout(function(){
        if (card2name != undefined) { //if 2 cards selected
            // checker goes here
            var card1obj = {
                "card": card1name,
                "pos": current_clicked,
                "posType": null,
                "isEmpty": null
            }
            if (card1obj["pos"].substring(0,card1obj["pos"].length-3) == "table"){
                card1obj["posType"] = "table"
            }
            if (card1obj["pos"].substring(0,card1obj["pos"].length-1) == "handcard"){
                card1obj["posType"] = "hand"
            }
            if (card1obj["pos"] == "cardresult"){
                card1obj["posType"] = "deck"
            }
            if(card1name == "nocard"){
                card1obj["isEmpty"] = true
            }else{
                card1obj["isEmpty"] = false
            }

            var card2obj = {
                "card": card2name,
                "pos": previous_clicked,
                "posType": null,
                "isEmpty": null
            }
            if (card2obj["pos"].substring(0,card2obj["pos"].length-3) == "table"){
                card2obj["posType"] = "table"
            }
            if (card2obj["pos"].length = 2){
                if (card2obj["pos"].substring(0,card2obj["pos"].length-2) == "handcard"){
                    card2obj["posType"] = "hand"
                }
            } 
            if (card2obj["pos"].length = 1){
                if (card2obj["pos"].substring(0,card2obj["pos"].length-1) == "handcard"){
                    card2obj["posType"] = "hand"
                }
            }

            if (card2obj["pos"] == "cardresult"){
                card2obj["posType"] = "deck"
            }
            if(card2name == "nocard"){
                card2obj["isEmpty"] = true
            }else{
                card2obj["isEmpty"] = false
            }

            // hand/table checker 
            if (card1obj["posType"] == "table" &&
                card2obj["posType"] == "hand"
                ||
                card2obj["posType"] == "table" &&
                card1obj["posType"] == "hand"){
                    var HTchecker = true
                } else{var HTchecker = false} // returns false if card is both in hand or both on table
            if(decktable){
                HTchecker = false
                if (card1obj["posType"] == "deck" && card2obj["posType"] == "table" || card1obj["posType"] == "table" && card2obj["posType"] == "deck"){
                    if(card1name.substring(0,card1name.length-1) == card2name.substring(0,card2name.length-1)){
                        if(card1obj["posType"] == "table"){
                            removeFromTable(String(card1obj["pos"]).replace("table","").split("-")[1],String(card1obj["pos"]).replace("table","").split("-")[0])
                            addToSets(card1obj["card"],1)
                        }
                        if(card2obj["posType"] == "table"){
                            removeFromTable(String(card2obj["pos"]).replace("table","").split("-")[1],String(card2obj["pos"]).replace("table","").split("-")[0])
                            addToSets(card2obj["card"],1)
                        }
                        if(card1obj["posType"] == "deck"){
                            addToSets(card1obj["card"],1)
                        }
                        if(card2obj["posType"] == "deck"){
                            addToSets(card2obj["card"],1)
                        }
                        decktable = false
                        flipReset()
                        setTimeout(function(){YUYOturn()},200)
                    }
                    if(card1obj["posType"] == "deck" && card2obj["isEmpty"] || card2obj["posType"] == "deck" && card1obj["isEmpty"]){
                        if(card1obj["isEmpty"]){
                            addToTable(String(card1obj["pos"]).replace("table","").split("-")[1],String(card1obj["pos"]).replace("table","").split("-")[0],card2obj["card"])
                        }
                        if(card2obj["isEmpty"]){
                            addToTable(String(card2obj["pos"]).replace("table","").split("-")[1],String(card2obj["pos"]).replace("table","").split("-")[0],card1obj["card"])
                        }
                        decktable = false
                        flipReset()
                        setTimeout(function(){YUYOturn()},200)
                    }
                }

            }
            if (HTchecker && !decktable){ //if card in hand and other on table
                if(card1obj["isEmpty"] || card2obj["isEmpty"]){
                    if(card1obj["isEmpty"] && card1obj["posType"] == "table"){
                        if(card1obj["isEmpty"] && card2obj["isEmpty"]){}else{
                            var cardinplay = card2obj["card"]
                            addToTable(String(card1obj["pos"]).replace("table","").split("-")[1],String(card1obj["pos"]).replace("table","").split("-")[0],cardinplay)
                            removeFromHand(card2obj["pos"].replace("handcard",""))
                            setTimeout(function(){YUYOturn()},200)
                        }
                    }
                }
                if(card1name.substring(0,card1name.length-1) == card2name.substring(0,card2name.length-1)){
                    if(card1obj["posType"] == "table"){
                        removeFromTable(String(card1obj["pos"]).replace("table","").split("-")[1],String(card1obj["pos"]).replace("table","").split("-")[0])
                        addToSets(card1obj["card"],1)
                    }
                    if(card2obj["posType"] == "table"){
                        removeFromTable(String(card2obj["pos"]).replace("table","").split("-")[1],String(card2obj["pos"]).replace("table","").split("-")[0])
                        addToSets(card2obj["card"],1)
                    }
                    if(card1obj["posType"] == "hand"){
                        removeFromHand(card1obj["pos"].replace("handcard",""))
                        addToSets(card1obj["card"],1)
                    }
                    if(card2obj["posType"] == "hand"){
                        removeFromHand(card2obj["pos"].replace("handcard",""))
                        addToSets(card2obj["card"],1)
                    }
                    flipAnimation()
                    decktable = true
                }
            }
            
        }
        if (card1 && card2){
            document.getElementById(card1).style.opacity = "1"
            document.getElementById(card2).style.opacity = "1"
            current_clicked = undefined
            previous_clicked = undefined
        }
    },100)
    
} 

function setupTable(){ //puts 8 cards in a 4x2 format on the main table
    for (i=1; i<=4; i++){
        addToTable(i,1,getRandomcard())
    }
    for (i=1; i<=4; i++){
        addToTable(i,2,getRandomcard())
    }
}

function setupHandCards(){ //gives each player 8 cards to start the game
    for (i=0; i<8; i++){
        addToHand(getRandomcard(),player1cards,1)
        addToHand(getRandomcard(),player2cards,2)
    }
}

function restartGame(){
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    setTimeout(function(){koikoiOVERWRITE()},2000)
}

function setMultiplier(){}
function setPoints(){}

function SETCOMPLETE(player_num, scoreArray){ //opens up the menu to allow the player to koikoi (continue) or end
    console.log(`player ${player_num} scored!`)
    if (player_num == 1){
        
    }
    if (player_num == 2){
       console.log(Math.round(Math.random()*100))
    }
}
function KOIKOI(){} //increases multiplier by 1 and continues game
function GAMEEND(){ //calculates score from all combos achieved 
    document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
}

setupTable()
setupHandCards()
setDeck()

