import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Todo} from '../models/Todo'
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl= 'http://localhost:3000/todos'
  todosLimit = '?_limit=10'
  constructor(private http:HttpClient) { }

  getTodos():Observable<any>{
    return this.http.get<any>('http://localhost:3000/todos',{
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("user_token")
      }
    })
  }

  //toggle completed
  toggleCompleted(todo):Observable<any>{
   const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }


  //delete
  deleteTodo(todo):Observable<any>{
    const url = `${this.todosUrl}/${todo.id}`

    return this.http.delete(url)
  }

  //add
  addTodo(todo):Observable<any>{
    return this.http.post<any>("http://localhost:3000/todos",todo,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("user_token")
      }
    })
  }
}
