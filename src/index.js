const createTask = (id, title, description, date) => {
  return { id, title, description, date };
};

const Imbox = [];
const taskContainer = document.querySelector("#tasks-container");
const formContainer = document.querySelector("#form-container");

const Tasker = (() => {
  const add = (id, title, description, date) => {
    Imbox.push(createTask(id, title, description, date));
  };

  const render = () => {
    let tasksHTML = "";
    Imbox.forEach((task, index) => {
      tasksHTML += ` 
    <div class="task-card">
      <div class="dividor"> 
        <input type="checkbox">
        <p>${task.title}</p></div>
      <div class="dividor">
         <p>${task.date}</p>
        <button class="btn-fav">☆</button>
        <button>Delete</button>
       </div>
     </div>`;
    });
    taskContainer.innerHTML = tasksHTML;
  };
  return { add, render };
})();

Tasker.add(1, "Learn how to code", "With The Odin Project", "05/22/23");
Tasker.add(1, "Learn how to JS", "With The Odin Project", "05/22/23");
Tasker.add(1, "Learn how to HTML", "With The Odin Project", "05/22/23");

Tasker.render();

console.log(Imbox);
console.log(taskContainer);

const btnOpenForm = document
  .querySelector("#open-form-btn")
  .addEventListener("click", () => {
    document.querySelector("section").style.filter = "blur(5px)";
    formContainer.style.display = "block";
  });

const btnCloseForm = document
  .querySelector("#close-form-btn")
  .addEventListener("click", () => {
    document.querySelector("section").style.filter = "blur(0px)";
    formContainer.style.display = "none";
    formContainer.reset();
  });
