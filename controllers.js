class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTask(this.handleAddTask.bind(this));
        this.view.bindDeleteTask(this.handleDeleteTask.bind(this));
        this.view.bindStatusTask(this.handleStatusTask.bind(this));

        this.updateView();
    }

    handleAddTask() {
        const taskText = this.view.getTaskInput(); // Obtener el texto de la tarea
        if (taskText.trim() !== '') {
            this.model.addTask(taskText); // Agregar solo el texto
            this.view.clearTaskInput();
            this.updateView();
        }
    }

    handleDeleteTask(index) {
        this.model.getTasks().splice(index, 1);
        this.updateView();
    }

    handleStatusTask(index) {
        const tasks = this.model.getTasks();
        tasks[index].completed = !tasks[index].completed;
        this.updateView();
    }

    updateView() {
        const tasks = this.model.getTasks();
        this.view.displayTasks(tasks);
    }
}

const controller = new TaskController(model, view);
