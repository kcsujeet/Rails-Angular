import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {TodoService} from '../../services/todo.service'


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title:string
  description:string

  @Output() addTodo: EventEmitter<any> = new EventEmitter()
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    const todo = {
      title:this.title,
      description:this.description
    }
    this.addTodo.emit(todo)
    this.title = ''
    this.description = ''
  }
}
