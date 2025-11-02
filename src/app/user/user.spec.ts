import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User } from './user';
import { Router } from '@angular/router';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [User],
      providers: [{ provide: Router, useValue: routerSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove user when logged out',() => {
    localStorage.setItem('isUser', 'true');
    spyOn(window, 'alert');

    component.logout();
    
    expect(localStorage.getItem('isUser')).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('Logged out successfully!');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  })
});
