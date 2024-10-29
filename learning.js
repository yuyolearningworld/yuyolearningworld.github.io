
function learn(subject, lesson){
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
	currentdata = "__" + subject + lesson + "__"
	var totalitems = Object.keys(response[currentdata])
	var title = response[currentdata]["title"]
	var totalpages = totalitems.length - 1
	var pageContents = []
	for (i=1; i<totalpages; i++){
		pageContents.push(response[currentdata]["page" + i])
	}
	var lessonhtml = window.open("lesson.html")
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

	<!-- <img class="yuyo" src="yuyo_sprites\\yuyo0.png"> -->

	<script>
		var data = [` + pageContents + `]
		var currentpage = 1
		document.getElementById("lessontextbox").innerText = data[currentpage - 1]

		function increasePage(){
			var currentpage = currentpage + 1
			if (currentpage-1 > data.length){return}
			else {document.getElementById("lessontextbox").innerText = data[currentpage - 1]}
		}

		function decreasePage(){
			var currentpage = currentpage - 1
			if (currentpage-1 < 0){return}
			else {document.getElementById("lessontextbox").innerText = data[currentpage - 1]}
		}

	</script>

	<img class="arrow" id="rightarrow" onclick="increasePage()" src="assets\\rightarrow.png">
	<img class="arrow" id="leftarrow" onclick="decreasePage()" src="assets\\leftarrow.png">

	
</body>
</html>
`
	lessonhtml.document.write(html)

	})
}
