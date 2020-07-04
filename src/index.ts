import { interval } from 'rxjs';

import { tapOnce } from './tapOnce'

const source = interval(5000).pipe(
  tapOnce(() => console.log('🦊')
));

source.subscribe(console.log);
