import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntrenamientoCardComponent } from './entrenamiento-card.component';

describe('EntrenamientoCardComponent', () => {
  let component: EntrenamientoCardComponent;
  let fixture: ComponentFixture<EntrenamientoCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EntrenamientoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntrenamientoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
