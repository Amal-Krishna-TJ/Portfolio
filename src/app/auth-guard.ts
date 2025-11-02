import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // get Router instance

  // Check if admin is logged in
  const isAdminLoggedIn = localStorage.getItem('isAdmin') === 'true';

  if (!isAdminLoggedIn) {
    alert('You are not authorized to access this page!');
    router.navigate(['/login']); // redirect to login
    return false;
  }

  return true;
};
