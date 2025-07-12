export class TaskItem {
  constructor(public TaskText: string, public isComplete: boolean = false) {}
  toJSON() {
    return {
      TaskText: this.TaskText,
      isComplete: this.isComplete,
    };
  }
}
