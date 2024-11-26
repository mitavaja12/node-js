const expressFramework = require('express');
const application = expressFramework();

application.use(expressFramework.json());

let todosList = [
    { task: "HTML", completed: true, identifier: 1 },
    { task: "JavaScript", completed: true, identifier: 2 },
    { task: "React", completed: false, identifier: 3 }
];

application.get('/', (request, response) => {
    response.send('Welcome to the todo API');
});

application.get('/todos', (request, response) => {
    response.json(todosList);
});

application.post('/addtodo', (request, response) => {
    const { task, completed } = request.body;

    if (!task || completed === undefined) {
        return response.status(400).send({ error: "Invalid data" });
    }

    const newTask = {
        task,
        completed,
        identifier: todosList.length + 1
    };

    todosList.push(newTask);
    response.status(201).send(newTask);
});

application.patch("/update/:identifier", (request, response) => {
    const { identifier } = request.params;
    const { task, completed } = request.body;
    console.log(identifier);

    const taskIndex = todosList.findIndex((todo) => todo.identifier == identifier);
    if (taskIndex === -1) {
        return response.status(404).send("Task not found!");
    }

    todosList[taskIndex].task =
        typeof task === "string" ? task : todosList[taskIndex].task;

    todosList[taskIndex].completed =
        typeof completed === "boolean"
            ? completed
            : todosList[taskIndex].completed;

    response.send(todosList[taskIndex]);
});

application.delete('/delete/:identifier', (request, response) => {
    const { identifier } = request.params;
    const taskIndex = todosList.findIndex(t => t.identifier === parseInt(identifier));

    if (taskIndex === -1) {
        return response.status(404).send({ error: "Task not found" });
    }

    let removedTask = todosList.splice(taskIndex, 1)[0];
    response.send({ removedTask, tasks: todosList });
});

application.get('/todo/:identifier', (request, response) => {
    const { identifier } = request.params;
    const task = todosList.find(t => t.identifier === parseInt(identifier));

    if (!task) {
        return response.status(404).send({ error: "Task not found" });
    }

    response.send(task);
});

application.get('/findbystatus', (request, response) => {
    const { completed } = request.query;

    if (completed === undefined) {
        return response.status(400).send({ error: "Query parameter 'completed' is required" });
    }

    const filteredTasks = todosList.filter(todo => String(todo.completed) === completed);
    response.send(filteredTasks);
});

application.listen(8090, () => {
    console.log(`Server is running on 8090`);
});
