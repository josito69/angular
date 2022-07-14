import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarCheckboxComponent } from './operar-checkbox.component';

describe('OperarCheckboxComponent', () => {
  let component: OperarCheckboxComponent;
  let fixture: ComponentFixture<OperarCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperarCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperarCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
