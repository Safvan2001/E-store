import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroceriesComponent } from './view-groceries.component';

describe('ViewGroceriesComponent', () => {
  let component: ViewGroceriesComponent;
  let fixture: ComponentFixture<ViewGroceriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGroceriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
