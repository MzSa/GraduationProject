import {Hashtags} from '../../../auth/register/model/hashtags';

export interface NeedById {
  id: number;
  description: string;
  amount: number;
  progress: number;
  dueDate: Date;
  catalogName: string;
  workName: string;
  benefactorId: number;
  benefactorUserName: string;
  needStatuesName: string;
  state: string;
  county: string;
  city: string;
  neighborhood: string;
  street: string;
  hashtags: Hashtags[];
}
