import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampeonWaterdeepComponent } from './campeon-waterdeep.component';

describe('CampeonWaterdeepComponent', () => {
  let component: CampeonWaterdeepComponent;
  let fixture: ComponentFixture<CampeonWaterdeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampeonWaterdeepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampeonWaterdeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
