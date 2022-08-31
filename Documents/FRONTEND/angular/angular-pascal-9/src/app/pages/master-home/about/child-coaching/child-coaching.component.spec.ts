import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCoachingComponent } from './child-coaching.component';

describe('ChildCoachingComponent', () => {
  let component: ChildCoachingComponent;
  let fixture: ComponentFixture<ChildCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
