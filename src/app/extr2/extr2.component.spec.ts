import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extr2Component } from './extr2.component';

describe('Extr2Component', () => {
  let component: Extr2Component;
  let fixture: ComponentFixture<Extr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Extr2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
