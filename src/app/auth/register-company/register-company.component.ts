import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  RegisterFormCompany: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.RegisterFormCompany = this.formBuilder.group({
      name: ['', Validators.required],
      loginName: ['', Validators.required],
      password: ['', Validators.required],
      governorate: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      webSite: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.RegisterFormCompany.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RegisterFormCompany.invalid) {
      return;
    }

    const objectData = {
      name: this.RegisterFormCompany.get('name').value,
      loginName: this.RegisterFormCompany.get('loginName').value,
      profiles: [
        {
          governorate: this.RegisterFormCompany.get('governorate').value,
          city: this.RegisterFormCompany.get('city').value,
          address: this.RegisterFormCompany.get('address').value,
          password: this.RegisterFormCompany.get('password').value,
          loginName: this.RegisterFormCompany.get('loginName').value,
          mobileNumber: this.RegisterFormCompany.get('mobileNumber').value,
          email: this.RegisterFormCompany.get('email').value,
          webSite: this.RegisterFormCompany.get('webSite').value,
          description: this.RegisterFormCompany.get('description').value
        }
      ]
    };
    console.log(objectData);
    this.authService.registerCompany(objectData).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/donation');
    });
  }
}
