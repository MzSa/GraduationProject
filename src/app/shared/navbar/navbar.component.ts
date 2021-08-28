import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {WebSocketService} from '../web-socket.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../auth/auth.service';
import {NotificationResponse} from '../model/NotificationResponse';
import {NotificationList} from '../model/notificationList';
import {Admin} from '../../sidebar/sidebar.component';

@Component({
  moduleId: module.id,
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  public isCollapsed = true;
  @ViewChild('navbar-cmp', {static: false}) button;

  // Notification
  private socket: any;
  // public notifications: any[] = [];
  public notifications: NotificationResponse[];
  public lengthArray = 0;
  // private stringifiedData = '{"name" : "ammarBaker", "id": 500}';
  private parsedJson: any;
  public UserId = 0;
  notificationObject: NotificationResponse;

  constructor(location: Location,
              private renderer: Renderer2,
              private element: ElementRef,
              private router: Router,
              private webSocketService: WebSocketService,
              private authService: AuthService,
              private toastr: ToastrService) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = Admin.filter(listTitle => listTitle);
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
    });

    this.webSocketService.getNotifications().subscribe((data: NotificationList) => {
      this.notifications = data.list;
      this.lengthArray = this.notifications.length;
      console.log(this.notifications);
    })

    this.webSocketService.listen().subscribe((res: string) => {
      this.UserId = parseInt(localStorage.getItem('ngoId'));
      this.notificationObject = JSON.parse(res);
      console.log(this.notificationObject);
      console.log(this.UserId);
      // debugger;
      if (+this.UserId === +this.notificationObject.id) {
        console.log('id : ' + this.notificationObject.id, 'content : ' + this.notificationObject.content);
        this.toastr.warning(this.notificationObject.content, '', {positionClass: 'toast-top-center'});
      }
    });
  }

  getTitle() {
    /*var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }*/
    return 'RELIEF';
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    html.classList.add('nav-open');
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    this.sidebarVisible = true;
  };

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      setTimeout(function () {
        mainPanel.style.position = '';
      }, 500);
    }
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }

}
