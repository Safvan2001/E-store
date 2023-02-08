import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwVegitablesComponent } from './viw-vegitables.component';

describe('ViwVegitablesComponent', () => {
  let component: ViwVegitablesComponent;
  let fixture: ComponentFixture<ViwVegitablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwVegitablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViwVegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
