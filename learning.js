function learn(subject, lesson){
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
	currentdata = "__" + subject + lesson + "__"
	var totalitems = Object.keys(response[currentdata])
	var title = response[currentdata]["title"]
	var numofpages = totalitems.length - 1
	var pageContents = []
	for (i=1; i<numofpages; i++){
		pageContents.push(response[currentdata]["page" + i])
	}
	var lessonpage = window.open()
	
	var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>` + title + `</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<p id="lessontitle">` + title + `</p>
	<div id="lessontextbox">` + pageContents[0] + `</div>

	<img class="arrow" id="rightarrow" src="assets\\rightarrow.png">
	<img class="arrow" id="leftarrow" src="assets\\leftarrow.png">
	
</body>
</html>
`
	lessonpage.document.write(html)
		
	})
}

function quiz(){}
