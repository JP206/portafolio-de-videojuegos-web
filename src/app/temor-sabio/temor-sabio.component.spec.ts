import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemorSabioComponent } from './temor-sabio.component';

describe('TemorSabioComponent', () => {
  let component: TemorSabioComponent;
  let fixture: ComponentFixture<TemorSabioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemorSabioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemorSabioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
