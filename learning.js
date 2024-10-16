function getjson(){
	fetch('./lessons.json')
		.then(response => response.json())
		.then(response => {
			var data = response
			return data
		})
}

function learn(subject, lesson){
	data = getjson()
	console.log(data)
}

function quiz(){}