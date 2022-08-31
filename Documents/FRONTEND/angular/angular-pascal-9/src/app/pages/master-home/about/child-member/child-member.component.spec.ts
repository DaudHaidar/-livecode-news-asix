import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMemberComponent } from './child-member.component';

describe('ChildMemberComponent', () => {
  let component: ChildMemberComponent;
  let fixture: ComponentFixture<ChildMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
