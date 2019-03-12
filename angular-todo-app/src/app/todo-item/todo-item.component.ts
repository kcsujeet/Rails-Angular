import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TodoService } from '../services/todo.service';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();
  @Output() updateTodo: EventEmitter<any> = new EventEmitter();

  showEditForm: boolean = false;
  editForm = this.fb.group({
    title: ['', Validators.compose([Validators.required])],
    description: ['']
  });

  constructor(private todoService: TodoService, private fb: FormBuilder) {}

  ngOnInit() {}

  onToggle(todo) {
    //toggle in UI
    todo.completed = !todo.completed;
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  toggleForm() {
    this.showEditForm = !this.showEditForm;
    this.editForm.get('title').setValue(this.todo.title)
    this.editForm.get('description').setValue(this.todo.description)
  }
  onUpdate(todo) {
    if (
      this.editForm.get('title').value &&
      this.editForm.get('description').value
    ) {
      todo.title = this.editForm.get('title').value;
      todo.description = this.editForm.get('description').value;
    }
    this.updateTodo.emit(todo);
    this.toggleForm()
  }

  get title() { return this.editForm.get('title'); }

}
