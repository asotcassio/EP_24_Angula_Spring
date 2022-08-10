import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerNumberComponent } from './changer-number.component';

describe('ChangerNumberComponent', () => {
  let component: ChangerNumberComponent;
  let fixture: ComponentFixture<ChangerNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
