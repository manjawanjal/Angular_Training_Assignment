import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpComponentComponent } from './emp.component';

describe('EmpComponentComponent', () => {
  let component: EmpComponentComponent;
  let fixture: ComponentFixture<EmpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
