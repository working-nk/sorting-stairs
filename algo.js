export class Sort{
    
    playground = NaN
    win = NaN
    waitTime = 25

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
        if(typeof div1 !== "undefined"){
            div1.style.backgroundColor = color
        }
        if(typeof div2 !== "undefined"){
            div2.style.backgroundColor = color
        }
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
        let sorted = size - 1
        for(let i = 0; i < size - 1; i++){
            for(let j = 0; j < size - i - 1; j++){
                let iDiv = this.playground.querySelector(`#stair${j}`)
                let jDiv = this.playground.querySelector(`#stair${j + 1}`)

                this.changeColor(iDiv, jDiv, "red")
                await this.wait(this.waitTime)
                
                if(arr[j] > arr[j + 1]){
                    this.changeColor(iDiv, jDiv, "blue")
                    this.swap(arr, j, j + 1)
                    await this.wait(this.waitTime)
                }
                this.changeColor(iDiv, jDiv, "gold")
                await this.wait(this.waitTime)
            }
            this.changeColor(this.playground.querySelector(`#stair${sorted}`), undefined, "cyan")
            sorted--
        }     
        this.changeColor(this.playground.querySelector(`#stair${sorted}`), undefined, "cyan")  
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
            let iDiv = this.playground.querySelector(`#stair${sorted}`)
            let jDiv = this.playground.querySelector(`#stair${minValIdx}`)
            this.changeColor(iDiv, jDiv, "blue")
            await this.wait(this.waitTime)
            
            this.swap(arr, sorted, minValIdx)
            await this.wait(this.waitTime)
            
            this.changeColor(jDiv, undefined, "gold")
            this.changeColor(iDiv, undefined, "cyan")
            await this.wait(this.waitTime)
            
            sorted++
        }
        this.changeColor(this.playground.querySelector(`#stair${sorted}`), undefined, "cyan")  
    }

    async insertionSort(arr){
        let sorted = arr.length - 1
        for(let i = 1; i < arr.length; i++){
            let j = i
            while(j > 0){
                let iDiv = this.playground.querySelector(`#stair${j}`)
                let jDiv = this.playground.querySelector(`#stair${j - 1}`)

                this.changeColor(iDiv, jDiv, "red")
                await this.wait(this.waitTime)

                if(arr[j] < arr[j - 1]){
                    this.changeColor(iDiv, jDiv, "blue")
                    this.swap(arr, j, j-1)

                    await this.wait(this.waitTime)
                    j--
                } else{
                    this.changeColor(iDiv, jDiv, "gold")
                    await this.wait(this.waitTime)
                    break
                }
                this.changeColor(iDiv, jDiv, "gold")
                await this.wait(this.waitTime)
            }
        }
        while(sorted > -1){
            this.changeColor(this.playground.querySelector(`#stair${sorted}`), undefined, "cyan")
            await this.wait(50)
            sorted--
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

    async partition(arr, l, r){
        let temp = l
        while(temp <= r){
            this.changeColor(this.playground.querySelector(`#stair${temp}`), undefined, "grey")
            temp++
        }
        temp = l
        await this.wait(1000)
        let p = arr[r]
        let swapPoint = l
        for(; l <= r; l++){
            if(arr[l] > p){
                continue
            } else{
                this.swap(arr, l, swapPoint)
                swapPoint++
                await this.wait(10)
            }
        }

        if(swapPoint !== null){
            this.changeColor(this.playground.querySelector(`#stair${swapPoint - 1}`), undefined, "cyan")
            await this.wait(1000)
        }

        while(temp <= r){
            if(temp === swapPoint - 1){
                temp++ 
                continue
            }
            this.changeColor(this.playground.querySelector(`#stair${temp}`), undefined, "gold")
            temp++
        }
        await this.wait(1000)
        return --swapPoint
    }

    async quickSort(arr, l = 0, r = arr.length - 1){
        if(l <= r){
            const pivotIdx = await this.partition(arr, l, r)
            console.log(pivotIdx)
            this.quickSort(arr, l, pivotIdx - 1)
            await this.wait(100)
            this.quickSort(arr, pivotIdx + 1, r)
            await this.wait(100)
        }
    }

}

