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

function koikoiOVERWRITE(){
    document.body.innerHTML = '';
    document.head.innerHTML = '';
    setTimeout(function(){document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Koi-Koi</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="icon" href="../misc/logo/logo30x30.png">
    <link rel="manifest" href="../data/manifest.webmanifest"/>
</head>
<body>
    
    <div id="darkmode"></div>
    <script src="../javascript/darkmode.js "></script>
    <script src="../javascript/navigation.js"></script>
    
    <img id="animation_frame" src="../misc/assets/animation_frame.png">

    <div class="grid_ribbon">
        <img onclick="subjectpress()"id="logo" src="../misc/assets/yuyo_logo.png">
        <img onclick="subjectpress()" id="subjects" src="../misc/assets/subjects.png">
        <img onclick="koikoipress()" id="koikoi" src="../misc/assets/koikoi.png">
        <img onclick="musicpress()" id="settings" src="../misc/assets/music.png">
        <img onclick="darklight()" id="darklight" src="../misc/assets/darkmode.png">
    </div>

    <img id="ribbon_underline" src="../misc/assets/ribbon_underline.png">

    <div id="fullscreen">
        <p id="fullscreentext"> Enter fullscreen by pressing F11 to play</p>
        <img id="fullscreenyuyo" src="../misc/sprites/yuyo0.png">
    </div>

    

    <div id="koikoimenu">
        <div id=koikoimenu_player>You Scored!</div>
        <div id=koikoimenu_score></div>
        <div id="koikoibutton">KOI-KOI</div>
        <div id="stopbutton">STOP</div>
    </div>

<div id="gamearea">

    <div id="koikoirestart" onclick="restartGame()">Restart</div>

    <div id="koikoiscore">Score:<div id="score">0</div></div>
    <div id="koikoimulti">Multiplier:<div id="multi">1x</div></div>

    <div id="yuyokoikoiscore">Yuyo's Score:<div id="yuyoscore">0</div></div>
    
    <div id="yuyohandgroup">
        <img id="koikoiyuyo" src="../misc/sprites/yuyo0.png">
        <img id="yuyohand" src="../misc/assets/hand.png">
        <img id="card1" src="../misc/assets/cardback.png">
        <img id="card2" src="../misc/assets/cardback.png">
        <img id="card3" src="../misc/assets/cardback.png">
    </div>

    <div id="yuyokoikoicombos">
        <p class="typetext" style="grid-column: 1; grid-row: 1;"> Yuyo Plains</p>
            <img class="setcards" id="yp1"  src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 1;">
            <img class="setcards" id="yp2"  src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 1;">
            <img class="setcards" id="yp3"  src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 1;">
            <img class="setcards" id="yp4"  src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 1;">
            <img class="setcards" id="yp5"  src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 1;">
            <img class="setcards" id="yp6"  src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 1;">
            <img class="setcards" id="yp7"  src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 1;">
            <img class="setcards" id="yp8"  src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 1;">
            <img class="setcards" id="yp9"  src="../misc/cards/nocard.png" style="grid-column: 10; grid-row: 1;">
            <img class="setcards" id="yp10" src="../misc/cards/nocard.png" style="grid-column: 11; grid-row: 1;">
            <img class="setcards" id="yp11" src="../misc/cards/nocard.png" style="grid-column: 12; grid-row: 1;">
            <img class="setcards" id="yp12" src="../misc/cards/nocard.png" style="grid-column: 13; grid-row: 1;">
            <img class="setcards" id="yp13" src="../misc/cards/nocard.png" style="grid-column: 14; grid-row: 1;">
            <img class="setcards" id="yp14" src="../misc/cards/nocard.png" style="grid-column: 15; grid-row: 1;">
            <img class="setcards" id="yp15" src="../misc/cards/nocard.png" style="grid-column: 16; grid-row: 1;">
            <img class="setcards" id="yp16" src="../misc/cards/nocard.png" style="grid-column: 17; grid-row: 1;">
            <img class="setcards" id="yp17" src="../misc/cards/nocard.png" style="grid-column: 18; grid-row: 1;">
            <img class="setcards" id="yp18" src="../misc/cards/nocard.png" style="grid-column: 19; grid-row: 1;">
            <img class="setcards" id="yp19" src="../misc/cards/nocard.png" style="grid-column: 20; grid-row: 1;">
            <img class="setcards" id="yp20" src="../misc/cards/nocard.png" style="grid-column: 21; grid-row: 1;">
            <img class="setcards" id="yp21" src="../misc/cards/nocard.png" style="grid-column: 22; grid-row: 1;">
            <img class="setcards" id="yp22" src="../misc/cards/nocard.png" style="grid-column: 23; grid-row: 1;">
            <img class="setcards" id="yp23" src="../misc/cards/nocard.png" style="grid-column: 24; grid-row: 1;">
            <img class="setcards" id="yp24" src="../misc/cards/nocard.png" style="grid-column: 25; grid-row: 1;">
        <p class="typetext" style="grid-column: 1; grid-row: 2;">Yuyo Ribbons</p>
            <img class="setcards" id="yr1" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 2;">
            <img class="setcards" id="yr2" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 2;">
            <img class="setcards" id="yr3" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 2;">
            <img class="setcards" id="yr4" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 2;">
            <img class="setcards" id="yr5" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 2;">
            <img class="setcards" id="yr6" src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 2;">
            <img class="setcards" id="yr7" src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 2;">
            <img class="setcards" id="yr8" src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 2;">
        <p class="typetext" style="grid-column: 1; grid-row: 3;">Yuyo Animals</p>
            <img class="setcards" id="ya1" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 3;">
            <img class="setcards" id="ya2" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 3;">
            <img class="setcards" id="ya3" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 3;">
            <img class="setcards" id="ya4" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 3;">
            <img class="setcards" id="ya5" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 3;">
            <img class="setcards" id="ya6" src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 3;">
            <img class="setcards" id="ya7" src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 3;">
            <img class="setcards" id="ya8" src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 3;">
            <img class="setcards" id="ya8" src="../misc/cards/nocard.png" style="grid-column: 10; grid-row: 3;">
        <p class="typetext" style="grid-column: 1; grid-row: 4;">Yuyo Brights</p>
            <img class="setcards" id="yb1" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 4;">
            <img class="setcards" id="yb2" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 4;">
            <img class="setcards" id="yb3" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 4;">
            <img class="setcards" id="yb4" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 4;">
            <img class="setcards" id="yb5" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 4;">
    </div>

    <div id="maintable">
        <img class="card" id="table1-1" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 1; grid-row: 1;">
        <img class="card" id="table1-2" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 1;">
        <img class="card" id="table1-3" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 1;">
        <img class="card" id="table1-4" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 1;">
        <img class="card" id="table1-5" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 1;">
        <img class="card" id="table1-6" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 1;">
        <img class="card" id="table1-7" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 1;"> 
        <img class="card" id="table1-8" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 1;">
        <img class="card" id="table1-9" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 1;">
        <img class="card" id="table2-1" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 1; grid-row: 2;">
        <img class="card" id="table2-2" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 2;">
        <img class="card" id="table2-3" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 2;">
        <img class="card" id="table2-4" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 2;">
        <img class="card" id="table2-5" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 2;">
        <img class="card" id="table2-6" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 2;">
        <img class="card" id="table2-7" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 2;">
        <img class="card" id="table2-8" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 2;">
        <img class="card" id="table2-9" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 2;">
    </div>

    <div id="maindeck">
        <img class="card" id="standingdeck" src="../misc/assets/cardback.png">
        <img class="card" id="cardback" src="../misc/assets/cardback.png">
        <img class="card" id="cardresult" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" >
    </div>

    <div id="playercards">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard1">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard2">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard3">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard4">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard5">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard6">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard7">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard8">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard9">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard10">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard11">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard12">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard13">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard14">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard15">
        <img class="yourcards" onclick="elementclick(this.id)" src="../misc/cards/nocard.png" id="handcard16">
    </div>

    <div id="playercombos">
        <p class="typetext" style="grid-column: 1; grid-row: 1;">Plains</p>
            <img class="setcards" id="p1"  src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 1;">
            <img class="setcards" id="p2"  src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 1;">
            <img class="setcards" id="p3"  src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 1;">
            <img class="setcards" id="p4"  src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 1;">
            <img class="setcards" id="p5"  src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 1;">
            <img class="setcards" id="p6"  src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 1;">
            <img class="setcards" id="p7"  src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 1;">
            <img class="setcards" id="p8"  src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 1;">
            <img class="setcards" id="p9"  src="../misc/cards/nocard.png" style="grid-column: 10; grid-row: 1;">
            <img class="setcards" id="p10" src="../misc/cards/nocard.png" style="grid-column: 11; grid-row: 1;">
            <img class="setcards" id="p11" src="../misc/cards/nocard.png" style="grid-column: 12; grid-row: 1;">
            <img class="setcards" id="p12" src="../misc/cards/nocard.png" style="grid-column: 13; grid-row: 1;">
            <img class="setcards" id="p13" src="../misc/cards/nocard.png" style="grid-column: 14; grid-row: 1;">
            <img class="setcards" id="p14" src="../misc/cards/nocard.png" style="grid-column: 15; grid-row: 1;">
            <img class="setcards" id="p15" src="../misc/cards/nocard.png" style="grid-column: 16; grid-row: 1;">
            <img class="setcards" id="p16" src="../misc/cards/nocard.png" style="grid-column: 17; grid-row: 1;">
            <img class="setcards" id="p17" src="../misc/cards/nocard.png" style="grid-column: 18; grid-row: 1;">
            <img class="setcards" id="p18" src="../misc/cards/nocard.png" style="grid-column: 19; grid-row: 1;">
            <img class="setcards" id="p19" src="../misc/cards/nocard.png" style="grid-column: 20; grid-row: 1;">
            <img class="setcards" id="p20" src="../misc/cards/nocard.png" style="grid-column: 21; grid-row: 1;">
            <img class="setcards" id="p21" src="../misc/cards/nocard.png" style="grid-column: 22; grid-row: 1;">
            <img class="setcards" id="p22" src="../misc/cards/nocard.png" style="grid-column: 23; grid-row: 1;">
            <img class="setcards" id="p23" src="../misc/cards/nocard.png" style="grid-column: 24; grid-row: 1;">
            <img class="setcards" id="p24" src="../misc/cards/nocard.png" style="grid-column: 25; grid-row: 1;">
        <p class="typetext" style="grid-column: 1; grid-row: 2;">Ribbons</p>
            <img class="setcards" id="r1" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 2;">
            <img class="setcards" id="r2" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 2;">
            <img class="setcards" id="r3" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 2;">
            <img class="setcards" id="r4" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 2;">
            <img class="setcards" id="r5" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 2;">
            <img class="setcards" id="r6" src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 2;">
            <img class="setcards" id="r7" src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 2;">
            <img class="setcards" id="r8" src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 2;">
        <p class="typetext" style="grid-column: 1; grid-row: 3;">Animals</p>
            <img class="setcards" id="a1" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 3;">
            <img class="setcards" id="a2" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 3;">
            <img class="setcards" id="a3" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 3;">
            <img class="setcards" id="a4" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 3;">
            <img class="setcards" id="a5" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 3;">
            <img class="setcards" id="a6" src="../misc/cards/nocard.png" style="grid-column: 7; grid-row: 3;">
            <img class="setcards" id="a7" src="../misc/cards/nocard.png" style="grid-column: 8; grid-row: 3;">
            <img class="setcards" id="a8" src="../misc/cards/nocard.png" style="grid-column: 9; grid-row: 3;">
            <img class="setcards" id="a9" src="../misc/cards/nocard.png" style="grid-column: 10; grid-row: 3;">
        <p class="typetext" style="grid-column: 1; grid-row: 4;">Brights</p>
            <img class="setcards" id="b1" src="../misc/cards/nocard.png" style="grid-column: 2; grid-row: 4;">
            <img class="setcards" id="b2" src="../misc/cards/nocard.png" style="grid-column: 3; grid-row: 4;">
            <img class="setcards" id="b3" src="../misc/cards/nocard.png" style="grid-column: 4; grid-row: 4;">
            <img class="setcards" id="b4" src="../misc/cards/nocard.png" style="grid-column: 5; grid-row: 4;">
            <img class="setcards" id="b5" src="../misc/cards/nocard.png" style="grid-column: 6; grid-row: 4;">
    </div>
    
</div>
    <script src="../javascript/koikoi-gameplay.js"></script>

</body>
</html>
`)},10)
}



