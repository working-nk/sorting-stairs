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

    mergeSort(arr){

    }

    quickSort(arr){
        
    }

}


// test driver code
let sort = new Sort()
arr = [6, 5, 4, 3]
sort.insertionSort(arr)
console.log(arr)