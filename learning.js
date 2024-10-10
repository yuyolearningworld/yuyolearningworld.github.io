

function learn(){
	//var testhash = CryptoJS.MD5(event.srcElement.id).toString();
	fetch('/learning.js')
		.then((res) => console.log(res))
		.then((data) => console.log(data));

}
function quiz(){}