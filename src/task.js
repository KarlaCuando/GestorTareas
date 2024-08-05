let task = JSON.parse(localStorage.getItem('task')) || [];

//Función para agregar tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    task.push(newTask);
    localStorage.setItem('task'), JSON.strigift(task));
};

//Funció para poder traer la lista de tareas
export const getTask = () => task;