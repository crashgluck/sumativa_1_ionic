import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarEjerciciosPage } from './registrar-ejercicios.page';

describe('RegistrarEjerciciosPage', () => {
  let component: RegistrarEjerciciosPage;
  let fixture: ComponentFixture<RegistrarEjerciciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
