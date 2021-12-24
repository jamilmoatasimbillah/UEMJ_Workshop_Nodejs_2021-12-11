

const sectionTodoList = document.getElementById("todo-list")
const ol = sectionTodoList.getElementsByTagName("ol")[0]




var todolist = []


function loadMySavedData(){
    const myTodoListAsJsonString = window.localStorage.getItem("mytodolist")
    if(!myTodoListAsJsonString) return
    const mySavedTodoList = JSON.parse(myTodoListAsJsonString)
    if(mySavedTodoList instanceof Array) todolist = mySavedTodoList
}
function saveMyTodoListData(){
    const myTaskInJsonString = JSON.stringify(todolist)
    window.localStorage.setItem("mytodolist", myTaskInJsonString)
}


function renderMyTodoList() {
    var todolistString = ""
    for (let index in todolist) {
        const todo = todolist[index]
        if (todo.isCompleted) {
            todolistString = todolistString +
                `<li class='completed' onclick="toggleCompleted(${index})">
                   
                    ${todo.task}
                    <button onclick="handleDeleteTask(${index})">Delete</button>
                    
                </li>\n`
        } else {
            todolistString = todolistString +
                `<li onclick="toggleCompleted(${index})">
                    
                    ${todo.task}
                    <button onclick="handleDeleteTask(${index})">Delete</button>
                    
                </li>\n`
        }
    }
    ol.innerHTML = todolistString
    saveMyTodoListData()
}





function toggleCompleted(index) {
    todolist[index].isCompleted = !todolist[index].isCompleted
    renderMyTodoList()
}

function handleDeleteTask(index){
    todolist.pop(index)
    renderMyTodoList()
}

const sectionNewTask = document.getElementById("new-task")
const button = sectionNewTask.getElementsByTagName("button")[0]

// Method 1 - How to add event listener
/**
 * element.addEventListener( event_name, listener )
 * 
 * listener is nothing but a function
 */
function handleButtonClick(event) {
    const input = sectionNewTask.getElementsByTagName("input")[0]
    const newTodoTask = { task: input.value, isCompleted: false }
    todolist.push(newTodoTask)
    renderMyTodoList()
    input.value = ""
}
button.addEventListener("click", handleButtonClick)

// Method 2 - How to add event listener
/*
    Define a function, and call it from the html tag with correct event name
    Example: Listening on click event of a button
    <button onclick="clickHandler()">Click Me</button>
*/
function handleChangeInput(element) {
    console.log("The Input is changed to ", element.value)
}




loadMySavedData()
renderMyTodoList()