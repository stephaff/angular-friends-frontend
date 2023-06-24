import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from 'src/app/models/friend';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent implements OnInit {

  id!: string | null
  friend: Friend = {} as Friend
  loading: boolean = false

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.loading = true
      this.friendService.getFriend(this.id).subscribe(friend => {
        this.friend = friend
        this.loading = false
      })
    }
  }

}
