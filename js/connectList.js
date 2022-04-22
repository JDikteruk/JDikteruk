//About Fader Function
//
const textDisplay = document.getElementById('fade')
const connectVal = [
    "<a id='fader' href='#' target='_blank'>You should see my resume!</a>", 
    "<a id='fader' href='https://www.linkedin.com/in/jonathandikteruk' target='_blank'>Connect with me on LinkedIn!</a>", 
    "<a id='fader' href='#Contact'>Send me a message right now!</a>", 
    "<span id='fader'>Continue reading. Let's connect afterwards.</span>"
]
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
    const time = 12000
    setTimeout(fader, time)
}
//
fader()