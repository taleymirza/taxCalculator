import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaComponent } from './canada.component';

describe('CanadaComponent', () => {
  let component: CanadaComponent;
  let fixture: ComponentFixture<CanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
