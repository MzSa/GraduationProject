import {Component, OnInit} from '@angular/core';
import {NgoService} from '../../ngo/ngo.service';
import {NgoResponse} from '../../ngo/home/model/NgoResponse';
import {Router} from '@angular/router';
import {NgoList} from '../../ngo/home/model/NgoList';

@Component({
  selector: 'app-all-ngo',
  templateUrl: './all-ngo.component.html',
  styleUrls: ['./all-ngo.component.css']
})
export class AllNgoComponent implements OnInit {

  ngoName: string;
  ngos: NgoResponse[];

  /*  ngos: NgoResponse[] = [
      {
        id: 1,
        name: 'aamrha',
        description: 'A charitable organization concerned with community issues',
        address: 'Damascus',
        city: 'Sham',
        email: 'aamrha@yahoo.com',
        governorate: 'Damascus',
        login: 'blabla',
        loginName: 'blablabla',
        mobileNumber: '0998841267',
        password: '123456',
        webSite: 'aamrha.com'
      },
      {
        id: 2,
        name: 'الأمانة السورية',
        description: 'A charitable organization concerned with community issues',
        address: 'Damascus',
        city: 'Sham',
        email: 'aamrha@yahoo.com',
        governorate: 'Damascus',
        login: 'blabla',
        loginName: 'blablabla',
        mobileNumber: '0966114782',
        password: '123456',
        webSite: 'aamrha.com'
      }
    ];*/

  constructor(private ngoService: NgoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.ngoService.getAll().subscribe((data: NgoList) => {
      this.ngos = data.list;
      console.log(this.ngos);
    });
  }

  addSponser(id: number) {
    console.log(id);
    this.router.navigate(['marketing/add-sponsor', id]);
  }

  Search() {
    console.log(this.ngoName);
    this.ngoService.getNgoByName(this.ngoName).subscribe((data: NgoList) => {
      this.ngos = data.list;
      console.log(this.ngos);
    });
  }

}
