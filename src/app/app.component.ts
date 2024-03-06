import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo-List';

  tasks:string=''
  allTasks:any=[]
  editTask:string=''
  editTaskIndex:number=-1

  handleAdd(){
    if(this.tasks){
      console.log(this.tasks);
      this.allTasks.push(this.tasks);
      console.log(this.allTasks);
      this.tasks=''
      
    }
  }

  handleRemove(index:number){
    this.allTasks.splice(index, 1);
  }

  openModal(task: string, index: number) {
    this.editTask = task;
    this.editTaskIndex=index
    
  }

  saveEdit(){
    if (this.editTaskIndex !== -1) {
      this.allTasks[this.editTaskIndex] = this.editTask;
    }
    this.editTask = '';
    this.editTaskIndex = -1; 

  }

}
