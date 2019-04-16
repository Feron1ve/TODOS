//создание хранилищь
var store = {
    todos: [],
    todoend: [],
};

//Запись задачи и (перенос ее в список дел)
var addbutton = document.getElementById('add-button');

addbutton.addEventListener('click', () => {
        var textinput = document.getElementById('input-add');
        var newTodo = {
            check: false,
            text: textinput.value,
        }

        store.todos.push(newTodo);
        createTODO(newTodo);
    }

)
//запись в завершенные дела
//var completebutton = document.getElementById('completed-task');
//store.todoend.pop();
//создание Списка дел
var ul = document.getElementById('todo-list');
function createTODO(todo, index) {
    var li = document.createElement('li');

    var check = document.createElement('input');
    check.type='checkbox';
    check.className = "firstcheck";
    check.checked = todo.check;
    check.onclick = function() {
        store.todos = store.todos.filter(() => true);
       // alert('Клик!');
        var copy = confirm("Хотите перенести в список Заверешнных дел?");
        alert( copy );
    };

    var div = document.createElement('div');
    div.className = "text";
    div.innerHTML = todo.text;

    var edit = document.createElement('button');
    edit.className = "edit-button";
    edit.innerHTML = '';
    var del = document.createElement('button');
    del.className = "delete-button";
    del.innerHTML = '';
    li.appendChild(div);
    li.appendChild(check);
    li.appendChild(edit);
    li.appendChild(del);

    ul.appendChild(li);
}

for (let i = 0; i < store.todos.length; ++i) {
    var todo = store.todos[i];
    createTODO(todo, index);

}
