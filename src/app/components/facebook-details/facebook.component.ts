import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FRIENDS } from '../../mock-data/mock-friends';
import { Friend } from  '../../mock-data/friend';
import { User } from '../../mock-data/User';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '', title: '',  icon:'add-circle', class: '' }
];

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookDetailsComponent implements OnInit {
  menuItems: any[];
  isHome: boolean = false;
  friends: Friend[];
  selectedFriend: Friend;
  userMessage: String;
  currentLoggedInUser: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.friends = FRIENDS;
    this.currentLoggedInUser = {
      firstName: "test",
      lastName: "last",
      age: 25,
      username: "test",
      password: "password",
      friends: this.friends,
      messages: [],
      imageURL: "https://cdn.vox-cdn.com/thumbor/qd-k76cRXE9NUv0NYB0IOcpYeUo=/0x0:2332x1961/1200x800/filters:focal(1104x869:1476x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/55870597/Sundar_Pichai.0.jpg"
    }
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  onSelect(friend: Friend): void {
    this.selectedFriend = friend;
  }

  sendMessage(event){
    this.currentLoggedInUser.messages.push(this.userMessage);
    this.userMessage = "";
  }



}
