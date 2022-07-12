import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarSliderToggleComponent } from './operar-slider-toggle.component';

describe('OperarSliderToggleComponent', () => {
  let component: OperarSliderToggleComponent;
  let fixture: ComponentFixture<OperarSliderToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperarSliderToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperarSliderToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
