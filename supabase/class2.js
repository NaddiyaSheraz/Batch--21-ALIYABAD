const { createClient } = supabase;

const supabaseURL = 'https://dugptyifjnfzxuvgkzqw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1Z3B0eWlmam5menh1dmdrenF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwNjc0MTYsImV4cCI6MjEwNjY0MzQxNn0.4rtRsciKtwIt3QE6rTy3HS9sWmqTVRr_N7EXD9-Kb48';

const supabaseclient = createClient(supabaseURL, supabaseKey)

// Todo data
let todos = [];

// HTML elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");


// =========================
// ADD TODO
// =========================

addBtn.addEventListener("click", async function () {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const newTodo = {
        // id: Date.now(),
        text: task,
        iscompleted: false
    };

    // todos.push(newTodo);
    // commands
    // Grant insert on table public.todoss to anon;
    // GRANT USAGE, SELECT ON SEQUENCE public.todoss_id_seq TO anon;

    const { error } = await supabaseclient
        .from('todoss')
        .insert(newTodo);

    if (error) {
        console.log("there is an error", error);
    } else {
        console.log("kaam ho gaya", newTodo.text)
    }

    taskInput.value = "";

    renderTodos();
});


async function gettodo() {
    console.log('fetch function is working')
    const { data, error } = await supabaseclient
        .from('todoss')
        .select('*')

    if (error) {
        console.log("there is an error", error)
    }

    todos = data;
    renderTodos();
}

gettodo();


// =========================
// SHOW TODOS
// =========================

function renderTodos() {

    todoList.innerHTML = "";

    todos.forEach(function (todo) {

        const todoDiv = document.createElement("div");

        todoDiv.className = "todo";

        todoDiv.innerHTML = `
            <div class="todo-text ${todo.isCompleted ? "completed" : ""}">
                ${todo.text}
            </div>

            <div class="actions">

                <button 
                    class="edit-btn"
                    onclick="editTodo(${todo.id})"
                >
                    Edit
                </button>

                <button 
                    class="delete-btn"
                    onclick="deleteTodo(${todo.id})"
                >
                    Delete
                </button>

            </div>
        `;

        todoList.appendChild(todoDiv);
    });
}

// =========================
// DELETE TODO
// =========================

async function deleteTodo(id) {
    console.log("hello every one")

    const data = await supabaseclient
        .from('todoss')
        .delete()
        .eq('id', id)
        .select()

    todos = todos.filter(function (todo) {
        return todo.id !== id;
    });


    todos = data;
    renderTodos();
}


// =========================
// EDIT TODO
// =========================


async function editTodo(id) {

    const todo = todos.find(function (todo) {
        return todo.id === id;
    });

    const newTask = prompt("Edit your task:", todo.text);

    if (newTask === null) {
        return;
    }

    if (newTask.trim() === "") {
        return;
    }

    const { data, error } = await supabaseclient
        .from("todosss")
        .update({
            text: newTask.trim()
        })
        .eq("id", id)
        .select();

    console.log("UPDATE DATA:", data);
    console.log("UPDATE ERROR:", error);

    if (error) {
        console.log("update nhi huwa", error);
        return;
    }

    todo.text = newTask.trim();

    renderTodos();
}