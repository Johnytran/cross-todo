import { Task } from '../ts/task';
import { TaskManager } from '../ts/taskmanager'
import { ListView } from '../ts/listview'
import { DataStorage } from '../ts/datastorage'
import { Template } from '../ts/template'


//things to do when app loads
window.addEventListener('load',init);
function init(){
  //read tasks from storage and display
  taskstorage.read( (data) => {
    if( data.length > 0 ){
      data.forEach( (item) => {
        taskarray.push( item );
      });
      listview.clear();
      listview.render( taskarray );
    }
  });
}


//initialise
var taskarray: Array<Task> = [];
var taskstorage = new DataStorage('taskdata');
var taskmanager = new TaskManager(taskarray);
var listview = new ListView('task-list');
//task template
export var tasktemplate = new Template();

// reference to form
const taskform = (<HTMLFormElement> document.getElementById('task-form'));
taskform.addEventListener('submit', (event: Event)=>{
  event.preventDefault();
  let input:HTMLElement = document.getElementById('task-input');
  let taskname = (<HTMLInputElement>input).value;
  //console.log(taskname);
  //alert(taskname);
  taskform.reset();

  if(taskname.length >0 ){
    let task = new Task(taskname);
    taskmanager.add(task);
    //listview.clear();
    taskstorage.store(taskarray, (result)=>{
      if(result){
        //alert(result);
        taskform.reset();
        listview.clear();
        listview.render(taskarray);
      }else{
        // error to do with storage
        //alert("d");
      }
    });
  }


  //listview.render(taskarray);
});
function getParentId( elm: Node){
  while(elm.parentNode){
    elm = elm.parentNode;
    let id: string = (<HTMLElement> elm).getAttribute('id');
    if(id){
      return id;
    }
  }
  return null;
}

const listelement: HTMLElement = document.getElementById('task-list');
listelement.addEventListener('click', (event: Event)=>{
  let target: HTMLElement = <HTMLElement> event.target;
  let id = getParentId(<Node> event.target);
  console.log(target);
  if(target.getAttribute('data-function')=='status'){
    console.log('test '+id);
    if(id){
      taskmanager.changeStatus(id, ()=>{
        taskstorage.store(taskarray, ()=>{
          listview.clear();
          listview.render(taskarray);
        });

      });
    }
  }
  if(target.getAttribute('data-function')=='delete'){
    console.log('test '+id);
    if(id){
      taskmanager.remove(id,()=>{
        taskstorage.store(taskarray,()=>{
          listview.clear();
          listview.render(taskarray);
        });

      });
    }

  }
});
