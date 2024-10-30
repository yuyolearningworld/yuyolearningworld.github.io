
function learn(subject, lesson){
	document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
	currentdata = "__" + subject + lesson + "__"
	var totalitems = Object.keys(response[currentdata])
	var title = response[currentdata]["title"]
	var pageContents = []
	for (i=1; i<totalitems.length; i++){
		pageContents.push('"' + response[currentdata]["page" + i] + '"')
	}
	setTimeout(function(){var lessonhtml = window.open("lesson.html")
	var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>` + title + `</title>
    <link rel="stylesheet" type="text/css" href="style.css">
	<link rel="icon" type="image/x-icon" href="assets\\tablogo.png">
</head>
<body>

	<img id="animation_frame" src="assets\\animation_frame.png">

	<script src="learning.js"></script>

	<p id="lessontitle">` + title + `</p>

	<div id="lessontextbox"> </div>
	<img id="learningyuyo" src="yuyo_sprites\\yuyo0.png">
	

	<script>
		var data = [` + pageContents + `]
		var current = 0
		var writingstate = 0
		var spritestate = 0
		

		function yuyospriteflip(){
			if (spritestate == 1) {
				document.getElementById("learningyuyo").src = "yuyo_sprites\\\\yuyo0.png"
				globalThis.spritestate = 0
			} else { 
				document.getElementById("learningyuyo").src = "yuyo_sprites\\\\yuyo1.png"
				globalThis.spritestate = 1

			}

		}

		function yuyospeak(text) {
			var i = 0
			var text = text.replaceAll(" "," ")
			var text = text.replaceAll("#"," <br> ")
			if (text.length % 2 == 1) {
				var text = text + " "
			}
			globalThis.writingstate = 1
			setInterval(function(){
				if (current == 0) {
					document.getElementById("leftarrow").style.visibility = "hidden"
				} else {document.getElementById("leftarrow").style.visibility = "visible"}

				if (current == data.length-1) {
					document.getElementById("rightarrow").style.visibility = "hidden"
				} else {document.getElementById("rightarrow").style.visibility = "visible"}
			
				if (document.getElementById("lessontextbox").innerText == text) {
					globalThis.writingstate = 0
				}
			},100)
			function main(counter) {
				var i = counter
				if (i < text.length) {
				document.getElementById("lessontextbox").innerHTML += text[i]
				var i = i + 1
				yuyospriteflip()
				setTimeout(function(){main(i)}, 50)
				} 
			}
			main(i)
			
		}

		//program start wait
		setTimeout(function(){
			yuyospeak(data[current])
		},2500)

		function increasePage(){
			if (writingstate == 1) {return}
			if (current + 1 > data.length-1) {return}
			document.getElementById("lessontextbox").innerText = ""
			globalThis.current =  current + 1
			yuyospeak(data[current])
		}

		function decreasePage(){
			if (writingstate == 1) {return}	
			if (current - 1 < 0) {return}
			document.getElementById("lessontextbox").innerText = ""
			globalThis.current =  current - 1
			yuyospeak(data[current])
		}

	</script>

	<img class="arrow" id="rightarrow" onclick="increasePage()" src="assets\\rightarrow.png">
	<img class="arrow" id="leftarrow" onclick="decreasePage()" src="assets\\leftarrow.png">

	
</body>
</html>
`

	lessonhtml.document.write(html)
	setTimeout(function(){
		document.getElementById("animation_frame").style.animationName = "pagechange_right"
		document.getElementById("animation_frame").style.animationDuration = "2s"
		document.getElementById("animation_frame").style.animationFillMode = "forwards"},500)},2000)
	})
}

