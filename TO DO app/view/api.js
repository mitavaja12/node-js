const api = {
    createTask: async (newTask) => {
        let response = await fetch("http://localhost:8090/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });

        return response.ok && response.json();
    },

    getTasks: async () => {
        let req = await fetch("http://localhost:8090/");
        return req.ok && req.json();
    },

    fetchTasks: async () => { 
        let response = await fetch("http://localhost:8090/");
        return response.ok && response.json();
    },

    updateTask: async (taskId, updatedTask) => { 
        let response = await fetch(`http://localhost:8090/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });

        return response.ok && response.json();
    },

    removeTask: async (taskId) => { 
        let response = await fetch(`http://localhost:8090/${taskId}`, {
            method: "DELETE"
        });

        return response.ok && true;
    }
};

export default api;