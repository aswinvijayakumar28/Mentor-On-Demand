import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEditSkillsComponent } from './trainer-edit-skills.component';

describe('TrainerEditSkillsComponent', () => {
  let component: TrainerEditSkillsComponent;
  let fixture: ComponentFixture<TrainerEditSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerEditSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerEditSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
