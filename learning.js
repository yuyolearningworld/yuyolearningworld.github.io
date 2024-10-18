
function learn(subject, lesson){
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
			var totalitems = Object.keys(response["__" + subject + lesson + "__"])
			var data = []
			for(i=0; i<totalitems.length; i++){
				console.log(response[totalitems[i]])
			}
		})
	}

function quiz(){}
