import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerAddSkillsComponent } from './trainer-add-skills.component';

describe('TrainerAddSkillsComponent', () => {
  let component: TrainerAddSkillsComponent;
  let fixture: ComponentFixture<TrainerAddSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerAddSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerAddSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
