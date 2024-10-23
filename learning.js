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
    <title>Yuyo Learning World</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    
    <script src="ribbonbuttons.js"></script>
    
    <img id="animation_frame" src="assets\\animation_frame.png">

    <div class="grid_ribbon">
        <img id="logo" src="assets\\yuyo_logo.png">
        <img onclick="subjectpress()" id="subjects" src="assets\\subjects.png">
        <img  onclick="koikoipress()" id="koikoi" src="assets\\koikoi.png">
        <img  onclick="settingspress()" id="settings" src="assets\\settings.png">
    </div>
    <img id="ribbon_underline" src="assets\\ribbon_underline.png">
</body>
</html>
`
	lessonpage.document.write(html)
		
	})
}

function quiz(){}
