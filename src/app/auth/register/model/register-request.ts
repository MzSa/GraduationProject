import {Profiles} from './profiles';
import {Hashtags} from './hashtags';
import {NeedTypes} from './need-types';

export interface RegisterRequest {
  name: string;
  // loginName: string;
  profiles: Profiles[];
  hashtags: Hashtags[];
  needTypes: NeedTypes[];
}
