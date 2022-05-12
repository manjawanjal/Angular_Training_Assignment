
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeelistcomponent } from './employeelist.component';

describe('EmployeeListComponent', () => {
  let component: employeelistcomponent;
  let fixture: ComponentFixture<employeelistcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ employeelistcomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(employeelistcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});