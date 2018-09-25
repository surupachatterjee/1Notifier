import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    private isLoggedIn: boolean = false;

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( public location: Location, private router: Router) {}

    ngOnInit() {
        // $.material.init();
        // const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        // const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
        //
        // this.location.subscribe((ev:PopStateEvent) => {
        //     this.lastPoppedUrl = ev.url;
        // });
        //  this.router.events.subscribe((event:any) => {
        //     this.navbar.sidebarClose();
        //     if (event instanceof NavigationStart) {
        //        if (event.url != this.lastPoppedUrl)
        //            this.yScrollStack.push(window.scrollY);
        //    } else if (event instanceof NavigationEnd) {
        //        if (event.url == this.lastPoppedUrl) {
        //            this.lastPoppedUrl = undefined;
        //            window.scrollTo(0, this.yScrollStack.pop());
        //        } else
        //            window.scrollTo(0, 0);
        //    }
        // });
        // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //      elemMainPanel.scrollTop = 0;
        //      elemSidebar.scrollTop = 0;
        // });
        // if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        //     let ps = new PerfectScrollbar(elemMainPanel);
        //     ps = new PerfectScrollbar(elemSidebar);
        // }
      this.router.events.subscribe((e) => {

        if (e instanceof NavigationEnd) {
          let urlSlice = e.url.toString().substr(0,10);
          if(urlSlice.indexOf('/login') !== -1){
            console.log(urlSlice);
            this.isLoggedIn = false;
          }
          else{
            this.isLoggedIn= true;      }
        }
      });
    }
    ngAfterViewInit() {
        // this.runOnRouteChange();
    }
    // runOnRouteChange(): void {
    //   if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
    //     const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    //     const ps = new PerfectScrollbar(elemMainPanel);
    //     ps.update();
    //   }
    // }
    // isMac(): boolean {
    //     let bool = false;
    //     if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
    //         bool = true;
    //     }
    //     return bool;
    // }

}
