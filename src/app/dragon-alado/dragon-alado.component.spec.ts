import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonAladoComponent } from './dragon-alado.component';

describe('DragonAladoComponent', () => {
  let component: DragonAladoComponent;
  let fixture: ComponentFixture<DragonAladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonAladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonAladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
