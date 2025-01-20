window.addEventListener("close", function(){
    window.location.reload()
})

function subjectOVERWRITE(){
    fetch("../data/data.json", {method: 'GET'})
    .then(data => data.json())
    .then(data => {
        var subject = Object.keys(data)
        var lesson = []
        subject.forEach(function(subjects){
            lesson.push(Object.keys(data[subjects]))
        })
        document.open()
        document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Subjects</title>
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <link rel="icon" href="../misc/logo/logo30x30.png">
        <link rel="manifest" href="../data/manifest.webmanifest"/>
    </head>
    <body>

        <div id="darkmode"></div>
        <script src="../javascript/darkmode.js"></script>

        <script src="../javascript/navigation.js"></script>
        
        <img id="animation_frame" src="../misc/assets/animation_frame.png">
        
        <div class="grid_ribbon">
            <img onclick="subjectpress()" id="logo" src="../misc/assets/yuyo_logo.png">
            <img onclick="subjectpress()" id="subjects" src="../misc/assets/subjects.png">
            <img onclick="koikoipress()" id="koikoi" src="../misc/assets/koikoi.png">
            <img onclick="musicpress()" id="settings" src="../misc/assets/music.png">
            <img onclick="darklight()" id="darklight" src="../misc/assets/darkmode.png">
        </div>
        
        <img id="ribbon_underline" src="../misc/assets/ribbon_underline.png">

        <script src="../javascript/dropdown.js"></script>
        
        <script src="../javascript/koikoi.js"></script>

        <script src="../javascript/lesson.js"></script>

        <div id="subjectarea">

            `)
        for (i1=0; i1<subject.length; i1++){
            document.write(`<p class="subjecttext" id=subject${i1+1} onclick="dropdown(this.id)">${subject[i1]}<p>`)
            for (i2=0; i2<lesson[i1].length; i2++){
                document.write(`<p class="lessontext" id="subject${i1+1}_lesson${i2+1}"> ${lesson[i1][i2]}
    <a class="learntext" id="subject${i1+1}_lesson${i2+1}" onclick="startLesson(this.id)">Start Lesson </a> </p>`)
            }
        }
        document.write("</div>")
        document.close()
    })
}

subjectOVERWRITE()