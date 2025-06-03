import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EjercicioFormComponent } from './ejercicio-form.component';

describe('EjercicioFormComponent', () => {
  let component: EjercicioFormComponent;
  let fixture: ComponentFixture<EjercicioFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EjercicioFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EjercicioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
