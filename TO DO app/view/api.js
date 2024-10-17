const api = {
    createTask: async (newTask) => {
        let response = await fetch("http://localhost:9090/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });

        return response.json();
    },

    getTasks: async () => {
        let req = await fetch("http://localhost:9090/");
        return req.json();
    },

    fetchTasks: async () => { 
        let response = await fetch("http://localhost:9090/");
        return  response.json();
    },

    updateTask: async (taskId, updatedTask) => { 
        let response = await fetch(`http://localhost:9090/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });

        return response.json();
    },

    removeTask: async (taskId) => { 
        let response = await fetch(`http://localhost:9090/${taskId}`, {
            method: "DELETE"
        });

        return response. true;
    }
};

export default api;