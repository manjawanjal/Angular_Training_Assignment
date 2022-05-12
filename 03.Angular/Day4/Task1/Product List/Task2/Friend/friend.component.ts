import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {

  friendArr:string[] = ["Zoya", "Farib", "Gandharv", "Samata"];

  ngOnInit(): void {
  }

}
