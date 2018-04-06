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