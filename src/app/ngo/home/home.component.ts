import {Component, OnInit} from '@angular/core';
import {Ngo} from '../ngo';
import {NgoService} from '../ngo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngos: Ngo[] = [];

  constructor(private ngoService: NgoService) {
  }

  ngOnInit(): void {
    this.ngoService.getAll().subscribe((data: Ngo[]) => {
      this.ngos = data;
      console.log(this.ngos);
    });
  }

  deleteNgo(id) {
    this.ngoService.delete(id).subscribe(res => {
      this.ngos = this.ngos.filter(item => item.id !== id);
      console.log('Ngo deleted successfully!');
    })
  }

}
