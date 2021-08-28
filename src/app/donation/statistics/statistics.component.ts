import {Component, OnInit} from '@angular/core';
import {DonationService} from '../donation-service';
import {ListStatistic} from './list-statistic.model';
import {Statistic} from './statistic.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

/*  need_reports: ListStatistic[];*/

  need_reports: any = [
    {
      'id': 1,
      'needStatusName': 'Need Delivery',
      'needResponseStatusName': 'Accepted',
      'genderName': 'Male',
      'count': 8
    },
    {
      'id': 2,
      'needStatusName': 'Need Delivery',
      'needResponseStatusName': 'Rejected',
      'genderName': 'Male',
      'count': 2
    },
    {
      'id': 3,
      'needStatusName': 'Need Donation',
      'needResponseStatusName': 'Rejected',
      'genderName': 'Female',
      'count': 10
    },
    {
      'id': 4,
      'needStatusName': 'Need Donation',
      'needResponseStatusName': 'Accepted',
      'genderName': 'Female',
      'count': 25
    }
  ];

  constructor(private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.donationService.getNeedReportAll().subscribe((res: Statistic) => {
      this.need_reports = res.list;
    });
  }

}
