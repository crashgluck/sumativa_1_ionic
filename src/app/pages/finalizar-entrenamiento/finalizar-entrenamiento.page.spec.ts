import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalizarEntrenamientoPage } from './finalizar-entrenamiento.page';

describe('FinalizarEntrenamientoPage', () => {
  let component: FinalizarEntrenamientoPage;
  let fixture: ComponentFixture<FinalizarEntrenamientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarEntrenamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
