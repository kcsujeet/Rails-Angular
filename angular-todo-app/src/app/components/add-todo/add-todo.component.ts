import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string;
  description: string;

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  
  todoForm = this.fb.group({
    title: [''],
    description: ['']
  })
  constructor(private todoService: TodoService, private fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    const todo = this.todoForm.value;
    this.addTodo.emit(todo);
    this.todoForm.reset()
  }

}
