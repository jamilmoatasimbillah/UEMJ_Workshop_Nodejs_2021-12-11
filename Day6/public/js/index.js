

const sectionTodoList = document.getElementById("todo-list")
const ol = sectionTodoList.getElementsByTagName("ol")[0]




var todolist = []

/**
 * This function is called immidiately after loading the applicaiton
 */
function loadMySavedData(){
    fetch('/api/todo/list', {method: "GET"})
    .then( (response) =>{
        response.json()
        .then( (body) => {
            todolist = body
        })
    })
}

/**
 * This function is called to save the todos in LocalStorage
 */
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




/**
 * This function is called to mark a todo is completed or not  
 */
function toggleCompleted(index) {
    todolist[index].isCompleted = !todolist[index].isCompleted
    fetch(`/api/toggleCompleted/${index}`, {method: "PUT"})
    renderMyTodoList()
}

function handleDeleteTask(index){
    todolist.pop(index)
    fetch(`/api/toggleCompleted/${index}`, {method: "DELETE"})
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
    
    fetch('/api/todo', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newTodoTask)
    })
    
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
// renderMyTodoList()