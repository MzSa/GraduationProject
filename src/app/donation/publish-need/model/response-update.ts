export interface ResponseUpdate {
  'id': number;
  'description': string;
  'amount': number;
  'needDelivery': boolean;
  'dueDate': Date;
  'catalog': {
    'id': number;
  };
  'hashtags': [
    {
      'name': string;
    }
  ];
}
