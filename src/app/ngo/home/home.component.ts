import {Component, OnInit} from '@angular/core';
import {NgoService} from '../ngo.service';
import {Router} from '@angular/router';
import {NgoList} from './model/NgoList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*  ngos: NgoResponse[];*/
  ngos: any = [
    {
      id: 1,
      name: 'Amara',
      governorate: 'Damascus',
      city: 'Sham',
      address: 'Damascus/Sham/Jmraya',
      mobileNumber: '01234567',
      email: 'Amara@yahoo.com',
      webSite: 'Amara@yahoo.com',
      description: 'donation food and drink'
    },
    {
      id: 2,
      name: 'Amara',
      governorate: 'Damascus',
      city: 'Sham',
      address: 'Damascus/Sham/Jmraya',
      mobileNumber: '01234567',
      email: 'Amara@yahoo.com',
      webSite: 'Amara@yahoo.com',
      description: 'donation food and drink'
    },
    {
      id: 3,
      name: 'Amara',
      governorate: 'Damascus',
      city: 'Sham',
      address: 'Damascus/Sham/Jmraya',
      mobileNumber: '01234567',
      email: 'Amara@yahoo.com',
      webSite: 'Amara@yahoo.com',
      description: 'donation food and drink'
    },
    {
      id: 4,
      name: 'Amara',
      governorate: 'Damascus',
      city: 'Sham',
      address: 'Damascus/Sham/Jmraya',
      mobileNumber: '01234567',
      email: 'Amara@yahoo.com',
      webSite: 'Amara@yahoo.com',
      description: 'donation food and drink'
    },
    {
      id: 5,
      name: 'Amara',
      governorate: 'Damascus',
      city: 'Sham',
      address: 'Damascus/Sham/Jmraya',
      mobileNumber: '01234567',
      email: 'Amara@yahoo.com',
      webSite: 'Amara@yahoo.com',
      description: 'donation food and drink'
    }
  ]

  constructor(private ngoService: NgoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.ngoService.getAll().subscribe((data: NgoList) => {
      this.ngos = data.list;
      console.log(this.ngos);
    });
  }

  viewNgo(id: number) {
    console.log(id);
    /*this.router.navigate(['ngo/ngoTable/view/', id]);*/
  }

  editNgo(id: number) {
    console.log(id);
    /*    this.router.navigate(['ngo/ngoTable/edit/', id]);*/
  }

  DeleteNgo(id: number) {
    console.log(id);
  }
}
