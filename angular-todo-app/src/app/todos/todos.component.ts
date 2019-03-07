import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/Todo";
import { TodoService } from "../services/todo.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos;
  constructor(private todoService: TodoService,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.toggleloginStatus()
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos.reverse();
    });
  }

  deleteTodo(todo1) {
    this.todoService.deleteTodo(todo1).subscribe(todo => {
      this.todos = this.todos.filter(t => t.id != todo1.id);
    });
  }

  addTodo(todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.unshift(todo);
    });
  }
}
