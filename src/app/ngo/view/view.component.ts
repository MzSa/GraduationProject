import {Component, OnInit} from '@angular/core';
import {NgoService} from '../ngo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ResponseByIdModel} from './model/ResponseByIdModel';
import {ResponseById} from './model/ResponseById';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  ngo: ResponseById;

  constructor(private ngoService: NgoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ngoId'];
    this.ngoService.getById(this.id).subscribe((data: ResponseByIdModel) => {
      this.ngo = data.model;
      console.log(this.ngo);
    })
  }
}
