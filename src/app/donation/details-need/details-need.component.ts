import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-details-need',
  templateUrl: './details-need.component.html',
  styleUrls: ['./details-need.component.css']
})
export class DetailsNeedComponent implements OnInit {

  id;
  progress = 0;
  need: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );

    this.need = {
      id: 1,
      description: 'بحاجة ملابس بحاجة ملابس بحاجة ملابس',
      amount: 20,
      needDelivery: true,
      dueDate: Date(),
      catalog: {
        id: 1
      },
      hashtags: [
        {
          name: 'ملابس'
        },
        {
          name: 'طعام'
        }
      ]
    };
    this.progress = Math.round(100 * this.need.amount / 50);
  }

  viewStatus() {
    this.router.navigate(['donation/tracking-request', this.need.id]);
  }

}
