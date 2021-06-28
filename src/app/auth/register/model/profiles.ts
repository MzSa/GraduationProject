import {Goals} from './goals';

export interface Profiles {
  loginName: string;
  password: string;
  governorate: string;
  city: string;
  address: string;
  mobileNumber: string;
  email: string;
  webSite: string;
  description: string;
  goals: Goals[];
}
