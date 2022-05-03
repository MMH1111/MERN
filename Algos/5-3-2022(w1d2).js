//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...

const insertionSort = (arr) => {
    for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<i; j++){

            if(arr[i]<arr[j]){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                console.log(arr)
            }

        }
    }
    return arr
}

console.log(insertionSort([6,4,5,2,8,14,1,3]));
// console.log(insertionSort([1,2,3,5,6,7,4]));