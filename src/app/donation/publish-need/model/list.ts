import {Hashtags} from '../../../auth/register/model/hashtags';

export interface List {
  id: number;
  description: string;
  amount: number;
  progress: string;
  dueDate: Date;
  catalogName: string;
  workName: string;
  needStatuesName: string;
  hashtags: Hashtags[];
}
