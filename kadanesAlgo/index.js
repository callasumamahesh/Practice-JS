console.log('Working...')

function findBiggestNumberinArray(arr){
    let max = arr[0]
    for(i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    } 
    return max
}

const array = [25,4,9,78,5,6,4,69,455,64,65,6565,458895]
// console.time("Starting of function")
// console.log(findBiggestNumberinArray(array))
// console.timeEnd("Starting of function")



function maxSumSubArray(array){
    let max = array[0]
    let starIndex;
    let endIndex;
    for(i = 0; i < array.length; i++){ // n 
        let subMax = 0
        for(j = i; j < array.length; j++){
            subMax += array[j] 
            if(subMax > max){
                max = subMax
                starIndex = i,
                endIndex = j
            }
        }
    }
    return {
        sum : max,
        subArray : array.slice(starIndex, endIndex + 1)
    }
}

calcArray = [-2,1,-3,4,-1,2,1,-5,4]
// calcArray = [5,4,-1,7,8]
// console.log(maxSumSubArray(calcArray))




function KadenesAlgo(array){
    let sum = 0;
    let max = array[0]
    for(i = 0; i < array.length; i++){
        sum += array[i];
        if(sum > max){
            max = sum
        }
        if(sum < 0){
            sum = 0
        }
    }
    return max
}

console.log(KadenesAlgo(calcArray))
