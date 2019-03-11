let state = {
    "taskIdIncrement": 0,
    "listIdIncrement": 0,
    "lists": [{
        "name": 'things',
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
        "name": 'stuff',
        "id": 2,
        "tasks": []
    }
]
}

function completeTask(id){
    let taskElement = $(`#${id}`)
    let input = taskElement.find('input');
    let text = $('<div></div>')
    text.text(input.val())
    input.replaceWith(text)
    let deleteButton = taskElement.find('.delete');
    deleteButton.remove();
    let completeButton = taskElement.find('.complete');
    completeButton.remove();
    taskElement.addClass("done")

}
function deleteTask(id){
    let taskElement = $(`#${id}`)
    taskElement.remove();
}

function deleteList(id){
    let listElement = $(`#${id}`)
    listElement.remove();
}


// adding addTaskButton
function addTask(listElement, task){
        
    let taskElement = $('<div class="task"></div>');
    taskElement.attr("id", task.id); 
    let completeButton = $(`<button type="button" class="btn complete btn-primary">Complete</button>`);
    completeButton.click(event => {
     completeTask(task.id)
     
    })


    taskElement.append(completeButton);
    let deleteButton = $(`<button type="button" class="btn delete btn-secondary">Delete</button>`);
    deleteButton.click(event => {
        deleteTask(task.id);
       })
    taskElement.append(deleteButton);
    taskElement.append(`<div class="completeTask"><input></input></div>`);
    let input = taskElement.find('input');
    input.val(task.description); console.log(task); console.log(taskElement);
     listElement.append(taskElement);
}

$( document ).ready(function() { console.log('ready');
   let lists = $('.lists'); console.log(lists);
    state.lists.forEach(list => {
       let listElement = $('<div class="list"></div>')
       let listName = $(`<div></div>`);
       listName.text(list.name);
       listElement.append(listName);
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

    let addListButton = $(`#addList`);
    addListButton.click(event => {
        let listId = state.listIdIncrement++
        let listElement = $('<div class="list"></div>')
        let addTaskButton = $(`<button type="button" class="btn btn-secondary">Add Task</button>`);
        let deleteListButton = $(`<button type="button" class="btn btn-secondary">Delete</button>`);
        
        listElement.attr("id", listId)
       listElement.append(addTaskButton);
       listElement.append(deleteListButton);
       deleteListButton.click(event => {
           deleteList(listId)
       })
       addTaskButton.click(event => {
           let taskId = state.taskIdIncrement++
           let task = {"id": taskId,
           "completed": false,
           "deteted": false,
           "description": ""}
           addTask(listElement, task);
       })
       lists.append(listElement);
       let listName = $(`<div class="completeTask">List Name<input></input></div>`);
       let saveListName = $(`<button type="button" class="btn btn-secondary">Save</button>`);
       listElement.append(listName);
       listElement.append(saveListName);
       saveListName.click(event => {
        let input = listName.find('input');
        let text = $('<div></div>')
        text.text(input.val())
        listName.replaceWith(text) 
        saveListName.remove();
       })
    })
    
});



