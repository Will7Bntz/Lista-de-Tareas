class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ text: task, completed: false });
    }

    completeTask(index) {
        this.tasks[index].completed = true;
    }

    pendingTask(index) {
        this.tasks[index].completed = false;
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

const model = new TaskModel();
