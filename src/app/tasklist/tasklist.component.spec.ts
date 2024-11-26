import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistComponent } from './tasklist.component';

describe('TasklistComponent', () => {
  let component: TasklistComponent;
  let fixture: ComponentFixture<TasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasklistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a paragraph with a text of "Tarefas criadas" and the number of tasks created', () => {
    const tasklistElement: HTMLElement = fixture.nativeElement;
    const pArray = tasklistElement.querySelectorAll('p')!;
    const p = pArray.item(0);
    expect(p.textContent).toEqual('Tarefas criadas');
  });

  it('should display a paragraph with a text of "Concluídas" and the number of tasks that are done', () => {
    const tasklistElement: HTMLElement = fixture.nativeElement;
    const pArray = tasklistElement.querySelectorAll('p')!;
    const p = pArray.item(1);
    expect(p.textContent).toEqual('Concluídas');
  });
});
