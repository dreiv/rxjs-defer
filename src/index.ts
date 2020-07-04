import { interval } from 'rxjs';

import { tapOnce } from './tapOnce'

const source = interval(1000).pipe(
  tapOnce(() => console.log('Fox')
));

source.subscribe(console.log);
source.subscribe(console.log);
