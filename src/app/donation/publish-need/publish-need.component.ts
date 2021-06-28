import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {DonationService} from '../donation-service';
import {PublishNeed} from './model/publish-need';
import {Catalog} from '../../auth/register/model/catalog';

@Component({
  selector: 'app-publish-need',
  templateUrl: './publish-need.component.html',
  styleUrls: ['./publish-need.component.css']
})
export class PublishNeedComponent implements OnInit {

  form!: FormGroup;
  modalRef!: BsModalRef;
  events: any[] = [];
  currentEvent: PublishNeed = {
    description: '',
    amount: 0,
    needDelivery: true,
    dueDate: new Date(),
    catalog: {
      id: 0,
    },
    hashtags: [
      {
        name: '',
      }
    ]
  };
  Events: PublishNeed[];

  modalCallback!: () => void;
  catalogs: Catalog[] = [
    {
      id: 1,
      name: 'Food'
    },
    {
      id: 2,
      name: 'Drink'
    },
    {
      id: 3,
      name: 'Clothes'
    },
    {
      id: 4,
      name: 'Animal'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private donationService: DonationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.currentEvent.description, Validators.required],
      amount: [this.currentEvent.amount, Validators.required],
      needDelivery: [this.currentEvent.needDelivery, Validators.required],
      catalog: [this.currentEvent.catalog.id, Validators.required],
      date: [this.currentEvent.dueDate, Validators.required],
      hashtags: this.fb.array([]),
    });

    // this.donationService.getcatalogs().subscribe((data: Catalog[]) => {
    //   console.log(data);
    //   this.catalogs = data;
    // });
    //
    // this.donationService.gethashtags().subscribe((data: Hashtags[]) => {
    //   console.log(data);
    //   this.hashtags = data;
    // });
    //
    // this.getEvents();
  }

  private getEvents() {
    this.donationService.getEvents().subscribe((response: PublishNeed[]) => {
      this.Events = response;
    });
  }

  // private getEvents() {
  //   this.donationService.getEvents().subscribe((response: any) => {
  //     console.log('Response', response);
  //     this.events = response.map(
  //       (ev: {
  //         body: any;
  //         description: any;
  //         header: any;
  //         name: any;
  //         icon: string;
  //       }) => {
  //         ev.body = ev.description;
  //         ev.header = ev.name;
  //         ev.icon = 'fa-clock-o';
  //         return ev;
  //       }
  //     );
  //   });
  // this.events = [
  //   {
  //     id: 1,
  //     header: 'رمضان كريم',
  //     body: 'مساهمة لتوزيع سلل طعام ومواد غذائية للمحتاجين والمساكين',
  //     date: Date()
  //   },
  //   {
  //     id: 2,
  //     header: 'رمضان كريم',
  //     body: 'مساهمة لتوزيع سلل طعام ومواد غذائية للمحتاجين والمساكين',
  //     date: Date()
  //   }
  // ];
  // }

  addEvent(template: any) {
    this.currentEvent = {
      description: '',
      amount: 0,
      needDelivery: true,
      dueDate: new Date(),
      catalog: {
        id: 0,
      },
      hashtags: [
        {
          name: '',
        }
      ]
    };
    this.modalCallback = this.createEvent.bind(this);
    this.modalRef = this.modalService.show(template);
  }

  // New Hash Tag
  hashtags(): FormArray {
    return this.form.get('hashtags') as FormArray
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

  createEvent() {
    for (let i = 0; i < this.hashtags().length; i++) {
      this.currentEvent.hashtags[i] = {
        name: ''
      };
      this.currentEvent.hashtags[i].name = (this.form.get('hashtags').value[i]).hashtag;
    }

    const newEvent = {
      description: this.form.get('description')!.value,
      amount: this.form.get('amount')!.value,
      needDelivery: this.form.get('needDelivery')!.value,
      catalog: {
        id: this.form.get('catalog')!.value
      },
      hashtags: this.currentEvent.hashtags,
      dueDate: this.form.get('date')!.value,
    };
    this.modalRef.hide();
    console.log(newEvent);
    // this.donationService.createEvent(newEvent).subscribe(() => {
    //   this.getEvents();
    // });
  }

  // editEvent(index: number, template: any) {
  //   this.currentEvent = this.events[index];
  //   this.updateForm();
  //   this.modalCallback = this.updateEvent.bind(this);
  //   this.modalRef = this.modalService.show(template);
  // }
  //
  // updateEvent() {
  //   const eventData = {
  //     id: this.currentEvent.id,
  //     name: this.form.get('name')!.value,
  //     description: this.form.get('description')!.value,
  //     date: this.form.get('date')!.value,
  //   };
  //   this.modalRef.hide();
  //   this.donationService.updateEvent(eventData).subscribe(() => {
  //     this.getEvents();
  //   });
  // }
  //
  // deleteEvent(index: number) {
  //   this.donationService.deleteEvent(this.events[index]).subscribe(() => {
  //     this.getEvents();
  //   });
  // }

  viewRequest(id: number) {
    // console.log(id);
    this.router.navigate(['/publish/request', id]);
  }

  onCancel() {
    this.modalRef.hide();
  }

}
