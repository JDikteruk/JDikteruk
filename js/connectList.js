//About Fader Function
//
const display = document.getElementById('fader')
const connectVal = [
    "<a class='lead' href='/assets/Jonathan Dikteruk Resume 22.pdf' target='_blank'>You should see my resume!</a>", 
    "<a class='lead' href='https://www.linkedin.com/in/jonathandikteruk' target='_blank'>Connect with me on LinkedIn!</a>", 
    "<a class='lead' href='#Contact'>Send me a message right now!</a>", 
    "<span class='lead' ><u>Continue reading. Let's connect afterwards.</u></span>"
]
//
let n = 0
let currentFader = []
let isDone = false
//
function fader () {
    isDone=false
    if (n < connectVal.length) {
        currentFader.push(connectVal[n])
        display.innerHTML = currentFader[n]
        n++
    }
    if (n == connectVal.length) {
        n=0
    }
    const time = 12000
    setTimeout(fader, time)
}
//
fader()