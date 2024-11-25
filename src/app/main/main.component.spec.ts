import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a input to add the tasks', () => {
    const mainElement: HTMLElement = fixture.nativeElement;
    const input = mainElement.querySelector('input')!;
    expect(input.placeholder).toEqual('Adicione uma nova tarefa');
  });

  it('should display a button to submit the tasks', () => {
    const mainElement: HTMLElement = fixture.nativeElement;
    const button = mainElement.querySelector('button')!;
    expect(button.textContent).toEqual('Criar');
  });
});
