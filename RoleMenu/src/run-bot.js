const activateBtn = document.getElementById("startbutton")

const botjs = require('./modules/bot.js')

activateBtn.onclick = botjs.botsrc()
activateBtn.onclick = clicked()

async function clicked() {
    console.log("Clicked")
}