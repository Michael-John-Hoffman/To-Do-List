let state = {
    "lists": [{
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
    }]
}


$( document ).ready(function() {
   let lists = $('.lists');

    state.lists.forEach(list => {
    
    })
});



