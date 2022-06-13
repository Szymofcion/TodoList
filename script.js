let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTask;

const main = () => {
  prepareDOMElements();
  prepereDOMEvents();
};
const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todoList ul");
  
};

const prepereDOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
};
const addNewTask = () => {
  if (todoInput.value !== "") {
    newTask = document.createElement("li");
    newTask.textContent = todoInput.value;
    createToolsArea();

    console.log(ulList);
    ulList.appendChild(newTask);
    
    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Wpisz treść zadania!";
  }
};

const createToolsArea = () => {

  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTask.appendChild(toolsPanel);
  
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";
  
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  
  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

document.addEventListener("DOMContentLoaded", main);

console.log(addBtn);