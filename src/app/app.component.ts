import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  toolbar = false

  constructor(
    private router: Router
  ){}

  ngDoCheck() {
    const currentUrl = this.router.url
    if(currentUrl == '/login' || currentUrl == '/signup'){
      this.toolbar = false
    }
    else{
      this.toolbar = true
    }
  }

  logout(){
    this.router.navigate(['login'])
    localStorage.removeItem('token')
  }

}
