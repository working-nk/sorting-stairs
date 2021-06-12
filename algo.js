class Sort{
    swap(arr, i, j){
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    bubbleSort(arr) {
        const size = arr.length
        for(let i = 0; i < size - 1; i++){
            for(let j = 0; j < size - i - 1; j++){
                if(arr[j] > arr[j + 1]){
                    this.swap(arr, j, j + 1)
                }
            }
        }
        
    }

    selectionSort(arr){
        let sorted = 0
        for(let i = 0; i < arr.length - 1; i++){
            let minValIdx = i
            for(let j = i; j < arr.length; j++){
                if(arr[j] < arr[minValIdx]){
                    minValIdx = j
                }
            }
            this.swap(arr, sorted, minValIdx)
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

    quickSort(arr){
        
    }

}


// test driver code
let sort = new Sort()
let arr = [6, 5, 4, 3]
arr = sort.mergeSort(arr)
console.log(arr)