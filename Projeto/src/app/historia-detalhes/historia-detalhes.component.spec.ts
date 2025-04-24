import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriaDetalhesComponent } from './historia-detalhes.component';

describe('HistoriaDetalhesComponent', () => {
  let component: HistoriaDetalhesComponent;
  let fixture: ComponentFixture<HistoriaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriaDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
