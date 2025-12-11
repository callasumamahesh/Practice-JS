console.log('Working...')

arr = [4,5,978,655,6,56,4,68,455,2585] // Length 10
k = 3

const slidingWindow = (arr, k) => {
    let result = []
    const arrLength = arr.length;
    for(i = 0; i <= arrLength - k; i++){
        max = arr[i]
        for(j = 1; j < k ; j++){ 
            if(arr[i + j] > max){ // Here i is very important, i value is shifting the window
                max = arr[i + j]
            }
        }
        result.push(max)
    }
    return result;
}

console.log(slidingWindow(arr, k))
