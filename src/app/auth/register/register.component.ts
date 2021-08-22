import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterRequest} from './model/register-request';
import {Catalog} from './model/catalog';
import {AuthService} from '../auth.service';
import {Profiles} from './model/profiles';
import {Goals} from './model/goals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  registerRequest: RegisterRequest;
  profiles: Profiles;
  goalsObj: Goals;
  catalogs: Catalog[];
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

    this.RegisterForm = this.fb.group({
      name: ['', Validators.required],
      loginName: ['', Validators.required],
      password: ['', Validators.required],
      governorate: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required],
      webSite: ['', Validators.required],
      description: ['', Validators.required],
      goals: this.fb.array([]),
      hashtags: this.fb.array([]),
      services: this.fb.array([]),
      checkArray: this.fb.array([])
    });

    this.registerRequest = {
      name: '',
      profiles: [
        {
          loginName: '',
          password: '',
          governorate: '',
          city: '',
          address: '',
          mobileNumber: '',
          email: '',
          webSite: '',
          description: '',
          goals: [
            {
              goal: '',
            }
          ]
        }
      ],
      hashtags: [
        {
          name: '',
        }
      ],
      needTypes: [
        {
          catalog:
            {
              id: 0,
              name: '',
            },
          arabicName: '',
          englishName: ''
        }
      ],
    };
  }

  ngOnInit(): void {
    this.authService.getcatalogs().subscribe((data: Catalog[]) => {
      console.log(data);
      this.catalogs = data;
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.RegisterForm.controls;
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.RegisterForm.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  // New Goals
  goals(): FormArray {
    return this.RegisterForm.get('goals') as FormArray
  }

  newGoal(): FormGroup {
    return this.fb.group({
      goal: '',
    })
  }

  addGoals() {
    this.goals().push(this.newGoal());
  }

  removeGoals(i: number) {
    this.goals().removeAt(i);
  }

  // New Hash Tag
  hashtags(): FormArray {
    return this.RegisterForm.get('hashtags') as FormArray
  }

  newHashTag(): FormGroup {
    return this.fb.group({
      hashtag: '',
    })
  }

  addHashTags() {
    this.hashtags().push(this.newHashTag());
  }

  removeHashTags(i: number) {
    this.hashtags().removeAt(i);
  }

  // New Service
  services(): FormArray {
    return this.RegisterForm.get('services') as FormArray
  }

  newService(): FormGroup {
    return this.fb.group({
      name: '',
      arabicName: '',
      englishName: ''
    })
  }

  addService() {
    this.services().push(this.newService());
  }

  removeService(i: number) {
    this.services().removeAt(i);
  }

  isValidInput(fieldName): boolean {
    return this.RegisterForm.controls[fieldName].invalid &&
      (this.RegisterForm.controls[fieldName].dirty || this.RegisterForm.controls[fieldName].touched);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      return;
    }

    this.registerRequest.name = this.RegisterForm.get('name').value;
    this.registerRequest.profiles[0].loginName = this.RegisterForm.get('loginName').value;
    this.registerRequest.profiles[0].password = this.RegisterForm.get('password').value;
    this.registerRequest.profiles[0].governorate = this.RegisterForm.get('governorate').value;
    this.registerRequest.profiles[0].city = this.RegisterForm.get('city').value;
    this.registerRequest.profiles[0].address = this.RegisterForm.get('address').value;
    this.registerRequest.profiles[0].mobileNumber = this.RegisterForm.get('mobileNumber').value;
    this.registerRequest.profiles[0].email = this.RegisterForm.get('email').value;
    this.registerRequest.profiles[0].webSite = this.RegisterForm.get('webSite').value;
    this.registerRequest.profiles[0].description = this.RegisterForm.get('description').value;
    this.registerRequest.profiles[0].goals = this.RegisterForm.get('goals').value;
    // this.registerRequest.hashtags = this.RegisterForm.get('hashtags').value;

    for (let i = 0; i < this.hashtags().length; i++) {
      this.registerRequest.hashtags[i] = {
        name: ''
      };
      this.registerRequest.hashtags[i].name = (this.RegisterForm.get('hashtags').value[i]).hashtag;
    }

    for (let i = 0; i < (this.RegisterForm.get('checkArray').value).length; i++) {
      this.registerRequest.needTypes[i] = {
        catalog: {
          id: 0,
          name: '',
        },
        arabicName: '',
        englishName: '',
      };

      // console.log(this.RegisterForm.get('checkArray').value[i]);

      this.registerRequest.needTypes[i].catalog.id = this.RegisterForm.get('checkArray').value[i];
    }
    let index = 0;
    if ((this.RegisterForm.get('checkArray').value).length !== 0) {
      index = (this.RegisterForm.get('checkArray').value).length;
    }
    for (let i = 0; i < this.services().length; i++) {

      this.registerRequest.needTypes[index] = this.RegisterForm.get('services').value[i];
      index = index + 1;
    }

    console.log(this.registerRequest);
/*    this.authService.register(this.registerRequest).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/donation');
      },
      error => {
        alert('Sorry, the registration process did not complete correctly');
      });*/
  }
}
