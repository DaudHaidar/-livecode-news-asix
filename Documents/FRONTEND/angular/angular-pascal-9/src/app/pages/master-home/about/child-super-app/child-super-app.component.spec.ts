import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSuperAppComponent } from './child-super-app.component';

describe('ChildSuperAppComponent', () => {
  let component: ChildSuperAppComponent;
  let fixture: ComponentFixture<ChildSuperAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSuperAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSuperAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
