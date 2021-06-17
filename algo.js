export class Sort{
    
    playground = NaN
    win = NaN

    constructor(window){
        this.win = window
        this.playground = this.win.document.querySelector(".playground")
    }

    wait(x) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve("continue")
          }, x)
        })
      }

    changeColor(div1, div2, color){
        div1.style.backgroundColor = color
        div2.style.backgroundColor = color
    }

    changeColor(div, color){
        div.style.backgroundColor = color
    }

    changeHeight(i, j, arr){
        let iDiv = this.playground.querySelector(`#stair${i}`)
        let jDiv = this.playground.querySelector(`#stair${j}`)

        iDiv.style.height = `${arr[i] * 5}px`
        jDiv.style.height = `${arr[j] * 5}px`
    }

    swap(arr, i, j){
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

        this.changeHeight(i, j, arr)
    }

    async bubbleSort(arr) {
        const size = arr.length
        for(let i = 0; i < size - 1; i++){
            for(let j = 0; j < size - i - 1; j++){
                let iDiv = this.playground.querySelector(`#stair${j}`)
                let jDiv = this.playground.querySelector(`#stair${j + 1}`)

                this.changeColor(iDiv, jDiv, "red")
                // await this.wait(150)
                
                if(arr[j] > arr[j + 1]){
                    this.changeColor(iDiv, jDiv, "blue")
                    this.swap(arr, j, j + 1)
                    // await this.wait(300)
                }
                this.changeColor(iDiv, jDiv, "gold")
                // await this.wait(75)
            }
        }           
    }

    async selectionSort(arr){
        let sorted = 0
        for(let i = 0; i < arr.length - 1; i++){
            let minValIdx = i
            for(let j = i; j < arr.length; j++){
                if(arr[j] < arr[minValIdx]){
                    minValIdx = j
                }
            }
            // console.log(this.playground)
            let iDiv = this.playground.querySelector(`#stair${sorted}`)
            let jDiv = this.playground.querySelector(`#stair${minValIdx}`)
            this.changeColor(iDiv, jDiv, "red")
            await this.wait(1000)

            this.swap(arr, sorted, minValIdx)

            this.changeColor(minValIdx, "yellow")
            await this.wait(1000)
            
            sorted++
        }
    }

    insertionSort(arr){
        for(let i = 1; i < arr.length; i++){
            let j = i
            while(j > 0){
                if(arr[j] < arr[j - 1]){
                    this.swap(arr, j, j-1)
                    j--
                } else{
                    break
                }
            }
        }
    }

    merge(leftArr, rightArr){
        let i = 0
        let j = 0
        let sortedArr = []
        while(i < leftArr.length && j < rightArr.length){
            if(leftArr[i] < rightArr[j]){
                sortedArr.push(leftArr[i])
                i++
            } else{
                sortedArr.push(rightArr[j])
                j++
            }
        }

        while(i < leftArr.length){
            sortedArr.push(leftArr[i])
            i++
        }

        while(j < rightArr.length){
            sortedArr.push(rightArr[i])
            j++
        }

        return sortedArr
    }

    mergeSort(arr){
        if(arr.length === 1){
            return arr
        }

        const mid = Math.floor(arr.length / 2)

        const left = arr.slice(0, mid)
        const right = arr.slice(mid)

        let sorted = this.merge(this.mergeSort(left), this.mergeSort(right))
        return sorted
    }

    partition(arr, l, r, p){
        let swapPoint = l
        for(; l <= r; l++){
            if(arr[l] > p){
                continue
            } else{
                this.swap(arr, l, swapPoint)
                swapPoint++
            }
        }
        return --swapPoint
    }

    quickSort(arr, l = 0, r = arr.length - 1){
        if(l < r){
            const pivotIdx = this.partition(arr, l, r, arr[r])
            this.quickSort(arr, l, pivotIdx - 1)
            this.quickSort(arr, pivotIdx + 1, r)
            return arr
        }
    }

}

