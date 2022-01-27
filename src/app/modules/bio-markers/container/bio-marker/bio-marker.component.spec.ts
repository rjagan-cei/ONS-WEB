import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioMarkerComponent } from './bio-marker.component';

describe('BioMarkerComponent', () => {
  let component: BioMarkerComponent;
  let fixture: ComponentFixture<BioMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
