export class Task{
  id: string;
  name: string;
  status: boolean;
  constructor(name){
    this.name = name;
    this.id = new Date().getTime().toString();
    this.status = false;
  }
}
