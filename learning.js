
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

	<script src="learning.js"></script>

	<p id="lessontitle">` + title + `</p>

	<div id="lessontextbox"> </div>
	<img id="learningyuyo" src="yuyo_sprites\\yuyo0.png">
	

	<script>

		

		function yuyospeak(text) {
			var i = 0
			var text = text
			function main(counter) {
				var i = counter
				if (i < text.length) {
				document.getElementById("lessontextbox").innerText += text.charAt(i)
				var i = i + 1
				setTimeout(funtion(){main(i)}, 100)
				}
			}
			main(i)
		}
			
	

		var data = [` + pageContents + `]
		var current = 0
		setTimeout(yuyospeak(data[current]),50)

		function increasePage(){
			if (current + 1 > data.length-1) {return}
			globalThis.current =  current + 1
			yuyospeak(data[current])
		}

		function decreasePage(){
			if (current - 1 < 0) {return}
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
