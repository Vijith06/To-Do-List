const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(listItem);

    taskInput.value = '';

    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    const editButton = listItem.querySelector('.edit-btn');
    editButton.addEventListener('click', () => {
        const spanElement = listItem.querySelector('span');
        const editText = spanElement.textContent;
        const newText = prompt("Enter new task text:", editText);
        if (newText !== null && newText.trim() !== '') {
            spanElement.textContent = newText.trim();
        }
    });
});
