console.log('Is this working...')


const array = [1,2,3,4,5,6,7,8,9]

// console.log(array.push(10))
console.log(array.pop())
console.log(array)
console.log(array.length)
array[15] = 15
console.log(array, array.length)

for (const item in array){
    console.log(array[item], 'This is item..')
}


let obj = {
    fullName: "Banda Umamahesh",
    age: 90,
    firstName : "Umamahesh",
    lastName: "Banda",
}


for(const item in obj){
    console.log(obj[item])
    console.log(item, 'This is obj')
}
