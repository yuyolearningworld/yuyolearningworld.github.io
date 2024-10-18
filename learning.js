
function learn(subject, lesson){
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
			console.log(response["__" + subject + lesson + "__"]["pages"]["page1"])
		})
	}

function quiz(){}
