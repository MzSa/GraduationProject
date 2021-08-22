import {Component, OnInit} from '@angular/core';
import {NgoService} from '../ngo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  /*  ngo: ResponseById;*/
  ngo: any = {
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
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    /*this.id = this.route.snapshot.params['ngoId'];
    this.ngoService.getById(this.id).subscribe((data: ResponseByIdModel) => {
      this.ngo = data.model;
      console.log(this.ngo);
    })*/
  }
}
