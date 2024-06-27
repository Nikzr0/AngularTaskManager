import { Component, Input, inject } from '@angular/core';
import { type Task } from './task.model';
import { type NewTaskData } from '../new-task/new-task.model';
import { Title } from '@angular/platform-browser';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})

export class TaskComponent {
@Input({required: true}) task!: Task;
private taskService = inject(TasksService);

onCompleteTask() {
 this.taskService.removeTask(this.task.id);
}
}
