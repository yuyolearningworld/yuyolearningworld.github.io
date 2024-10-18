
function learn(subject, lesson){
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
			var totalitems = Object.keys(response["__" + subject + lesson + "__"])
			console.log(totalitems)
		})
	}

function quiz(){}
