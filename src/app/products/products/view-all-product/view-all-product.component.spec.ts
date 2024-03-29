import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductComponent } from './view-all-product.component';

describe('ViewAllProductComponent', () => {
  let component: ViewAllProductComponent;
  let fixture: ComponentFixture<ViewAllProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
