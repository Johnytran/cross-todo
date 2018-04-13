class Task{
  id: string;
  name: string;
  status: boolean;
  constructor(name){
    this.name = name;
    this.id = new Date().getTime().toString();
    this.status = false;
  }
}

class TaskManager{
  tasks : Array<Task>;
  constructor(array: Array<Task>){
    this.tasks = array;
  }
  add(task: Task){
    this.tasks.push(task);
    console.log(this.tasks);
  }
}

class ListView{
  list:HTMLElement;
  constructor(listid: string){
    this.list = document.getElementById(listid);
  }
  render(items: Array<Task>){
    items.forEach((task)=> {
      let id = task.id;
      let name = task.name;
      let status = task.status;
      
      let template = `<li id="${id}" data-status="${status}>
                          <div class="task-container">
                            <div class="task-name">${name}</div>
                            <div class="task-button">
                              <button type="button" data-function="status">&#x2714;</button>
                              <button type="button" data-function="delete">&times;</button>
                            </div>
                          </div>
                        </li>`;
      let fragmen = document.createRange().createContextualFragment(template);
      this.list.appendChild(fragmen);
    });
  };
  
  clear(){
    this.list.innerHTML='';
  }
}  

class DataStorage{
  storage: any;
  constructor(){
    this.storage = window.localStorage;
  }
  store( array: Array<Task>){
    let data = JSON.stringify(array);
    this.storage.setItem('taskdata', data);
  }
  read(){
    let data = this.storage.getItem('taskdata');
    let array = JSON.parse(data);
    return array;
  }
}

window.addEventListener('load', ()=>{
  listview.clear();
  let taskdata = taskstorage.read();
  //console.log(taskdata);
  if(taskdata.length>0)
  {
    taskdata.forEach((item)=>{taskarray.push(item);});
    listview.render(taskarray);
  }  
  
});


//initialise
var taskarray: Array<Task> = [];
var taskstorage = new DataStorage();
var taskmanager = new TaskManager(taskarray);
var listview = new ListView('task-list');

// reference to form
const taskform = document.getElementById('task-form');
taskform.addEventListener('submit', (event: Event)=>{
  event.preventDefault();
  let input:HTMLElement = document.getElementById('task-input');
  let taskname = (<HTMLInputElement>input).value;
  //console.log(taskname);
  let task = new Task(taskname);
  taskmanager.add(task);
  
  listview.clear();
  taskstorage.store(taskarray);
  listview.render(taskarray);
});
