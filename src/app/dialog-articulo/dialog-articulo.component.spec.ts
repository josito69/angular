import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArticuloComponent } from './dialog-articulo.component';

describe('DialogArticuloComponent', () => {
  let component: DialogArticuloComponent;
  let fixture: ComponentFixture<DialogArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
