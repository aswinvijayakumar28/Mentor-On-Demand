import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPaymentWithdrawComponent } from './trainer-payment-withdraw.component';

describe('TrainerPaymentWithdrawComponent', () => {
  let component: TrainerPaymentWithdrawComponent;
  let fixture: ComponentFixture<TrainerPaymentWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerPaymentWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPaymentWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
