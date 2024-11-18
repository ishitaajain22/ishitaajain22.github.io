const draggs = document.querySelectorAll('.work');
const drops = document.querySelectorAll('.col');
let draggedItem = null; 
draggs.forEach((work) => {
    work.addEventListener('dragstart', (e) => {
        draggedItem = e.target;
        e.target.classList.add('is-dragging');
    });
    
    work.addEventListener('dragend', (e) => {
        e.target.classList.remove('is-dragging');
        draggedItem = null;
    });
});
drops.forEach((col) => {
    col.addEventListener('dragover', (e) => {
        e.preventDefault();  
    });

    col.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem) {
            col.appendChild(draggedItem);
        }
    });
});

const form1 = document.getElementById("todo-form");
const input = document.getElementById("todo-in");
const addLane = document.querySelector(".col2");
form1.addEventListener("submit", (e) => {
    e.preventDefault();
    const val1 = input.value;
    if (!val1) return;
    const newTask1 = document.createElement("p");
    newTask1.classList.add("work");
    newTask1.setAttribute("draggable", "true");
    newTask1.innerText = val1;
    newTask1.style.backgroundColor = 'green';

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", (e) => {
        newTask1.remove(); 
    });

    newTask1.appendChild(deleteButton);

    newTask1.addEventListener("dragstart", (e) => {
        draggedItem = e.target;
        e.target.classList.add("is-dragging");
    });

    newTask1.addEventListener("dragend", (e) => {
        e.target.classList.remove("is-dragging");
        draggedItem = null;
    });

    addLane.appendChild(newTask1);
    input.value = "";

});

let d = new Date();
	let n = d.getHours();
	if (n >18 || n < 6)
	  document.body.className = "night";
	else if (n > 15 && n <= 17)
	  // If time is between 4PM – 7PM
	  document.body.className = "sunset";
	else
  	  document.body.className = "day";

const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const taskElement = e.target.parentNode;
                taskElement.remove();
            });
        });

