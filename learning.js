var currentsubject = null
var currentlesson = null
var currentpage = null
var totalpages = null
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
	var lessonpage = window.open("lesson.html")

	var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>` + title + `</title>
    <link rel="stylesheet" type="text/css" href="style.css">
	<link rel="icon" href="assets\\tablogo.png">
</head>
<body>

	<script src="learning.js"></script>

	<p id="lessontitle">` + title + `</p>
	<div id="lessontextbox">` + pageContents[page] + `</div>

	<img class="arrow" id="rightarrow" onclick="increasePage()" src="assets\\rightarrow.png">
	<img class="arrow" id="leftarrow" onclick="decreasePage()" src="assets\\leftarrow.png">
	
</body>
</html>
`
	lessonpage.document.write(html)
	})
}

function increasePage(){
	if (currentpage >= totalpages) {
		console.log("up")
		return
	} else {
		learn(currentsubject, currentlesson, currentpage + 1)
	}
}

function decreasePage(){
	if (currentpage <= 0) {
		console.log("down")
		return
	} else {
		learn(currentsubject, currentlesson, currentpage - 1)
	}
}
