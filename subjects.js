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
"> Subject 3 - Katakana":{"1":"What is Katakana?", "2":'The Long Sound', "3":"a,i,u,e,o and n", "4":"ka,ki,ku,ke,ko", "5":"sa,si,su,se,so", "6":"ta,ti,tu,te,to", "7":"na,ni,nu,ne,no", "8":"ha,hi,hu,he,ho", "9":"ma,mi,mu,me,mo", "10":"ya,yu,yo", "11":"ra,ri,ru,re,ro", "12":"wa,wo"},
"> Subject 4 - Daily words":{"1":"Greetings and Goodbyes", "2":"Directions", "3":"Giving and wanting", "4":"Basic objects and numbers"},
"> Subject 5 - N-level intro":{"1":"What are N-Levels?", "2":"Why are they important?", "3":'What is `Grammar` and `Kanji` ?'},
"> Subject 6 - N5 Grammar":{},
"> Subject 7 - N5 Kanji":{},
"> Subject 8 - N4 Grammar":{},
"> Subject 9 - N4 Kanji":{},
"> Subject 10 - N3 Grammar":{},
"> Subject 11 - N3 Kanji":{},
"> Subject 12 - N2 Grammar":{},
"> Subject 13 - N2 Kanji":{},
"> Subject 14 - N1 Grammar":{},
"> Subject 15 - N1 Kanji":{},
}

LESSONCONTENTS = [
	["1"],
	["2"],
	["3"],
	["4"],
	["5"],
	["6"],
	["7"],
	["8"],
	["9"],
	["10"],
	["11"],
	["12"],
	["13"],
	["14"],
	["15"],
	["16"],
	["17"],
	["18"],
	["19"],
	["20"],
	["21"],
	["22"],
	["23"],
	["24"],
	["25"],
	["26"],
	["27"],
	["28"],
	["29"],
	["30"],
	["31"],
	["32"],
	["33"],
]

createHTML()

import { writeFile } from 'fs'

// Data which will write in a file.
let data = "Learning how to write in a file."

// Write data in 'Output.txt' .
writeFile('lessons.json', data, (err) => {

    if (err) throw err;
})


function writePages(content){
	var errormsg = "There has been an error with this lesson"
	if (LESSONCONTENTS[content] == undefined) {return `"page1":"${errormsg}"
`}
	console.log(LESSONCONTENTS[content].length)
	var result = ``
	var counter = 0
	while (counter < LESSONCONTENTS[content].length) {
		var result = result + `"page${counter+1}":"${LESSONCONTENTS[content][counter]}",
	`
		counter++
	}
	var result = result.substring(0,result.length-3)
	return result
}
function createJSON() {
	var jsonresult = ""
	var subjects = Object.keys(SUBJECTSLESSONS)
	var lessons = []
	var subjectLength = []
	for (i=0; i<subjects.length; i++) {
		var templessons = Object.keys(SUBJECTSLESSONS[subjects[i]])
		for (l=1; l<templessons.length+1; l++) {
			lessons.push(SUBJECTSLESSONS[subjects[i]][l])
		}
		subjectLength.push(templessons.length)
	}
	console.log(lessons)
	console.log(subjectLength)
	var counttotal = 0
	for (i=0; i<subjectLength.length; i++) {
		var count = subjectLength[i]
		for (l=0; l<count; l++) {
			counttotal += 1
			jsonresult += `"S${String(i+1)}_L${String(l+1)}":{
	"title":"${lessons[counttotal-1]}",
	${writePages(counttotal-1)}},
`
		}
	}
	var result = JSON.parse(`{
		` + jsonresult.substring(0,jsonresult.length-2) + `
}`)
	return result
}



function createHTML(){
	var subjects = Object.keys(SUBJECTSLESSONS)
	for (i=0; i<subjects.length; i++) {
		document.write('<p class="subjecttext" id="subject'+ Number(i+1) +'" onclick="dropdown()">' + subjects[i] + '</p>')
		lessons = Object.keys(SUBJECTSLESSONS[subjects[i]])
		for (l=0; l<lessons.length; l++) {
			document.write(`<p class="lessontext" id="subject`+ Number(i+1) +`_lesson`+ Number(l+1) +`">` + SUBJECTSLESSONS[subjects[i]][lessons[l]] + `
				<a class="learntext" onclick="learn(`+ Number(i+1) +`,`+ Number(l+1) +`)">Start Lesson</a> </p>`)
		}
	}
}


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

