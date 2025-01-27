
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Виконано';
    doneButton.addEventListener('click', () => {
        taskContent.classList.toggle('done');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(doneButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});