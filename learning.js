var data

function learn(subject, lesson){
	fetch('./lessons.json')
	.then(response => response.json())
	.then(response => {
		data = response
	})

	console.log(data)
}

function quiz(){}