// false = drop down closed
// true = drop down open
// reference = index + 1 e.g. subject1 = state[0]
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

SUBJECTSLESSONS = {

"> Subject 1 - Romaji":{"1":"Introduction to Yuyo Learning World", "2":"What is romaji?", "3":"Why is Romaji useful?"},
"> Subject 2 - Hiragana":{"1":"What is Hiragana?", "2":"a,i,u,e,o and n", "3":"ka,ki,ku,ke,ko", "4":"sa,si,su,se,so", "5":"ta,ti,tu,te,to", "6":"na,ni,nu,ne,no", "7":"ha,hi,hu,he,ho", "8":"ma,mi,mu,me,mo", "9":"ya,yu,yo", "10":"ra,ri,ru,re,ro", "11":"wa,wo"},
"> Subject 3 - Katakana":{"1":"What is Katakana?", "2":'The Long Sound"', "3":"a,i,u,e,o and n", "4":"ka,ki,ku,ke,ko", "5":"sa,si,su,se,so", "6":"ta,ti,tu,te,to", "7":"na,ni,nu,ne,no", "8":"ha,hi,hu,he,ho", "9":"ma,mi,mu,me,mo", "10":"ya,yu,yo", "11":"ra,ri,ru,re,ro", "12":"wa,wo"},
"> Subject 4 - Daily words":{"1":"Greetings and Goodbyes", "2":"Directions", "3":"Giving and wanting", "4":"Basic objects and numbers", "5":"What are N levels?", "6":"Why are they important?", "7":'What is "Grammar" and "Kanji"?'},
"> Subject 5 - N-level intro":{"1":"What are N-Levels?", "2":"Why are they important?", "3":'What is "Grammar" and "Kanji"?'},
"> Subject 6 - N5 Grammar part 1":{},
"> Subject 7 - N5 Grammar part 2":{},
"> Subject 8 - N5 Grammar part 3":{},
"> Subject 9 - N5 Kanji part 1":{},
"> Subject 10 - N5 Kanji part 2":{},
"> Subject 11 - N5 Kanji part 3":{},
"> Subject 12 - N4 Grammar part 1":{},
"> Subject 13 - N4 Grammar part 2":{},
"> Subject 14 - N4 Grammar part 3":{},
"> Subject 15 - N4 Kanji part 1":{},
"> Subject 16 - N4 Kanji part 2":{},
"> Subject 17 - N4 Kanji part 3":{},
"> Subject 18 - N3 Grammar part 1":{},
"> Subject 19 - N3 Grammar part 2":{},
"> Subject 20 - N3 Grammar part 3":{},
"> Subject 21 - N3 Grammar part 4":{},
"> Subject 22 - N3 Kanji part 1":{},
"> Subject 23 - N3 Kanji part 2":{},
"> Subject 24 - N3 Kanji part 3":{},
"> Subject 25 - N3 Kanji part 4":{},
"> Subject 26 - N3 Kanji part 5":{},
"> Subject 27 - N3 Kanji part 6":{},
"> Subject 28 - N2 Grammar part 1":{},
"> Subject 29 - N2 Grammar part 2":{},
"> Subject 30 - N2 Grammar part 3":{},
"> Subject 31 - N2 Grammar part 4":{},
"> Subject 32 - N2 Kanji part 1":{},
"> Subject 33 - N2 Kanji part 2":{},
"> Subject 34 - N2 Kanji part 3":{},
"> Subject 35 - N2 Kanji part 4":{},
"> Subject 36 - N2 Kanji part 5":{},
"> Subject 37 - N2 Kanji part 6":{},
"> Subject 38 - N1 Grammar part 1":{},
"> Subject 39 - N1 Grammar part 2":{},
"> Subject 40 - N1 Grammar part 3":{},
"> Subject 41 - N1 Grammar part 4":{},
"> Subject 42 - N1 Grammar part 5":{},
"> Subject 43 - N1 Kanji":{}


}

function createHTML(){
	var subjects = Object.keys(SUBJECTSLESSONS)
	console.log(subjects.length)
	for (i=0; i<subjects.length; i++) {
		document.write('<p class="subjecttext" id="subject'+ Number(i+1) +'" onclick="dropdown()">' + subjects[i] + '</p>')
		lessons = Object.keys(SUBJECTSLESSONS[subjects[i]])
		for (l=0; l<lessons.length; l++) {
			document.write(`<p class="lessontext" id="subject`+ Number(i+1) +`_lesson`+ Number(l+1) +`">` + SUBJECTSLESSONS[subjects[i]][lessons[l]] + `
				<a class="learntext" onclick="learn(`+ Number(i+1) +`,`+ Number(l+1) +`)">Start Lesson</a> </p>`)
		}
	}
}
createHTML()


function dropdown() {
    var current_id= event.srcElement.id
	var subject_element = document.getElementById(current_id)
	var subjectnum = Number(current_id.replace("subject",""))
	var stateIndex = subjectnum-1
	const subjectMax = 50
	for (i=1; i < subjectMax; i++){
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