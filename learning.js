

function learn(subject, lesson){
	fetch('./lessons.json')
	.then(response => response.json())
	.then(response => {
		globalThis.data = response
	})

	console.log(data)
}

function quiz(){}