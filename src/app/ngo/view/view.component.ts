import {Component, OnInit} from '@angular/core';
import {Ngo} from '../ngo';
import {NgoService} from '../ngo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  ngo: Ngo;

  constructor(private ngoService: NgoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ngoId'];
    this.ngoService.find(this.id).subscribe((data: Ngo) => {
      this.ngo = data;
    })
  }

}
