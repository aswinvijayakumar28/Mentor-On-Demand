import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTechnologiesComponent } from './admin-add-technologies.component';

describe('AdminAddTechnologiesComponent', () => {
  let component: AdminAddTechnologiesComponent;
  let fixture: ComponentFixture<AdminAddTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
