import {Component, OnInit} from '@angular/core';
import {NgoResponse} from './model/NgoResponse';
import {NgoService} from '../ngo.service';
import {Router} from '@angular/router';
import {NgoList} from './model/NgoList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngos: NgoResponse[];

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
    this.router.navigate(['ngo/ngoTable/view/', id]);
  }

  editNgo(id: number) {
    console.log(id);
    this.router.navigate(['ngo/ngoTable/edit/', id]);
  }

  DeleteNgo(id: number) {
    console.log(id);
    // this.ngoService.delete(id).subscribe(res => {
    //   this.ngos = this.ngos.filter(item => item.id !== id);
    //   console.log('Ngo deleted successfully!');
    // });
  }

  // deleteNgo(id) {
  //   this.ngoService.delete(id).subscribe(res => {
  //     this.ngos = this.ngos.filter(item => item.id !== id);
  //     console.log('Ngo deleted successfully!');
  //   })
  // }

}
