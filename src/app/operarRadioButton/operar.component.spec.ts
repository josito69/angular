import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarComponent } from './operar.component';

describe('OperarComponent', () => {
  let component: OperarComponent;
  let fixture: ComponentFixture<OperarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
