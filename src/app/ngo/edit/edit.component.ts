import {Component, OnInit} from '@angular/core';
import {Ngo} from '../ngo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgoService} from '../ngo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  ngo: Ngo;
  form: FormGroup;

  constructor(private ngoService: NgoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ngoId'];
    this.ngoService.find(this.id).subscribe((data: Ngo) => {
      this.ngo = data;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.ngoService.update(this.id, this.form.value).subscribe(res => {
      console.log('Ngo updated successfully!');
      this.router.navigateByUrl('ngo/home');
    })
  }

}
