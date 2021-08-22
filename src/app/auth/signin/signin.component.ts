import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {LoginRequest} from '../login-request';
import {Model} from '../model';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../login-response';

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
  loginResponse: Model;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public http: HttpClient
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
    console.log(this.loginRequest);
    // this.router.navigateByUrl('/donation');
    this.authService.login(this.loginRequest)
      .subscribe(
        (data: LoginResponse) => {
          this.loginResponse = data.model;
          console.log(this.loginResponse);
          localStorage.setItem('authenticationToken', this.loginResponse.token);
          localStorage.setItem('role', this.loginResponse.role);
          localStorage.setItem('ngoId', String(this.loginResponse.id));
          if (localStorage.getItem('role') === 'company') {
            this.router.navigateByUrl('/marketing/all-ngo');
          } else if (localStorage.getItem('role') === 'admin') {
            this.router.navigateByUrl('/donation');
          } else {
            this.router.navigateByUrl('/donation');
          }
        },
        error => {
          this.loading = false;
        });
  }
}
