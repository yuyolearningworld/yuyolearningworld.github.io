state = [
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
    [false],
]

function dropdown() {
    var current_id= event.srcElement.id
	var subject_element = document.getElementById(current_id)
	var subjectnum = Number(current_id.replace("subject",""))
	var stateIndex = subjectnum-1
	const subjectMax = 50
	for (var i=1; i < subjectMax; i++){
		var current_element = document.getElementById(current_id + "_lesson" + i)
		if (current_element == null){
			break;
		}
		if (state[stateIndex] == true){
			current_element.style.opacity = "0.0";
			current_element.style.display = "none";
			subject_element.innerText = subject_element.innerText.substr(1);
			subject_element.innerText = "> " + subject_element.innerText
		} 
		else {
			current_element.style.opacity = "1.0";
			current_element.style.display = "block";
			subject_element.innerText = subject_element.innerText.substr(1);
			subject_element.innerText = "- " + subject_element.innerText
		}
	}
	if (state[stateIndex] == true){
		state[stateIndex] = false
	}
	else{
		state[stateIndex] = true
	}
}