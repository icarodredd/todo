import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css',
})
export class TasklistComponent {
  tasksCreated = signal(0);
  tasksCompleted = signal(0);
}
