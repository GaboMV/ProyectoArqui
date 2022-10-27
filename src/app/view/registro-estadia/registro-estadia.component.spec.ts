import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstadiaComponent } from './registro-estadia.component';

describe('RegistroEstadiaComponent', () => {
  let component: RegistroEstadiaComponent;
  let fixture: ComponentFixture<RegistroEstadiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEstadiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
