import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DonationService} from '../donation-service';
import {ResponseActionNeed} from './model/ResponseActionNeed';
import {ResponseActionNeedList} from './model/ResponseActionNeedList';

@Component({
  selector: 'app-request-need',
  templateUrl: './response-need.component.html',
  styleUrls: ['./response-need.component.css']
})
export class ResponseNeedComponent implements OnInit {

  id;
  action: string;
  events: ResponseActionNeedList[];

  // events: any;

  constructor(private route: ActivatedRoute,
              private donationService: DonationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );

    this.donationService.getNeedResponse(this.id).subscribe((data: ResponseActionNeed) => {
      this.events = data.list;
    });
    /*    this.events = [
          {
            id: 3,
            amount: 1,
            note: 'حاكوني خاص',
            userId: 3005,
            userName: 'ammarBa',
            statues: 'Accepted'
          },
          {
            id: 3,
            amount: 50,
            note: 'حاكوني خاص',
            userId: 3005,
            userName: 'MoutazSa',
            statues: 'Accepted'
          }
        ];*/
  }

  accept(id: number) {
    console.log('id === > ', id);
    this.action = 'accept';
    this.donationService.accept(id, this.action).subscribe(res => {
        this.router.navigateByUrl('/donation');
      }
    );
  }

  reject(id: number) {
    console.log('id === > ', id);
    this.action = 'reject';
    this.donationService.accept(id, this.action).subscribe(res => {
      this.router.navigateByUrl('/donation');
    });
  }
}
