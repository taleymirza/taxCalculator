import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UaeComponent } from './uae.component';

describe('UaeComponent', () => {
  let component: UaeComponent;
  let fixture: ComponentFixture<UaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
