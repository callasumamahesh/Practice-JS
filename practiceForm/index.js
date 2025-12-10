console.log('Working in console')

let taskData=[]

function handleIncrement(){
    console.log('Increment')
    const number = document.querySelector('#number');
    const IncrementNumber = parseInt(number.textContent) + 1
    changeNumber(IncrementNumber)
}


function handleDecrement(){
    console.log('Decrement')
    const number = document.querySelector('#number');
    const DecrementNumber = parseInt(number.textContent) - 1
    changeNumber(DecrementNumber)
}

function changeNumber(textNumber){
    const number = document.querySelector('#number');
    number.textContent = textNumber
}

function submitTask(){
    const task = document.querySelector('#task-input').value;
    const tasksP = document.querySelector('.tasks');
    const checkBox = document.querySelector('#checkbox-input').checked;
    const singleTask = document.createElement('p');
    singleTask.textContent = task
    if(checkBox){
        tasksP.append(singleTask)
    }
    // console.log(task)
}

function handleCheckChange(){
    console.log('changed')
}


function handleRadioChange(){
    const radioElement = document.querySelector('#radio-input');
    console.log(radioElement, 'This is radio element')
}

function handleRadioChange1(){
    const radioElement = document.querySelector('#radio-input1');
    console.log(radioElement, 'This is radio element')
}