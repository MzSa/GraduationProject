import {Component, OnInit} from '@angular/core';
import {DonationService} from '../donation-service';

@Component({
  selector: 'app-statistic-user',
  templateUrl: './statistic-user.component.html',
  styleUrls: ['./statistic-user.component.css']
})
export class StatisticUserComponent implements OnInit {

  result = {};
  statisticUsers: any = [];

  /*  statisticUsers: any = [
      {
        id: 1,
        userName: 'ammarBa',
        needStatusName: 'Need Delivery',
        needResponseStatusName: 'Accepted',
        genderName: 'Male',
        age: 21,
        point: 100,
        count: 4
      },
      {
        id: 2,
        userName: 'ammarBa',
        needStatusName: 'Need Delivery',
        needResponseStatusName: 'Rejected',
        genderName: 'Male',
        age: 21,
        point: 100,
        count: 2
      },
      {
        id: 3,
        userName: 'MoutazSa',
        needStatusName: 'Need Donation',
        needResponseStatusName: 'Accepted',
        genderName: 'Male',
        age: 21,
        point: 100,
        count: 25
      },
      {
        id: 4,
        userName: 'MoutazSa',
        needStatusName: 'Need Donation',
        needResponseStatusName: 'Rejected',
        genderName: 'Male',
        age: 21,
        point: 100,
        count: 50
      },
    ];*/

  constructor(private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.donationService.getNeedReportAllForUser().subscribe((res: any) => {
      this.statisticUsers = res.list;
      this.DisplayObject();
    });
  }

  DisplayObject() {
    this.statisticUsers.reduce((result, ob) => {
      if (this.result.hasOwnProperty(ob.userName)) {
        this.result[ob.userName].push(ob);
      } else {
        this.result[ob.userName] = [ob];
      }
    }, {});
    console.log(this.result);

    /*this.statisticUsers.reduce((result, obj) => {
      const hasVal = this.result.some(function (res) {
        if (res.userName === obj.userName) {
          return true;
        } else {
          return false;
        }
      });
      if (hasVal === false) {
        if (obj.needResponseStatusName === 'Rejected') {
          const objectValue = {
            id: obj.id,
            userName: obj.userName,
            age: obj.age,
            genderName: obj.genderName,
            needStatusName: obj.needStatusName,
            point: obj.point,
            needResponseStatusName_R: obj.needResponseStatusName,
            count_R: obj.count,
            needResponseStatusName_A: '',
            count_A: '',
          };
        } else {
          const objectValue = {
            id: obj.id,
            userName: obj.userName,
            age: obj.age,
            genderName: obj.genderName,
            needStatusName: obj.needStatusName,
            point: obj.point,
            needResponseStatusName_R: '',
            count_R: '',
            needResponseStatusName_A: obj.needResponseStatusName,
            count_A: obj.count,
          };
        }
        this.result.push(objectValue);
      } else {
        this.result.filter(res => {
          if (res.userName === obj.userName) {
            if (obj.needResponseStatusName === 'Rejected') {
              res.needResponseStatusName_R = obj.needResponseStatusName;
              res.count_R = obj.count;
            } else {
              res.needResponseStatusName_R = obj.needResponseStatusName;
              res.count_A = obj.count;
            }
          }
        });
      }
    }, {});
    console.log(this.result);*/
  }
}
