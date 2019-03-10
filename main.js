let state = {
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

$( document ).ready(function() { console.log('ready');
   let lists = $('.lists'); console.log(lists);
    let emptyList = $('<div class="lists"></div>')
    let emptyTask = $('<div class="task"></div>')
    state.lists.forEach(list => {
       let listElement = emptyList.clone()
       list.tasks.forEach(task => {
           let taskElement = emptyTask.clone()
           taskElement.attr("id", task.id); 
           let completeButton = $(`<button type="button" class="btn btn-primary">Complete</button>`);
           completeButton.click(event => {
            completeTask(task.id)
           })

           taskElement.append(completeButton);
           taskElement.append(`<button type="button" class="btn btn-secondary">Delete</button>`);
           taskElement.append(`<div clas="completeTask"><input></input></div>`);
           let input = taskElement.find('input');
           input.val(task.description); console.log(task); console.log(taskElement);
            listElement.append(taskElement);
        }) 
       lists.append(listElement);
    })

});



