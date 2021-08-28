import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {DonationService} from '../donation-service';
import {PublishNeed} from './model/publish-need';
import {Catalog} from '../../auth/register/model/catalog';
import {List} from './model/list';
import {ResponseUpdateModel} from './model/response-update-model';
import {ResponseUpdate} from './model/response-update';
import {ResponseNeed} from './model/response-need';

@Component({
  selector: 'app-publish-need',
  templateUrl: './publish-need.component.html',
  styleUrls: ['./publish-need.component.css']
})
export class PublishNeedComponent implements OnInit {

  selectedCatalog = '';
  selectedStatuesName = '';
  selectedHashtag = '';

  form!: FormGroup;
  modalRef!: BsModalRef;

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

  updateNeed: ResponseUpdate = {
    id: 0,
    description: '',
    amount: 0,
    dueDate: new Date(),
    needDelivery: false,
    catalog: {
      id: 0
    },
    hashtags: [
      {
        name: ''
      }
    ]
  };

  Events: List[];

  modalCallback!: () => void;

  catalogs: Catalog[];

  needId = 0;

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

    console.log(localStorage.getItem('authenticationToken'));

    this.donationService.getcatalogs().subscribe((data: Catalog[]) => {
      console.log(data);
      this.catalogs = data;
    });
    /*    this.catalogs = [
          {
            id: 1,
            name: 'clothes'
          },
          {
            id: 2,
            name: 'food'
          },
          {
            id: 3,
            name: 'car'
          }
        ];*/

    this.getAllNeeds();
  }

  private getAllNeeds() {
    this.donationService.getNeeds().subscribe((response: ResponseNeed) => {
      console.log(response);
      this.Events = response.list;
    });
    /*    this.Events = [
          {
            'id': 5,
            'description': 'بحاجة ملابس مدرسة',
            'amount': 20,
            'progress': null,
            'dueDate': new Date(Date.now()),
            'catalogName': 'clothes',
            'workName': null,
            'needStatuesName': 'need donate',
            'hashtags': [
              {
                'name': '# ملابس'
              }
            ]
          },
          {
            'id': 5,
            'description': 'بحاجة مواد غذائية',
            'amount': 20,
            'progress': null,
            'dueDate': new Date(Date.now()),
            'catalogName': 'clothes',
            'workName': null,
            'needStatuesName': 'need donate',
            'hashtags': [
              {
                'name': '# ملابس'
              }
            ]
          }
        ];*/
  }

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

    const newNeed = {
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
    console.log(newNeed);
    this.donationService.createNeed(newNeed).subscribe(() => {
      this.getAllNeeds();
    });
  }

  private updateForm() {
    this.form.setValue({
      description: this.updateNeed.description,
      amount: this.updateNeed.amount,
      needDelivery: this.updateNeed.needDelivery,
      date: new Date(this.updateNeed.dueDate),
      catalog: this.updateNeed.catalog.id,
      hashtags: this.updateNeed.hashtags[0].name
    });
  }

  editNeed(id: number, template: any) {

    this.donationService.getNeedById(id).subscribe((res: ResponseUpdateModel) => {
      this.updateNeed = res.model;
      console.log(this.updateNeed);
      this.updateForm();
    });
    this.modalCallback = this.updateNeedById.bind(this.currentEvent);
    this.modalRef = this.modalService.show(template);
  }

  updateNeedById() {
    for (let i = 0; i < (this.hashtags()).length; i++) {
      this.updateNeed.hashtags[i] = {
        name: ''
      };
      this.updateNeed.hashtags[i].name = (this.form.get('hashtags').value[i]).hashtag;
    }

    const needData = {
      id: this.updateNeed.id,
      description: this.form.get('description')!.value,
      amount: this.form.get('amount')!.value,
      needDelivery: this.form.get('needDelivery')!.value,
      catalog: {
        id: this.form.get('catalog')!.value
      },
      hashtags: this.updateNeed.hashtags,
      dueDate: this.form.get('date')!.value,
    };


    this.modalRef.hide();
    this.donationService.updateNeed(needData).subscribe(() => {
      this.getAllNeeds();
    });
  }

  deleteNeed(id: number) {
    this.donationService.deleteNeedById(id).subscribe(() => {
      this.getAllNeeds();
    });
  }

  viewResponses(id: number) {
    console.log(id);
    this.router.navigate(['donation/responses-need', id]);
  }

  viewDetails(id: number) {
    console.log(id);
    this.router.navigate(['donation/details-need', id]);
  }

  onCancel() {
    this.modalRef.hide();
  }

  Search() {
    if (this.selectedCatalog === '') {
      this.selectedCatalog = null;
    }
    if (this.selectedStatuesName === '') {
      this.selectedStatuesName = null;
    }
    if (this.selectedHashtag === '') {
      this.selectedHashtag = null;
    }
    const searchNeeds = {
      catalog: this.selectedCatalog,
      statusName: this.selectedStatuesName,
      hashTag: this.selectedHashtag
    };
    console.log(searchNeeds);
    this.donationService.searchNeeds(searchNeeds).subscribe((response: ResponseNeed) => {
      console.log(response);
      this.Events = response.list;
    });
  }
}
