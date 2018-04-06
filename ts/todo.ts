class Task{
  id: number;
  name: string;
  status: boolean;
  constructor(name){
    this.name = name;
    this.id = new Date().getTime();
    this.status = false;
  }
}

// reference to form
const taskform = document.getElementById('task-form');
taskform.addEventListener('submit', (event: Event)=>{
  event.preventDefault();
  let input:HTMLElement = document.getElementById('task-input');
  let taskname = (<HTMLInputElement>input).value;
  console.log(taskname);
});
