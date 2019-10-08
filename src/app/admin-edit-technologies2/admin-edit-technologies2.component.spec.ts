import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditTechnologies2Component } from './admin-edit-technologies2.component';

describe('AdminEditTechnologies2Component', () => {
  let component: AdminEditTechnologies2Component;
  let fixture: ComponentFixture<AdminEditTechnologies2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditTechnologies2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditTechnologies2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
