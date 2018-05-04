import { Task } from '../ts/task';
export class DataStorage{
  storage: any;
  status: boolean;
  dataname: string;
  constructor(dataname: string){
    if(window.localStorage){
      this.status = true;
      this.dataname = dataname;
    }else{
      this.status = false;
    }

  }
  store( tasks:Array <Task>, callback ){
     if( this.status ){
       try{
         let data:string = JSON.stringify( tasks );
         window.localStorage.setItem(this.dataname, data );
         callback( true );
       }
       catch( error ){
         //console.log(error)
         callback( false );
       }
     }
   }
  read( callback ){
    if( this.status ){
      try{
        let data:string = window.localStorage.getItem(this.dataname);
        callback( JSON.parse( data ) );
      }
      catch( error ){
        //console.log(error)
        callback (false);
      }
    }
  }
}
