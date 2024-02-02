import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoRunComponent } from './eco-run.component';

describe('EcoRunComponent', () => {
  let component: EcoRunComponent;
  let fixture: ComponentFixture<EcoRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoRunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
