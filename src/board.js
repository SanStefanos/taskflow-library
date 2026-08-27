// Task board module
class Board {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks(status) {
        if (!status) {
            return this.tasks;
        }

        const validStatuses = ['todo', 'in-progress', 'done'];

        if (!validStatuses.includes(status)) {
            return [];
        }

        return this.tasks.filter(task => task.status === status);
    }
}

module.exports = Board;