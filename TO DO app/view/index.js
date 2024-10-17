import api from "./api.js";

let id = -1;

const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
        taskName: document.getElementById('taskName').value,
        description: document.getElementById('description').value,
        status: document.getElementById('status').value,
    };

   getTasks();  
};

const uimaker = (tasks) => {
    const listElement = document.getElementById('taskList');
    listElement.innerHTML = '';

    tasks.forEach((task) => {
        const div = document.createElement('div');
        div.className = 'task-card';

        const taskName = document.createElement('h4');
        taskName.innerHTML = `Task Name: ${task.taskName}`;

        const description = document.createElement('p');
        description.innerHTML = `Description: ${task.description}`;

        const status = document.createElement('p');
        status.innerHTML = `Status: ${task.status}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = 'btn';
        deleteBtn.addEventListener('click', async () => {
            await api.delete(task._id);
            getTasks();
        });

        const updateBtn = document.createElement('button');
        updateBtn.innerHTML = 'Update';
        updateBtn.className = 'btn btn-secondary';
        updateBtn.addEventListener('click', () => handleUpdate(task));

        div.append(taskName, description, status, deleteBtn, updateBtn);
        listElement.append(div);
    });
};

const handleUpdate = (task) => {
    document.getElementById('taskName').value = task.taskName;
    document.getElementById('description').value = task.description;
    document.getElementById('status').value = task.status;
    document.getElementById('type').textContent = 'Update';
    id = task._id;
};

const getTasks = async () => {
    const tasks = await api.get();
    uimaker(tasks);
};

getTasks(); 

document.getElementById('taskForm').addEventListener('submit', handleSubmit); 