import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DonationService} from '../donation-service';
import {NeedById} from './model/NeedById';
import {NeedByIdModel} from './model/NeedByIdModel';

@Component({
  selector: 'app-details-need',
  templateUrl: './details-need.component.html',
  styleUrls: ['./details-need.component.css']
})
export class DetailsNeedComponent implements OnInit {

  id;
  progress = 0;
  need: NeedById;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private donationService: DonationService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );
    this.donationService.getNeedByIdForDetails(this.id).subscribe((res: NeedByIdModel) => {
      this.need = res.model;
      this.need.progress = Math.round(100 * res.model.progress / res.model.amount);
      console.log(this.need);
      console.log(this.need.hashtags);
    });
    /*    this.need = {
          id: 1,
          description: 'بحاجة ملابس',
          amount: 20,
          progress: 50,
          dueDate: new Date(),
          catalogName: 'clothes',
          workName: 'سيريتل',
          benefactorId: 3005,
          benefactorUserName: 'ammarBa',
          needStatuesName: 'need delivery',
          state: 'state',
          county: 'county',
          city: 'city',
          neighborhood: 'neighborhood',
          street: 'street',
          hashtags: [
            {
              name: 'ملابس'
            },
            {
              name: 'طعام'
            }
          ]
        };*/

    this.progress = Math.round(100 * this.need.amount / 50);
  }

  viewStatus() {
    // this.router.navigate(['donation/tracking-request', this.need.id]);
    this.router.navigate(['donation/tracking-request'], {queryParams: {id: this.need.id, 'needStatuesName': this.need.needStatuesName}});
  }

}
