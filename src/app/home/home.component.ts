/**
 * Created by surajnagaraj on 11/7/17.
 */

import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isAddApplication: boolean = true;
  isAppList: boolean = true;
  isFacebookLogin: boolean = false;
  isFacebookAdded: boolean = false;
  isFacebookClicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };



}
