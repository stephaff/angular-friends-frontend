import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService)
  const router = inject(Router)

  if(!user.isLogged()){
    router.navigate(['/login'])
    return false;
  }
  return true;

};
