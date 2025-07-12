import { Pipe, PipeTransform } from '@angular/core';
import { TaskItem } from '../Shared/Models/TaskItem';

@Pipe({ name: 'sortTasks', pure: true })
export class SortTasksPipe implements PipeTransform {
  transform(tasks: TaskItem[]): TaskItem[] {
    return tasks.sort((a, b) =>
      a.isComplete === b.isComplete ? 0 : a.isComplete ? 1 : -1
    );
  }
}
