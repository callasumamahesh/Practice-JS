// console.log('This is just')
// const info = {
//     name : "Uma mahesh",
//     age : 23,
// }
// function fun() {
//     return 5
// }

// const arraowFun = () => {
//     return 'This is a arrow function.'
// }

// console.log(typeof info,'is the Type of Info')
// console.log(typeof fun,'is the Type of Info')
// console.log(typeof arraowFun,'is the Type of Info')
// console.log(info.__proto__, 'This is prototype')
// console.log(fun.__proto__.__proto__,'is the prototype of fun')
// console.log(arraowFun.__proto__.__proto__,'is the prototype of arraowFun')

// let info = {
//     name: 'Uma',
//     age: 23,
//     printName(){
//         const name = 'Mahesh'
//         return `This is name ${this.name}`
//     } 
// }

// console.log(info.printName())

const calc = {
    total : 0,
    add(n){
        this.total += n
        return this
    },
    sub(n){
         this.total -= n 
         return this
    },
    mul(n){
         this.total *= n 
         return this
    },
    div(n){
         this.total /= n 
         return this 
    }
}
 
const result = calc.add(10).sub(4).mul(3).div(2).add(10)
console.log(result.total)

var Person2 = 'This is outside person'
const properties = {
    'Uma mahesh' : '20 Crores',
    'Person2' : "10 Crores",
    umamaheshProperty(){
        console.log(`Uma mahesh Property is ${this['Uma mahesh']}`)
    },
    Person2Property: () => {
        console.log(`Person2 Property is ${this.Person2}`)
    }
}

const sideProperties = {
    'Uma mahesh' : '200 Crores',
    'Person2' : "100 Crores",
}

const a = [1,2,3,4,5,6]
const b = [7,8,9]
console.log(a.push.apply(a, b),'This is apply method...')

properties.umamaheshProperty.call(sideProperties)
properties.umamaheshProperty()
properties.Person2Property()