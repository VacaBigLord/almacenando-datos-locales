const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event) =>  completeTask(event, id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
  const task = JSON.parse(localStorage.getItem('tasks'));
  const index = task.findIndex(item => item.id == id)
  task[index]['complete'] = !task[index]['complete']
  localStorage.setItem('tasks', JSON.stringify(task))
};

export default checkComplete;
