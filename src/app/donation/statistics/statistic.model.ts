import {ListStatistic} from './list-statistic.model';

export interface Statistic {
  'text': string,
  'returnCode': string,
  'list': ListStatistic[]
}
