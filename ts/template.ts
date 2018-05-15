import * as moment from 'moment';

export class Template{
  template:string;
  constructor(){
    //not being used right now
  }
  populate(id:string, name:string, status:string){
    let idtime:number = parseInt(id)
    let timestamp = moment( idtime ).fromNow();
    let task:string =  `<li id="${id}" data-status="${status}">
                <div class="task-container">
                <div class="task-label">
                  <p class="task-name">${name}</p>
                  <p class="task-age">added ${timestamp}</p>
                </div>
                <div class="task-buttons">
                  <button type="button" >
                    <img src="images/check.png" alt="done" data-function="status"/>
                  </button>
                  <button type="button" >
                    <img src="images/delete.png" alt="delete" data-function="delete"/>
                  </button>
                </div>
                </div>
            </li>`;
    //alert(task);
    return task;
  }
}
