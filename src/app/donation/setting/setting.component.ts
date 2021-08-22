import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DonationService} from '../donation-service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  SettingForm: FormGroup;
  submitted = false;
  allConfig = [];
  id: number;
  key = '';
  value = '';
  results = [];
  statusUpdate = false;
  updatedConfigId: number;

  constructor(private formBuilder: FormBuilder,
              private donationService: DonationService) {
    this.SettingForm = this.formBuilder.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.SettingForm.controls;
  }

  ngOnInit(): void {
    this.donationService.getConfigurationForNgo().subscribe((res: any) => {
      console.log(res.list);
      this.results = res.list;
      this.results.forEach(result => {
        for (const key in result) {
          this.id = result.id;
          if (key === 'key') {
            this.key = result[key];
          }
          if (key === 'value') {
            this.value = result[key];
          }
        }
        const config = {
          id: this.id,
          key: this.key,
          value: this.value
        };
        this.allConfig.push(config);
      });
    });
    console.log(this.allConfig);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.SettingForm.invalid) {
      return;
    }

    if (this.statusUpdate === false) {

      const configObj = {
        key: this.SettingForm.get('key').value,
        value: this.SettingForm.get('value').value,
      };

      this.donationService.addConfigurationForNgo(configObj).subscribe((res: any) => {
        console.log(res);
        const obj = {
          id: res.model.id,
          key: res.model.key,
          value: res.model.value
        };
        this.allConfig.push(obj);
      });
    } else {

      const configObj = {
        id: this.updatedConfigId,
        key: this.SettingForm.get('key').value,
        value: this.SettingForm.get('value').value,
      };

      this.donationService.updateConfigurationForNgo(configObj).subscribe((res: any) => {
        console.log(res);

        this.allConfig.filter(config => {
          if (config.id === res.model.id) {
            this.allConfig.splice(this.allConfig.indexOf(config), 1);
          }
        });

        const obj = {
          id: res.model.id,
          key: res.model.key,
          value: res.model.value
        };
        this.allConfig.push(obj);
      });
      this.statusUpdate = false;
    }
  }

  deleteConfig(configId: number) {
    this.donationService.deleteConfigurationForNgo(configId).subscribe((res: any) => {
      this.allConfig.filter(config => {
        if (config.id === configId) {
          this.allConfig.splice(this.allConfig.indexOf(config), 1);
        }
      });
    });
  }

  updateConfig(configId: number) {
    this.allConfig.filter(config => {
      if (config.id === configId) {
        console.log(config);
        this.updatedConfigId = configId;
        this.statusUpdate = true;
        this.SettingForm.patchValue(config);
      }
    });
  }

}
