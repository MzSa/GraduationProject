import {Component, OnInit} from '@angular/core';
import State from './state';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-tracking-request',
  templateUrl: './tracking-request.component.html',
  styleUrls: ['./tracking-request.component.css']
})
export class TrackingRequestComponent implements OnInit {

  id: number;
  // state: State[] = [
  //   {
  //     id: 1,
  //     nameOfRequest: 'first Request',
  //     status: 'needDonation'
  //   },
  //   {
  //     id: 2,
  //     nameOfRequest: 'second Request',
  //     status: 'needTransfer'
  //   },
  //   {
  //     id: 3,
  //     nameOfRequest: 'third Request',
  //     status: 'final'
  //   }
  // ]
  state: State = {
    id: 0,
    status: ''
  };

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
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.state.id = params.id;
      this.state.status = params.needStatuesName;
    })

    console.log(this.state);
  }

}
