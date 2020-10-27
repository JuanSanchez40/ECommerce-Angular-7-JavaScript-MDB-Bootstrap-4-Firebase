import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceproductosComponent } from './conoceproductos.component';

describe('ConoceproductosComponent', () => {
  let component: ConoceproductosComponent;
  let fixture: ComponentFixture<ConoceproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConoceproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoceproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
