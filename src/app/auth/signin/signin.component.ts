import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {LoginRequest} from '../login-request';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  loginRequest: LoginRequest;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {
    this.loginRequest = {
      login: '',
      password: ''
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.loginRequest.login = this.f.username.value;
    this.loginRequest.password = this.f.password.value;
    this.authService.login(this.loginRequest)
      .subscribe(
        data => {
          // this.router.navigate([this.returnUrl]);
          console.log(data);
        },
        error => {
          this.loading = false;
        });
  }

}
