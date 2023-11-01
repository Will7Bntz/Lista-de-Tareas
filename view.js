class TaskView {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskButton = document.getElementById('addTaskButton');
        this.taskList = document.getElementById('taskList');
    }

    getTaskInput() {
        return this.taskInput.value;
    }

    clearTaskInput() {
        this.taskInput.value = '';
    }

    displayTasks(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const statusButton = document.createElement('button');
            statusButton.classList.add('statusButton');
            statusButton.setAttribute('data-index', index);
            statusButton.addEventListener('click', () => this.handleStatusTask(index));

            if (task.completed) {
                statusButton.innerHTML = ' Completada';
                statusButton.classList.add('completed');
            } else {
                statusButton.innerHTML = ' Pendiente';
                statusButton.classList.add('pending');
            }

            const taskText = document.createElement('div');
            taskText.textContent = task.text;
            taskText.classList.add('taskText');

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = 'Eliminar';
            deleteButton.classList.add('deleteButton');
            deleteButton.setAttribute('data-index', index);
            deleteButton.addEventListener('click', () => this.handleDeleteTask(index));

            li.appendChild(taskText);
            li.appendChild(statusButton);
            li.appendChild(deleteButton);
            this.taskList.appendChild(li);
        });
    }

    bindAddTask(handler) {
        this.addTaskButton.addEventListener('click', handler);
    }

    bindDeleteTask(handler) {
        this.taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('deleteButton')) {
                const index = event.target.getAttribute('data-index');
                handler(index);
            }
        });
    }

    bindStatusTask(handler) {
        this.taskList.addEventListener('click', (event) => {
            if (event.target.classList.contains('statusButton')) {
                const index = event.target.getAttribute('data-index');
                handler(index);
            }
        });
    }
}

const view = new TaskView();
