import { Task } from '../ts/task';
import { tasktemplate } from '../ts/main-module'
export class ListView{
  list:HTMLElement;
  constructor(listid: string){
    //console.log(listid);
    this.list = document.getElementById('task-list');
  }
  clear(){
    this.list.innerHTML='';
  }
  render( items:Array<Task> ){
    //clear the view
    //render array using template
    //alert(items);
    items.forEach( (task) => {
    let id= task.id;
       
    let name = task.name;
    let status = task.status.toString();
    let item = tasktemplate.populate(id,name,status);
      //alert(id);
    // convert our string to HTML Node
    //let fragment = document.createRange().createContextualFragment(item);
      //alert(id);
    //this.list.appendChild( fragment ); 
      this.list.innerHTML += item
    });
  }
}
