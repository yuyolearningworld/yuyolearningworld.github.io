import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express/index.js');
const app = express();




import * as test from "../json/json.js" 
test.test()
/*
var lesson = json.lessonJSON()
var subject = json.subjectJSON()
fs.writeFile("./@data/lesson.json", lesson, function(err){})
fs.writeFile("./@data/subject.json", subject, function(err){})
*/

app.get('/', function(req, res){ 
    res.send("test1") 
    res.end()}) 

app.listen(5000);
