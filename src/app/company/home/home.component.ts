import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  viewNgo(id: number) {
    console.log(id);
  }

  editNgo(id: number) {
    console.log(id);
  }

  DeleteNgo(id: number) {
    console.log(id);
  }
}
