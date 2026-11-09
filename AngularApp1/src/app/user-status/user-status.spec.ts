import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatusComponent } from './user-status';

describe('UserStatus', () => {
  let component: UserStatusComponent;
  let fixture: ComponentFixture<UserStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserStatusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
