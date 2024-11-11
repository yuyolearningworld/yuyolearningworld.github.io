//note: uninstall modules except 2 used

var fs = require('fs')
var papa = require('papaparse');

var subjectfile = fs.createReadStream('../../data/subject.csv');
var lessonfile = fs.createReadStream('../../data/lesson.csv');
var contentfile = fs.createReadStream('../../data/content.csv');

papa.parse(subjectfile, {complete: function(subject){
    papa.parse(lessonfile, {complete: function(lesson){
        papa.parse(contentfile, {complete: function(content){
            function main(subject,lesson,content) {
                var result = ``
                var contentCounter = 0
                for (i1=0; i1<subject[0].length; i1++) {
                    result += `    "${subject[0][i1]}":{`
                    for (i2=0; i2<lesson[i1].length; i2++){
                        result += `
        "${lesson[i1][i2]}":[${Array(content[contentCounter])}],`
                    contentCounter += 1
                    }
                    var result = result.substring(0,result.length-1) + `
    },
`
                }
                var result = `{
${result.substring(0,result.length-2)}
}`
            fs.writeFile('../../data/data.json',result, function (err) {
                if (err) throw err})
            }
            main(subject["data"],lesson["data"],content["data"])
        }})
    }})
}})

