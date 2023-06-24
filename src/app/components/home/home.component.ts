import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from 'src/app/models/friend';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: Friend[] = []
  loading: boolean = false

  constructor(
    private friendService: FriendService,
    private router: Router
  ){}

  ngOnInit() {
    this.loading = true
    this.friendService.getFriends().subscribe(friends => {
      this.friends = friends
      this.loading = false
    })
  }

  addFriend(addForm: any){
    if(addForm.valid){
      this.friendService.createFriend(addForm.value).subscribe(friend => {
        this.friends.unshift(friend)
      })
    }
  }

  delFriend(id: string){
    this.friendService.deleteFriend(id).subscribe(friend => {
      const index = this.friends.findIndex(friend => friend._id == id)
      this.friends.splice(index, 1)
    })
  }

  goToDetails(id: string){
    this.router.navigate(['friend', id])
  }

}
