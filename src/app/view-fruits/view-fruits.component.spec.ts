import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFruitsComponent } from './view-fruits.component';

describe('ViewFruitsComponent', () => {
  let component: ViewFruitsComponent;
  let fixture: ComponentFixture<ViewFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFruitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
