import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MarketingService} from '../marketing-service';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {

  ngoId = 0;
  submitted = false;
  AddSponsorFormCompany: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private marketingService: MarketingService) {

    this.AddSponsorFormCompany = this.formBuilder.group({
      description: ['', Validators.required],
      points: ['', Validators.required],
      firstNumOfUser: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.ngoId = +params['id'];
          console.log(this.ngoId);
        }
      );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.AddSponsorFormCompany.controls;
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.AddSponsorFormCompany.invalid) {
      return;
    }

    const objectData = {
      description: this.AddSponsorFormCompany.get('description').value,
      startDate: this.AddSponsorFormCompany.get('startDate').value,
      points: this.AddSponsorFormCompany.get('points').value,
      firstNumOfUser: this.AddSponsorFormCompany.get('firstNumOfUser').value,
      endDate: this.AddSponsorFormCompany.get('endDate').value,
      ngoId: this.ngoId
    };

    console.log(objectData);
    this.marketingService.addSponsor(objectData).subscribe(res => {
      console.log(res);
      this.router.navigate(['marketing/all-ngo']);
    });
  }

}
