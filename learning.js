globalThis.currentsubject = null
globalThis.currentlesson = null
globalThis.currentpage = null
globalThis.totalpages = null
globalThis.lessonhtml = null
globalThis.html = null

function learn(subject, lesson, page){
	globalThis.currentsubject = subject
	globalThis.currentlesson = lesson
	globalThis.currentpage = page
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
	currentdata = "__" + subject + lesson + "__"
	var totalitems = Object.keys(response[currentdata])
	var title = response[currentdata]["title"]
	globalThis.totalpages = totalitems.length - 1
	var pageContents = []
	for (i=1; i<totalpages; i++){
		pageContents.push(response[currentdata]["page" + i])
	}
	globalThis.lessonhtml = window.open("lesson.html")
	globalThis.html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>` + title + ` - Page `+ (page+1) +`</title>
    <link rel="stylesheet" type="text/css" href="style.css">
	<link rel="icon" type="image/x-icon" href="assets\\tablogo.png">
</head>
<body>

	<script src="learning.js"></script>

	<p id="lessontitle">` + title + `</p>
	<div id="lessontextbox">` + pageContents[page] + `</div>

	<!-- <img class="yuyo" src="yuyo_sprites\\yuyo0.png"> -->

	<img class="arrow" id="rightarrow" onclick="increasePage(` + (page+1) + `)" src="assets\\rightarrow.png">
	<img class="arrow" id="leftarrow" onclick="decreasePage(` + (page-1) + `)" src="assets\\leftarrow.png">

	
</body>
</html>
`
	lessonhtml.document.write(html)

	})
}

function increasePage(page){
	learn(currentsubject, currentlesson, page)
}

function decreasePage(page){
		learn(currentsubject, currentlesson, page)
}
