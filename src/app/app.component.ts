import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list=new TodoList("Bob",[
  new TodoItem("Catch a butterfly"),
  new TodoItem("Ride a bike"),
  new TodoItem("Catch some air")]
  )
  get username(): string{
    return this.list.user
  }
  get itemCount():number{
    return this.list.items.filter(item=>!item.complete).length;
  }
  get items():readonly TodoItem[]{
    return this.list.items;
  }
}
