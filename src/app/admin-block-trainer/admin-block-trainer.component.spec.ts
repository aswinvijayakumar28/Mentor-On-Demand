import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlockTrainerComponent } from './admin-block-trainer.component';

describe('AdminBlockTrainerComponent', () => {
  let component: AdminBlockTrainerComponent;
  let fixture: ComponentFixture<AdminBlockTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlockTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlockTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
