
function learn(subject, lesson){
	window.location.replace("lesson.html")  
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

	document.write("test if can write in other documents")
		
	})
}

function quiz(){}
