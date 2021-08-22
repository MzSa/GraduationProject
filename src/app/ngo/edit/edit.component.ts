import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgoService} from '../ngo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  // ngo: Ngo;
  UpdateNgo: FormGroup;
  submitted = false;

  UpdatedObject: any = {
    id: 1,
    name: 'Amara',
    governorate: 'Damascus',
    city: 'Sham',
    address: 'Damascus/Sham/Jmraya',
    mobileNumber: '01234567',
    email: 'Amara@yahoo.com',
    webSite: 'Amara@yahoo.com',
    description: 'donation food and drink'
  };

  constructor(private ngoService: NgoService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {


    this.UpdateNgo = this.formBuilder.group({
      name: ['', Validators.required],
      governorate: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required],
      webSite: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  setValueForm() {
    this.UpdateNgo.patchValue(this.UpdatedObject);
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['ngoId'];
    // this.ngoService.find(this.id).subscribe((data: NgoList) => {
    //   this.ngo = data;
    // });
    this.setValueForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.UpdateNgo.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.UpdateNgo.invalid) {
      return;
    }
    console.log(this.UpdateNgo.value);
    // this.ngoService.update(this.id, this.form.value).subscribe(res => {
    //   console.log('Ngo updated successfully!');
    //   this.router.navigateByUrl('ngo/home');
    // })
  }

}
