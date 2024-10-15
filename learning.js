

function learn(){
	fetch('./lessons.json')
	.then(response => response.json())
	.then(response => {
		console.log(response)
	})
}

function quiz(){}