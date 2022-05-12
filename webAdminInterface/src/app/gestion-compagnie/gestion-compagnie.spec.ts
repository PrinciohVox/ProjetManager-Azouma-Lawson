import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompagnie } from './gestion-compagnie.component';

describe('GestionCompagnie', () => {
  let component: GestionCompagnie;
  let fixture: ComponentFixture<GestionCompagnie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCompagnie ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCompagnie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
