//About Fader Function
//
const textDisplay = document.getElementById('fader')
const connectVal = [
    "<a href='#' target='_blank'>You should see my resume!</a>", 
    "<a href='https://www.linkedin.com/in/jonathandikteruk' target='_blank'>Connect with me on LinkedIn!</a>", 
    "<a href='#Contact'>Send me a message right now!</a>", 
    "Continue reading. Let's connect afterwards."
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
    const time = 8000
    setTimeout(fader, time)
}
//
fader()