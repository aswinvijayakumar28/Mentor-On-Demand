import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPaymentHistoryComponent } from './trainer-payment-history.component';

describe('TrainerPaymentHistoryComponent', () => {
  let component: TrainerPaymentHistoryComponent;
  let fixture: ComponentFixture<TrainerPaymentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerPaymentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
