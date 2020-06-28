const fs = require('fs');
function writeToFile(fileName, data) {
    console.log(fileName, data)
    console.log("In writeToFile")
    fs.writeFileSync(fileName, createReadMe(data), function (err) {
        if (err) { console.log(err.message) }
        else { console.log("Story Saved") }
      })
    }
      module.exports = sampleReadme;