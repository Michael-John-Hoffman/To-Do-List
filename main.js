let state = {
    "lists": [{
        "id": 1,
        "tasks": [{
            "completed": false,
            "deteted": false,
            "description": "Description goes here for task"
            

        },
        {
            "completed": false,
            "deteted": false,
            "description": "Description TWO goes here for task"
            
        },
        {
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


$( document ).ready(function() { console.log('ready');
   let lists = $('.lists'); console.log(lists);
    let emptyList = $('<div class="lists"></div>')
    let emptyTask = $('<div class="task"></div>')
    state.lists.forEach(list => {
       let listElement = emptyList.clone()
       list.tasks.forEach(task => {
           let taskElement = emptyTask.clone()
           taskElement.append(`<button type="button" class="btn btn-primary">Complete</button>`);
           taskElement.append(`<div clas="completeTask"><input></input></div>`);
           let input = taskElement.find('input');
           input.val(task.description); console.log(task); console.log(taskElement);
            listElement.append(taskElement);
        }) 
       lists.append(listElement);
    })

});



