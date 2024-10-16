var data
fetch('./lessons.json')
	.then(response => response.json())
	.then(response => {
		var data = response
	})

function learn(subject, lesson){
	console.log(data)
}

function quiz(){}