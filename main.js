let state = {
    "taskIdIncrement": 0,
    "listIdIncrement": 0,
    "lists": [{
        "id": 1,
        "tasks": [{
            "id": '1-1',
            "completed": false,
            "deteted": false,
            "description": "Description goes here for task"
            

        },
        {   "id": '1-2',
            "completed": false,
            "deteted": false,
            "description": "Description TWO goes here for task"
            
        },
        {   "id": '1-3',
            "completed": false,
            "deteted": false,
            "description": "Description THREE goes here for task"
            
        }
    ]
    }, {
        "id": 2,
        "tasks": []
    }
]
}

function completeTask(id){
    let taskElement = $(`#${id}`)
    let input = taskElement.find('input');
    input.prop("disabled", true)
}
function deleteTask(id){
    let taskElement = $(`#${id}`)
    taskElement.remove();
}
// adding addTaskButton
function addTask(listElement, task){
        
    let taskElement = $('<div class="task"></div>')
    taskElement.attr("id", task.id); 
    let completeButton = $(`<button type="button" class="btn btn-primary">Complete</button>`);
    completeButton.click(event => {
     completeTask(task.id)
    })


    taskElement.append(completeButton);
    let deleteButton = $(`<button type="button" class="btn btn-secondary">Delete</button>`)
    deleteButton.click(event => {
        deleteTask(task.id)
       })
    taskElement.append(deleteButton);
    taskElement.append(`<div clas="completeTask"><input></input></div>`);
    let input = taskElement.find('input');
    input.val(task.description); console.log(task); console.log(taskElement);
     listElement.append(taskElement);
}

$( document ).ready(function() { console.log('ready');
   let lists = $('.lists'); console.log(lists);
    let emptyList = $('<div class="lists"></div>')
    state.lists.forEach(list => {
       let listElement = emptyList.clone()
       list.tasks.forEach(task => {
           addTask(listElement, task)
        }) 
       lists.append(listElement);
       let addTaskButton = $(`<button type="button" class="btn btn-secondary">Add Task</button>`);
       listElement.append(addTaskButton);
       addTaskButton.click(event => {
           let taskId = state.taskIdIncrement++
           let task = {"id": taskId,
           "completed": false,
           "deteted": false,
           "description": ""}
           addTask(listElement, task);
       })
    })



});



