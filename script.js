import { Sort } from './algo.js'

let container = document.querySelector(".container")
let bubble = document.querySelector("#bubble")
let selection = document.querySelector("#selection")
let insertion = document.querySelector("#insertion")
let merge = document.querySelector("#merge")
let quick = document.querySelector("#quick")
let playground = document.querySelector(".playground")
let replay = document.querySelector("#replay")


// functions to do stuff
function createArray() {
    let arr = []

    for(var i = 1; i < 92; i++){
        arr.push(i)
    }

    return arr
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function startSequence(event) {
    const sort = new Sort(window)
    sort.bubbleSort(arr)
    container.classList.remove("pause")
    container.classList.add("play")
}

// driver code
let arr = createArray()
shuffleArray(arr)

arr.forEach(
    (value, index) => {
        let player = document.createElement("div")
        player.classList.add("child")
        player.id = "stair" + index
        value *= 5
        player.style.height = `${value}px`
        if(index > 0){
            let leftVal = index * 15
            player.style.left = `${leftVal}px`
        }
        playground.appendChild(player)
    }
)



// event listeners
bubble.addEventListener('click', startSequence)
