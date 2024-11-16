var HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading...</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="icon" href="../misc/logo/logo30x30.png">
	<link rel="manifest" href="../data/manifest.json"/>
	
</head>
<body>

	<img id="animation_frame" src="../misc/assets/animation_frame.png">

	<script src="../javascript/lesson.js"></script>

	<p id="lessontitle"> </p>

	<p id="lessonexit" onclick="exitToMain()">Click here to go back to subjects</p>

	<div id="lessontextbox"></div>
	<img id="learningyuyo" src="../misc/sprites/yuyo0.png">

	<img class="arrow" id="rightarrow" onclick="increasePage()" src="../misc/assets/rightarrow.png">
	<img class="arrow" id="leftarrow" onclick="decreasePage()" src="../misc/assets/leftarrow.png">
	

	<script src="../javascript/lesson.js"></script>

	

	
</body>
</html>
`

function startLesson(id){
	document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
	var click = new Audio('../misc/sounds/click.mp3');
    click.play();
    setTimeout(function(){
		document.open()
		document.write(HTML)
		document.close()
	},2000)
	setTimeout(function(){
		var idlist = id.split("_")
		subjectNum = Number(idlist[0].replace("subject",""))
		lessonNum = Number(idlist[1].replace("lesson",""))
		getData(subjectNum, lessonNum)
		setTimeout(function(){
			yuyospeak()
		}, 2000)
	},2500)
}

function getData(s, l){
	fetch("../data/data.json", {method: 'GET'})
	.then(json => json.json())
	.then(json => {
		var subject = Object.keys(json)
		var lesson = []
		subject.forEach(function(subjects){
			lesson.push(Object.keys(json[subjects]))
		})
		var content = json[subject[s-1]][lesson[s-1][l-1]]
		document.title = lesson[s-1][l-1]
		document.getElementById("lessontitle").textContent = lesson[s-1][l-1]
		data = content
		setTimeout(function(){},1000)
	})
}

var data = []
var current = 0
var writingstate = 0
var spritestate = 0
var halt = false

function yuyospriteflip(){
	if (globalThis.spritestate == 1) {
		document.getElementById("learningyuyo").src = "../misc/sprites/yuyo0.png"
		globalThis.spritestate = 0
		return
	} else { 
		document.getElementById("learningyuyo").src = "../misc/sprites/yuyo1.png"
		yuyonoise()
		globalThis.spritestate = 1
		return
	}
}

function yuyonoise(){
	var random = Math.round(Math.random()*4)+1
	var beep = new Audio(`../misc/sounds/yuyotone${random}.mp3`);
	beep.play();
}



function yuyospeak() {
	yuyospriteflip()
	var i = 0
	var text = data[current]
	var text = text.replaceAll("_","\\r\\n ")
	// _ = new line in content text
	var text = text.replaceAll(" "," ")
	globalThis.writingstate = 1
	setInterval(function(){
		if (current == 0) {
			document.getElementById("leftarrow").style.visibility = "hidden"
		} else {document.getElementById("leftarrow").style.visibility = "visible"}

		if (current == data.length-1) {
			document.getElementById("rightarrow").style.visibility = "hidden"
		} else {document.getElementById("rightarrow").style.visibility = "visible"}
	
		document.getElementById("lessontextbox").addEventListener("click", function(){
			globalThis.halt = true
			document.getElementById("lessontextbox").textContent = ""
			document.getElementById("lessontextbox").textContent = data[current].replaceAll("_","\\r\\n ").replaceAll(" "," ")
			globalThis.writingstate = 0
			document.getElementById("learningyuyo").src = "../misc/sprites/yuyo0.png"
		})

		if (document.getElementById("lessontextbox").textContent == text) {
			globalThis.writingstate = 0
			document.getElementById("learningyuyo").src = "../misc/sprites/yuyo0.png"
		}
	},100)
	function main(counter) {
		if (halt) {return}
		else {
		yuyospriteflip()
		var i = counter
		if (i < text.length) {
		document.getElementById("lessontextbox").textContent += text[i]
		var i = i + 1
		setTimeout(function(){main(i)}, 75)
		}
		} 
	}
	main(i)
}

function increasePage(){
	var click = new Audio('../misc/sounds/click.mp3');
    click.play();
	globalThis.halt = false
	if (writingstate == 1) {return}
	if (current + 1 > data.length-1) {return}
	document.getElementById("lessontextbox").textContent = ""
	globalThis.current =  current + 1
	setTimeout(yuyospeak(), 1000)
}

function decreasePage(){
	var click = new Audio('../misc/sounds/click.mp3');
    click.play();
	globalThis.halt = false
	if (writingstate == 1) {return}	
	if (current - 1 < 0) {return}
	document.getElementById("lessontextbox").textContent = ""
	globalThis.current =  current - 1
	setTimeout(yuyospeak(), 1000)
}

function exitToMain(){
	var click = new Audio('../misc/sounds/click.mp3');
    click.play();
	document.getElementById("animation_frame").style.animationName = "pagechange_left"
	document.getElementById("animation_frame").style.animationDuration = "2s"
	document.getElementById("animation_frame").style.animationFillMode = "forwards"
	setTimeout(function(){window.location.replace("../html/subjects.html")},2000)
}