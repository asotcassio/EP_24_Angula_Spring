import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatFormComponent } from './contat-form.component';

describe('ContatFormComponent', () => {
  let component: ContatFormComponent;
  let fixture: ComponentFixture<ContatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
