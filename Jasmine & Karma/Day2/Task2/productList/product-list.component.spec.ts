import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 //1.Test child component can access
 it('should render child component elements -- prod-detail', () => {
  const childComponent = fixture.debugElement.query(By.css('app-product-details'));
  expect(childComponent).toBeTruthy();
});

 //2.Test all child components count and verify
 it('should render all child component elements -- prod-detail', () => {
  const childComponents = fixture.debugElement.queryAll(By.css('app-product-details'));
  console.log(childComponents.length);
  expect(childComponents.length).toBe(component.productArr.length);
});

//3. Test child component properties
it('testing child component data -- prod-detail', () => {
  const childComponent = fixture.debugElement.query(By.css('app-product-details'));
  expect(childComponent.properties["item"][0]).toEqual(component.productArr[0]);
});

//4.  Test child component events
it('testing child component events -- removeprod', () => {
  const childComponent = fixture.debugElement.query(By.css('app-product-details'));
  const pno = childComponent.properties["item"][0].pno;
  childComponent.triggerEventHandler('removeprod', pno)
  let index = component.productArr.findIndex((item: any) => item.pno == pno);
  expect(index).toBe(-1);

});
});
