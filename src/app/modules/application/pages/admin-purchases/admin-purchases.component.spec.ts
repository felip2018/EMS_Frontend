import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPurchasesComponent } from './admin-purchases.component';

describe('AdminPurchasesComponent', () => {
  let component: AdminPurchasesComponent;
  let fixture: ComponentFixture<AdminPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPurchasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
