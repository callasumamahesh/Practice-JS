
class Stack {
    constructor(stackLength) {
        this.stack = []
        this.stackCompleteLength = stackLength
    }

    push(element) {
        if (this.stack.length === this.stackCompleteLength) {
            return 'Max length reached...'
        }
        else {
            this.stack.push(element)
            return 'Element Pushed...'
        }
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        else {
            this.stack.pop()
            return 'Element Deleted...'
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isPeak() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1]
        }
        else {
            return "Stack is empty..."
        }
    }

    isShow() {
        return this.stack;
    }

}

const Stack1 = new Stack(10)
// console.log(Stack1.push(10)) 
// console.log(Stack1.push(20)) 
// console.log(Stack1.push(30)) 
// console.log(Stack1.push(40)) 
// console.log(Stack1.push(50)) 
// console.log(Stack1.isShow())
// console.log(Stack1.pop())
// console.log(Stack1.pop())
// console.log(Stack1.pop())
// console.log(Stack1.pop())
// console.log(Stack1.pop())
// console.log(Stack1.isEmpty())
// console.log(Stack1.isShow())
// console.log(Stack1.isPeak())

//  ({[]}) => true

function isOrderCorrect(str) {
    let resultArray = [];
    if (typeof str !== "string") {
        return "Please enter a string..."
    }
    for (const item of str) {
        if (item === "[" || item === "{" || item === "(") {
            resultArray.push(item)
        }
        else if (item === "}" || item === "]" || item === ")") {
            if (resultArray.length === 0) {
                return false
            }
            const lastElement = resultArray[resultArray.length - 1]
            // console.log(lastElement,item, 'This is last element....')
            if ((lastElement === "{" && item === "}") || (lastElement === "[" && item === "]") || (lastElement === "(" && item === ")")) {
                resultArray.pop()
            }
        }
        else {
            return "Please Enter a valid string..."
        }
    }
    if (resultArray.length === 0) {
        return true
    }
    else {
        return false
    }
}

console.log(isOrderCorrect("}{}"))
