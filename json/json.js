import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const papa = require('papaparse')

//const subject = () => {fs.readFile("./@data/subject.csv")}
//const lesson = () => {fs.readFile("./@data/lesson.csv")}
//const content = () => {fs.readFile("./@data/content.csv")}
// ^^ will update with csv data

export function test(){
    var test = papa.parse(`test,test,test
test,test,test`)
    console.log()
    console.log(test)
}


export function subjectJSON() {

}

export function lessonJSON(
){
    function writePages(index){
		var errormsg = "There has been an error with this lesson"
		if (LESSONCONTENTS[index] == undefined) {return `"page1":"${errormsg}"
	`}
		var result = ``
		var counter = 0
		while (counter < LESSONCONTENTS[index].length) {
			var result = result + `"page${counter+1}":"${LESSONCONTENTS[index][counter]}",`
			counter++
		}
		var result = result.substring(0,result.length-1) + `
		`
		return result
	}
	var result = ""
    var subjects = Object.keys(subjectLesson)
    var lessons = []
    var subjectLength = []
    for (var i=0; i<subjects.length; i++) {
        var templessons = Object.keys(subjectLesson[subjects[i]])
        for (l=1; l<templessons.length+1; l++) {
            lessons.push(subjectLesson[subjects[i]][l])
        }
        subjectLength.push(templessons.length)
    }
    var counttotal = 0
    for (var i=0; i<subjectLength.length; i++) {
        var count = subjectLength[i]
        for (var l=0; l<count; l++) {
            counttotal += 1
            result += `    "S${String(i+1)}_L${String(l+1)}":{
        "title":"${lessons[counttotal-1]}",
        ${writePages(counttotal-1)}},
`}}
    var result = `{
    ${result.substring("    ".length,result.length-2)}
}`
    return result
}
