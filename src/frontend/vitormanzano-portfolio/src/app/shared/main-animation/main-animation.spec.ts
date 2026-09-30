import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainAnimation } from './main-animation';

describe('MainAnimation', () => {
  let component: MainAnimation;
  let fixture: ComponentFixture<MainAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAnimation],
    }).compileComponents();

    fixture = TestBed.createComponent(MainAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
