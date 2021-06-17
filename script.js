import { Sort } from './algo.js'

let container = document.querySelector(".container")
let bubble = document.querySelector("#bubble")
let selection = document.querySelector("#selection")
let insertion = document.querySelector("#insertion")
let merge = document.querySelector("#merge")
let quick = document.querySelector("#quick")
let playground = document.querySelector(".playground")
let replay = document.querySelector(".replay")
let replay_btn = document.querySelector("#replay-btn")


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

function buildStairs(arr){
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
}

async function startSequence(event) {
    const sort = new Sort(window)
    container.classList.remove("pause")
    container.classList.add("play")
    let isComplete = false
    if(event.target.id === "bubble"){
        isComplete = await sort.bubbleSort(arr)
    } else if(event.target.id === "selection") {
        isComplete = await sort.selectionSort(arr)
    } else if(event.target.id === "insertion") {
        isComplete = await sort.insertionSort(arr)
    } else if(event.target.id === "merge") {
        arr = sort.mergeSort(arr)
        buildStairs(arr) // will not work
    } else if(event.target.id === "quick") {
        isComplete = await sort.quickSort(arr) // not working perfectly
    }
    if(isComplete){
        setTimeout(endSequence, 5000)
    }
}

function endSequence(){
    replay.classList.add("on")
}

function resolveReplay(){
    container.classList.remove("play")
    container.classList.add("pause")
    replay.classList.remove("on")
    playground.innerHTML = null
    drive()
}

function drive(){
    arr = createArray()
    shuffleArray(arr)
    buildStairs(arr)
}

// driver code
let arr = []
drive()

// event listeners
bubble.addEventListener('click', startSequence)
selection.addEventListener('click', startSequence)
insertion.addEventListener('click', startSequence)
merge.addEventListener('click', startSequence)
quick.addEventListener('click', startSequence)
replay_btn.addEventListener('click', resolveReplay)
