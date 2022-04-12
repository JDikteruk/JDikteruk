//Header Typed Function
//
//content="a Developer,a Problem Solver"
//
const textDisplay = document.getElementById('typed')
const values = ['a Developer', 'a Problem Solver']
//
let i = 0
let j = 0
let currentValue = []
let isDelete = false
let isEnd = false
//
function loop () {
    isEnd = false
    //textDisplay.innerHTML = currentValue.join('')
    if (i < values.length) {
        if (!isDelete && j <= values[i].length) {
            currentValue.push(values[i][j])
            j++
            textDisplay.innerHTML = currentValue.join('')
        }
        if(isDelete && j <= values[i].length){
            currentValue.pop(values[i][j])
            j--
            textDisplay.innerHTML = currentValue.join('')
        }
        if (j == values[i].length){
            isEnd = true
            isDelete = true
        }
        if(isDelete && j === 0){
            currentValue = []
            isDelete = false
            i++
            if(i == values.length){
                i=0
            }
        }

    }
    const speed = Math.random() * (80-50) + 50
    const normal = Math.random() * (300-150) + 150
    const time = isEnd ? 2000 : isDelete ? speed : normal
    setTimeout(loop, time)
}
//
loop()