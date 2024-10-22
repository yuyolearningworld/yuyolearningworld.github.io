
function learn(subject, lesson){
	document.getElementById("animation_frame").style.animationName = "pagechange_left"
    document.getElementById("animation_frame").style.animationDuration = "2s"
    document.getElementById("animation_frame").style.animationFillMode = "forwards"
    setTimeout(function(){window.location.replace("lesson.html")},2000)  
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
