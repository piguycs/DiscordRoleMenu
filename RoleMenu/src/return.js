const readBtn = document.getElementById("read")

readBtn.onclick = outputNew()

async function outputNew(){
    const lineReader = require('line-reader');
    var out1 = ""

    lineReader.eachLine('temp.txt', function (line) {
        out1 = out1.concat(line)
        console.log(line);
    });
    document.getElementById("out1").innerHTML = out1
}