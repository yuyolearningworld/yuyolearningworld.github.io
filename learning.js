
function learn(subject, lesson){
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {

			currentdata = "__" + subject + lesson + "__"

			var totalitems = Object.keys(response[currentdata])
			console.log(totalitems)

			var title = response[currentdata][totalitems[0]][0]
			console.log(title)
		})
	}

function quiz(){}
