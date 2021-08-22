import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'notifications-cmp',
  moduleId: module.id,
  templateUrl: 'advertising.component.html',
  styleUrls: ['./advertising.component.css']
})

export class AdvertisingComponent implements OnInit {

  AdvertisingForm: FormGroup;
  submitted = false;
  advertisingObject: any = [
    {
      owner: 'Syriatel Mobile Telecom',
      text: 'Golden Sponsor For Donation'
    },
    {
      owner: 'smart soft',
      text: 'Silver Sponsor for transportation'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.AdvertisingForm = this.formBuilder.group({
      advertisingText: ['', Validators.required],
      advertisingOwner: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.AdvertisingForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AdvertisingForm.invalid) {
      return;
    }

    console.log(this.AdvertisingForm.value);

  }
}
