import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaughbyrinthComponent } from './laughbyrinth.component';

describe('LaughbyrinthComponent', () => {
  let component: LaughbyrinthComponent;
  let fixture: ComponentFixture<LaughbyrinthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaughbyrinthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaughbyrinthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
