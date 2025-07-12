const STORAGE_KEY = 'tasklist_app_tasks';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SortTasksPipe } from './sort-tasks-pipe';
import { Component } from '@angular/core';
import { TaskItem } from '../Shared/Models/TaskItem';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, SortTasksPipe],

  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // whatever needs to be used across the app

  items: TaskItem[] = [];
  NewTaskText = '';

  constructor() {
    // load saved tasks
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    this.items = savedTasks
      ? JSON.parse(savedTasks).map(
          (item: any) => new TaskItem(item.TaskText, item.isComplete)
        )
      : [];
  }

  private saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
  }

  // functions to be used across the app
  addNewWish() {
    if (this.NewTaskText.trim()) {
      this.items.push(new TaskItem(this.NewTaskText));
      this.NewTaskText = '';
      this.saveToLocalStorage();
    }
  }

  deleteTask(taskToDelete: TaskItem) {
    this.items = this.items.filter((task) => task !== taskToDelete);
    this.saveToLocalStorage();
  }

  toggleItem(item: TaskItem) {
    item.isComplete = !item.isComplete;
    this.items = [...this.items];
    this.saveToLocalStorage();
  }
}
