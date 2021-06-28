import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-request-need',
  templateUrl: './response-need.component.html',
  styleUrls: ['./response-need.component.css']
})
export class ResponseNeedComponent implements OnInit {

  id;
  public events: any[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );

    this.events = [
      {
        id: 1,
        name: 'المتبرع الأول',
        body: 'مكان السكن جمرايا التوصيل مجاني',
      },
      {
        id: 2,
        name: 'المتبرع الثاني',
        body: 'مكان السكن برزة',
      }
    ];
  }

  accept(id: number) {
    // alert('Accept from UserId : ', id);
    console.log('id === > ', id);
  }

  reject(id: number) {
    // alert('Rejected from UserId : ', id);
    console.log('id === > ', id);
  }
}
