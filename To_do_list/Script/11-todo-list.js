const todoList = [] ;
// const todoList = [ 
//     { 
//         name : "Make Dinner" ,
//         dueDate : '2025-01-07'}, 
//     {   
//         name : "Wash Dishes ",
//         dueDate : '2025-01-07'
//     }
//     ] ;

    renderTodoList() ;                                          

function renderTodoList()
{
    let todoListHTML = ''; 

    for(let i = 0 ; i < todoList.length ; i++)
    {
        let todoObject = todoList[i] ; 
        // const name = todoObject.name ; 
        // const dueDate = todoObject.dueDate ; 
        const {name , dueDate} = todoObject ; 

        const html = `

        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick = "
            todoList.splice(${i},1);
            renderTodoList() ;
        " class = "delete-todo-button">Delete</button> 
        `;
        todoListHTML += html ; 
    }

    // console.log(todoListHTML) ;

    document.querySelector('.js-todo-list')
        .innerHTML =  todoListHTML ;
}


function addTodo()
{
   const inputElement =  document.querySelector('.js-name-input');
   const name = inputElement.value ;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value ; 

   //    todoList.push({name : name  , dueDate : dueDate}) ; 
   todoList.push({name , dueDate}) ; 
//    console.log(todoList) ;

   inputElement.value = '' ;

   renderTodoList() ;
}
