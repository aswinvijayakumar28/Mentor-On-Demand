import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditTechnologiesComponent } from './admin-edit-technologies.component';

describe('AdminEditTechnologiesComponent', () => {
  let component: AdminEditTechnologiesComponent;
  let fixture: ComponentFixture<AdminEditTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
