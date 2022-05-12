import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XbetRetraitComponent } from './xbet-retrait.component';

describe('XbetRetraitComponent', () => {
  let component: XbetRetraitComponent;
  let fixture: ComponentFixture<XbetRetraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XbetRetraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XbetRetraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
