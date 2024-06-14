document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('newTaskInput');
    const addTaskButton = document.getElementById('btnAddTask');
    const tasksList = document.getElementById('tasksList');

    const createTaskItem = (taskText) => {
        const taskItem = document.createElement('li');
        
        const date = new Date().toLocaleDateString();
        const dateElement = document.createElement('span');
        dateElement.textContent = date;
        dateElement.classList.add('date-label');
        
        const textElement = document.createElement('span');
        textElement.textContent = taskText;
        
        const btnComplete = document.createElement('button');
        btnComplete.textContent = 'Complete';
        btnComplete.classList.add('btn-complete');
        btnComplete.addEventListener('click', () => {
            taskItem.classList.toggle('done');
            organizeTasks();
        });

        const btnImportant = document.createElement('button');
        btnImportant.textContent = 'Important';
        btnImportant.classList.add('btn-important');
        btnImportant.addEventListener('click', () => {
            taskItem.classList.toggle('important');
            organizeTasks();
        });

        taskItem.appendChild(dateElement);
        taskItem.appendChild(textElement);
        taskItem.appendChild(btnComplete);
        taskItem.appendChild(btnImportant);
        tasksList.appendChild(taskItem);

        taskInput.value = '';
        organizeTasks();
    };

    const organizeTasks = () => {
        const tasks = Array.from(tasksList.children);
        tasks.sort((a, b) => {
            if (a.classList.contains('important') && !b.classList.contains('important')) return -1;
            if (!a.classList.contains('important') && b.classList.contains('important')) return 1;
            if (a.classList.contains('done') && !b.classList.contains('done')) return 1;
            if (!a.classList.contains('done') && b.classList.contains('done')) return -1;
            return 0;
        });
        tasks.forEach(task => tasksList.appendChild(task));
    };

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTaskItem(taskText);
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                createTaskItem(taskText);
            }
        }
    });
});
