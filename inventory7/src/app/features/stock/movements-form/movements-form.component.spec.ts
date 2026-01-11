import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementsFormComponent } from './movements-form.component';

describe('MovementsFormComponent', () => {
  let component: MovementsFormComponent;
  let fixture: ComponentFixture<MovementsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
