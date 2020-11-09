import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'eat dinner',
      completed: false,
    },
    {
      task: 'paint',
      completed: false,
    },
    {
      task: 'wake up',
      completed: true,
    },
  ];

  filterTerm: string = '';
  constructor() {}

  ngOnInit(): void {}

  addTask = (form: NgForm): void => {
    let newTask: Todo = {
      task: form.value.id,
      completed: false,
    };
    this.todos.push(newTask);
    form.reset();
  };

  filterTasks = (): Todo[] => {
    if (!this.filterTerm) {
      return this.todos;
    } else {
      return this.todos.filter((task) => {
        let taskName = task.task.toLowerCase().trim();
        return taskName.includes(this.filterTerm.toLowerCase());
      });
    }
  };

  setFilterTerm = (form: NgForm): void => {
    this.filterTerm = form.value.searchTerm;
  };

  removeTask = (index: number): void => {
    this.todos.splice(index, 1);
  };

  completeTask = (index: number): void => {
    this.todos[index].completed = true;
  };
}
