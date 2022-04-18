//About Fader Function
//
const textDisplay = document.getElementById('fader')
const connectVal = ["You should see my resume!", "Connect with me on LinkedIn!", "Send me a message right now!", "Continue reading. Let's connect afterwards."]
//
let i = 0
let currentFader = []
let isDone = false
//
function fader () {
    isDone=false
    if (i < connectVal.length) {
        currentFader.push(connectVal[i])
        textDisplay.innerHTML = currentFader[i]
        i++
    }
    if (i == connectVal.length) {
        i=0
    }
    const time = 8000
    setTimeout(fader, time)
}
//
fader()