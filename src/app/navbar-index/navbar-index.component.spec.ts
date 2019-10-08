import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIndexComponent } from './navbar-index.component';

describe('NavbarIndexComponent', () => {
  let component: NavbarIndexComponent;
  let fixture: ComponentFixture<NavbarIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
