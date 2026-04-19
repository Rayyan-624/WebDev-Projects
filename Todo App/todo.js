let todoList = [
  { item: "hello", dueDate: "19/4/26" },
  { item: "world", dueDate: "19/4/26" },
  { item: "welcome", dueDate: "20/4/26" },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  //console.log(todoList);
  inputElement.value = "";
  dateElement.value = "";

  displayItems();
}

function displayItems() {
  let displayElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newHtml += `
              <span>${item}</span>
              <span>${dueDate}</span>
              <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
        `;
  }
  displayElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}
