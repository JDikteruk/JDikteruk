//About Fader Function
//
const textDisplay = document.getElementById('fader')
const connectVal = [
    "<a class='lead' href='#' target='_blank'>You should see my resume!</a>", 
    "<a class='lead' href='https://www.linkedin.com/in/jonathandikteruk' target='_blank'>Connect with me on LinkedIn!</a>", 
    "<a class='lead' href='#Contact'>Send me a message right now!</a>", 
    "<span class='lead' >Continue reading. Let's connect afterwards.</span>"
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