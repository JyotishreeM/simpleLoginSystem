import { Inject, ɵɵinject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService =  ɵɵinject(AuthServiceService);

  // Check if the user is logged in using the AuthService
  if (authService.loggedIn()) {
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
};
