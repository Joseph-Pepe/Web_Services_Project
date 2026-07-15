// Wrap in an IIFE or Module to prevent polluting the global namespace
(() => {
  const STORAGE_KEY = 'app_todos_v1';
  let todos = [];
  let editingId = null;

  // DOM Elements
  const personInput = document.getElementById('person');
  const taskInput = document.getElementById('todo');
  const todosContainer = document.getElementById('todos');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const saveButton = document.getElementById('saveButton');
  const clearButton = document.getElementById('clearButton');

  /**
   * Initializes the application state and event listeners.
   */
  const init = () => {
    // Session tracking: Welcome message only appears once per browser tab session
    if (!sessionStorage.getItem('herePreviously')) {
      sessionStorage.setItem('herePreviously', 'true');
      if (welcomeMessage) welcomeMessage.textContent = 'Welcome to the Todos Application!';
    }

    // Load existing data from localStorage
    loadTodos();

    // Attach event listeners programmatically (No inline HTML onclick attributes)
    saveButton.addEventListener('click', handleSave);
    clearButton.addEventListener('click', handleClearAll);

    // Use Event Delegation for Edit/Delete buttons to maximize memory efficiency
    todosContainer.addEventListener('click', handleListActions);
  };

  /**
   * Loads and parses the JSON array from localStorage.
   */
  const loadTodos = () => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      todos = storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error('Failed to parse todos from localStorage. Resetting data.', error);
      todos = [];
    }
    render();
  };

  /**
   * Serializes the todos array to JSON and commits it to localStorage.
   */
  const saveToStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    render();
  };

  /**
   * Handles creating a new todo or updating an existing one.
   */
  const handleSave = (e) => {
    e.preventDefault();
    const assignee = personInput.value.trim();
    const taskText = taskInput.value.trim();

    if (!assignee || !taskText) {
      alert('Please enter both an assignee and a task.');
      return;
    }

    if (editingId) {
      // Update existing todo
      todos = todos.map(item => 
        item.id === editingId ? { ...item, assignee, task: taskText, updatedAt: Date.now() } : item
      );
      editingId = null;
      saveButton.value = 'Add Task';
    } else {
      // Create new todo with a unique timestamp ID
      const newTodo = {
        id: `todo_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        assignee,
        task: taskText,
        createdAt: Date.now()
      };
      todos.push(newTodo);
    }

    // Reset form inputs
    personInput.value = '';
    taskInput.value = '';
    saveToStorage();
  };

  /**
   * Handles clicks inside the todo list using Event Delegation.
   */
  const handleListActions = (e) => {
    const target = e.target;
    const todoId = target.dataset.id;

    if (!todoId) return;

    if (target.classList.contains('btn-delete')) {
      todos = todos.filter(item => item.id !== todoId);
      saveToStorage();
    } else if (target.classList.contains('btn-edit')) {
      const itemToEdit = todos.find(item => item.id === todoId);
      if (itemToEdit) {
        personInput.value = itemToEdit.assignee;
        taskInput.value = itemToEdit.task;
        editingId = itemToEdit.id;
        saveButton.value = 'Update Task';
        taskInput.focus();
      }
    }
  };

  /**
   * Clears all saved todos from storage.
   */
  const handleClearAll = () => {
    if (confirm('Are you sure you want to delete all tasks?')) {
      localStorage.removeItem(STORAGE_KEY);
      todos = [];
      editingId = null;
      saveButton.value = 'Add Task';
      render();
    }
  };

  /**
   * Safely renders the UI using DOM node creation to prevent XSS attacks.
   */
  const render = () => {
    todosContainer.innerHTML = ''; // Clear current view

    if (todos.length === 0) {
      todosContainer.innerHTML = '<p class="empty-state">No tasks assigned yet.</p>';
      return;
    }

    const ul = document.createElement('ul');

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo-item';

      // Text container (using textContent prevents XSS injection)
      const textSpan = document.createElement('span');
      textSpan.className = 'todo-text';
      textSpan.textContent = `[Assigned]: ${todo.assignee} | [Task]: ${todo.task}`;

      // Action buttons with data-id attributes for event delegation
      const editBtn = document.createElement('button');
      editBtn.type = 'button';
      editBtn.className = 'btn-edit';
      editBtn.dataset.id = todo.id;
      editBtn.textContent = 'Edit';

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'btn-delete';
      deleteBtn.dataset.id = todo.id;
      deleteBtn.textContent = 'Delete';

      li.append(textSpan, editBtn, deleteBtn);
      ul.appendChild(li);
    });

    todosContainer.appendChild(ul);
  };

  // Boot the app when the DOM is fully parsed
  window.addEventListener('DOMContentLoaded', init);
})();
