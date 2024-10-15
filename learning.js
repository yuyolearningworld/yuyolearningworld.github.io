

function learn(){
	//var testhash = CryptoJS.MD5(event.srcElement.id).toString();
	fetch('./lessons.json')
	.then(response => response.json())
	.then(response => {
	
		console.log(response)
	
	})

}
function quiz(){}