

function learn(subject, lesson){
	fetch('./lessons.json')
	.then(response => response.json())
	.then(response => {
		 var data = response
	})

	console.log(data)
}

function quiz(){}