import { ComponentFixture, TestBed } from '@angular/core/testing';
import { usercard } from './usercard';

describe('UserCardComponent', () => {
  let component: usercard;
  let fixture: ComponentFixture<usercard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [usercard],
    }).compileComponents();

    fixture = TestBed.createComponent(usercard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
