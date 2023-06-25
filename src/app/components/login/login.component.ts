import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {} as User

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }
    else{
      this.router.navigate(['/home'])
    }
  }

  loginUser(loginForm: any){
    if(loginForm.valid){
      console.log(loginForm.value)
      this.userService.login(loginForm.value).subscribe( user => {
        this.user = user
        localStorage.setItem('token', user.token)
        this.router.navigate(['/home'])
      })
    }
  }

}
