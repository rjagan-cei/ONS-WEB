import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerTypeComponent } from './cancer-type.component';

describe('CancerTypeComponent', () => {
  let component: CancerTypeComponent;
  let fixture: ComponentFixture<CancerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
