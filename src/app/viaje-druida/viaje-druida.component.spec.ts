import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeDruidaComponent } from './viaje-druida.component';

describe('ViajeDruidaComponent', () => {
  let component: ViajeDruidaComponent;
  let fixture: ComponentFixture<ViajeDruidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajeDruidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajeDruidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
