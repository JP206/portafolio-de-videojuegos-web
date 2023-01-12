import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneDestroyerComponent } from './stone-destroyer.component';

describe('StoneDestroyerComponent', () => {
  let component: StoneDestroyerComponent;
  let fixture: ComponentFixture<StoneDestroyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoneDestroyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoneDestroyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
