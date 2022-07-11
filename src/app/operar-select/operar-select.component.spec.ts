import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarSelectComponent } from './operar-select.component';

describe('OperarSelectComponent', () => {
  let component: OperarSelectComponent;
  let fixture: ComponentFixture<OperarSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperarSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperarSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
