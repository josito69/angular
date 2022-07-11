import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarSliderComponent } from './operar-slider.component';

describe('OperarSliderComponent', () => {
  let component: OperarSliderComponent;
  let fixture: ComponentFixture<OperarSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperarSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperarSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
