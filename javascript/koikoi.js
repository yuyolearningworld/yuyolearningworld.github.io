window.addEventListener("resize", function(){
    window.resizeTo(1016, 774);
})

MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
allcards = []
for (var i=0; i<MONTHS.length; i++) {
    for (i2=1; i2<5; i2++) {
        allcards.push(MONTHS[i]+String(i2))
    }
}
ALLCARDS = allcards

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





//player 2 is yuyo
var player1cards = []
var player1sets = []
var player2cards = []
var player2sets = []

function addImage(element, card){ //adds card image to html img element
    var current = document.getElementById(element)
    current.style.outline = "1px solid #0e0e0e"
    current.src = window.location.href.replace("problem fixedhtml/koikoi.html","") + "misc/cards/" + card + ".png"
}
function removeImage(element){ // sets html img element to nocard.png
    var current = document.getElementById(element)
    current.style.outline = "1px solid #d8d8d8"
    current.src = window.location.href.replace("html/koikoi.html","") + "misc/cards/nocard.png"
}

function getRandomcard(){} //picks a card.png file dir at random
function cardURL(card){}//input name of card and returns with url to access it

function deckFlip(){} // runs the complete animation for the flip
function toplayerAnimation(playerTo){}//runs animation of giving card to player
function resetAnimation(){}// resets the images to there original position so they can be drawn again

function removeCardfromAllCards(card){}//removes the inputted card for the list of cards that can be used in the game

function removeCardfromDeck(){} //if a card is used it cannot be used again, this function will remove it from the list of all cards
function addToHand(card){} //adds card image dir inputed to a free space in your hand
function removeFromHand(pos){} // removes card from a specific position in your hand and moves the cards behind it up
function addToTable(pos,card){} //adds card to specific position on table
function removeFromTable(pos){} //removes card to specific position on table
function addToSets(type,card){} // adds specific card to the next open spot in deck
function checkSets(){} // checks if player can call koikoi or game
function checkCards(card1, card2){} //returns true if 2 cards can pair, returns false if not

function drawFromDeck(playerTo){} //picks a random card that is avalible and gives it to the player that it is set to
function setupTable(){}//puts 8 cards in a 4x2 format on the main table
function setupHandCards(){}// gives each player 8 cards to start the game
function displayUserHand(playerCardList){} //overwrites all of the images of user hand cards with card list inputed

function SETCOMPLETE(){} //opens up the menu to allow the player to koikoi (continue) or end
function KOIKOI(){} //increases multiplier by 1 and continues game
function GAMEEND(){} //calculates score from all combos achieved 
