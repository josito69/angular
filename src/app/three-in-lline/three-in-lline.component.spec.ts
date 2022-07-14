import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeInLlineComponent } from './three-in-lline.component';

describe('ThreeInLlineComponent', () => {
  let component: ThreeInLlineComponent;
  let fixture: ComponentFixture<ThreeInLlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeInLlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeInLlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
