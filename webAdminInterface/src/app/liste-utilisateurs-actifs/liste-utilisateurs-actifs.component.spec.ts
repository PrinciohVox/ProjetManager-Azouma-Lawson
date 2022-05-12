import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUtilisateursActifsComponent } from './liste-utilisateurs-actifs.component';

describe('ListeUtilisateursActifsComponent', () => {
  let component: ListeUtilisateursActifsComponent;
  let fixture: ComponentFixture<ListeUtilisateursActifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeUtilisateursActifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeUtilisateursActifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
