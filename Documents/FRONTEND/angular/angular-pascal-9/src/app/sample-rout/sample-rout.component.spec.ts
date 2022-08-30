import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRoutComponent } from './sample-rout.component';

describe('SampleRoutComponent', () => {
  let component: SampleRoutComponent;
  let fixture: ComponentFixture<SampleRoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleRoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
