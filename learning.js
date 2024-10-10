import data from './lessons.json';

function learn(){
	//var testhash = CryptoJS.MD5(event.srcElement.id).toString();
	fetch('./lessons.json')
		.then((res) => console.log(res))
		.then((data) => console.log(data));

}
function quiz(){}