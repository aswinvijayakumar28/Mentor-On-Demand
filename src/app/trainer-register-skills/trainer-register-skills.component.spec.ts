import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRegisterSkillsComponent } from './trainer-register-skills.component';

describe('TrainerRegisterSkillsComponent', () => {
  let component: TrainerRegisterSkillsComponent;
  let fixture: ComponentFixture<TrainerRegisterSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerRegisterSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRegisterSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
