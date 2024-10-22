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
	var lessonpage = window.open("lesson.html")
	lessonpage.document.write("<title> test </title>")
		
	})
}

function quiz(){}
