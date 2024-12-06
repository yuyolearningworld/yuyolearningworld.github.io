MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var all_playable_cards = []
for (var i=0; i<MONTHS.length; i++) {
    for (i2=1; i2<5; i2++) {
        all_playable_cards.push(MONTHS[i]+String(i2))
    }
}
ALLCARDS = all_playable_cards

// catagories
plains = ["Jan1","Jan2","Feb1","Feb2","Mar1","Mar2","Apr1","Apr2","May1","May2","Jun1","Jun2","Jul1","Jul2","Aug1","Aug2","Sep1","Sep2","Oct1","Oct2","Nov1","Dec1","Dec2","Dec3"]
animals = ["Feb4","Apr4","May4","Jun4","Jul4","Aug3","Sep4","Oct4","Nov3"]
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

document.getElementsByClassName("card").item(1)

setInterval(function(){
    if (screen.height != window.innerHeight || screen.width != window.innerWidth) {
        document.getElementById("fullscreen").style.visibility = "visible"
    } else {
        document.getElementById("fullscreen").style.visibility = "hidden"
    }
    
    
    var totalinvertcard = [document.getElementsByClassName("yourcards"), document.getElementsByClassName("card"), document.getElementsByClassName("setcards"), document.getElementById("card1"), document.getElementById("card2"), document.getElementById("card3")]
    totalinvertcard.forEach(function(value){
        for (i=0; i<value.length; i++){
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
        }
    })
}, 1)



//player 2 is yuyo
var player1cards = []
var player1sets = {
    "plains":  [],
    "animals": [],
    "ribbons": [],
    "brights": []
}
var player1setscomp = []

var player2cards = []
var player2sets = {
    "plains":  [],
    "animals": [],
    "ribbons": [],
    "brights": []
}
var player2setscomp = []

function addImage(element, carddir){ //adds card image to html img element
    var current = document.getElementById(element)
    current.style.outline = "1px solid #0e0e0e"
    current.src = window.location.href.replace("html/koikoi.html","") + carddir
}
function removeImage(element){ //sets html img element to nocard.png
    var current = document.getElementById(element)
    current.style.outline = "1px solid #d8d8d8"
    current.src = window.location.href.replace("html/koikoi.html","") + "misc/cards/nocard.png"
}

function getRandomcard(){ //picks a card.png file dir at random and returns it
    index = Math.round(Math.random()*(all_playable_cards.length-1))
    return all_playable_cards[index]
} 

function cardURL(card){ //input name of card and returns with url to access it
    return `misc/cards/${card}.png`
}

var current_clicked
var previous_clicked
function elementclick(id){ //updates current_clicked var with clickable element and sets old to previously clicked 
    if (current_clicked == null) {}
    else {
        previous_clicked = current_clicked
    }
    current_clicked = id
}

function flipAnimation(){  //runs the complete animation for the flip
    document.getElementById("cardresult").style.animation = "flip 1s linear 1s 1 normal forwards running"
    document.getElementById("cardback").style.animation = "backflip 1s linear 1s 1 normal forwards running"
}

function removeCardfromPlay(card){ //removes the inputted card for the list of cards that can be used in the game
    for (index=0; index<all_playable_cards.length; index++){
        if (all_playable_cards[index] == card) {
            all_playable_cards.splice(index, 1);
            return
        }
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
} 
function removeFromTable(x,y){ //removes card to specific position on table
    removeImage(`table${y}-${x}`)
}

function addToSets(type, card, player_num){ //adds specific card to the correct array
    if (player_num == 1) {
        var current_dir = player1sets
    } else {
        var current_dir = player2sets
    }
    current_dir[type].push(card)
}

function updateSets(){} //uploads the current array images to the screen
function checkSets(){} // checks if and what set has been completed, adds it to complete array
function checkCards(card1, card2){} //checks the 2 inputed cards and plays a result based of what is supposed to happen

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
        addToHand(getRandomcard(),player2cards,null)
    }
}

function setMultiplier(){}
function setPoints(){}

function SETCOMPLETE(){} //opens up the menu to allow the player to koikoi (continue) or end
function KOIKOI(){} //increases multiplier by 1 and continues game
function GAMEEND(){} //calculates score from all combos achieved 
