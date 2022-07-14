import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteatorComponent } from './sorteator.component';

describe('SorteatorComponent', () => {
  let component: SorteatorComponent;
  let fixture: ComponentFixture<SorteatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
