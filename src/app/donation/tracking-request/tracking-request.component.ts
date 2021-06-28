import {Component, OnInit} from '@angular/core';
import State from './state';

@Component({
  selector: 'app-tracking-request',
  templateUrl: './tracking-request.component.html',
  styleUrls: ['./tracking-request.component.css']
})
export class TrackingRequestComponent implements OnInit {

  state: State[] = [
    {
      id: 1,
      nameOfRequest: 'first Request',
      status: 'needDonation'
    },
    {
      id: 2,
      nameOfRequest: 'second Request',
      status: 'needTransfer'
    },
    {
      id: 3,
      nameOfRequest: 'third Request',
      status: 'final'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
