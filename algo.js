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

