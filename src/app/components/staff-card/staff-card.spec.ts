import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { StaffCard } from './staff-card';

describe('StaffCard', () => {
  let component: StaffCard;
  let fixture: ComponentFixture<StaffCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('staff', {
      id: 1,
      name: 'Dr. Test',
      role: 'Professor',
      photo: 'staff.jpg',
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});