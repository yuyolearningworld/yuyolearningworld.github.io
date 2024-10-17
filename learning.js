function getJSON(){
	fetch('./lessons.json')
	.then(response => response.json())
	.then(response => {
		return response
	})
}


function learn(subject, lesson){
	console.log(getJSON())
}

function quiz(){}
