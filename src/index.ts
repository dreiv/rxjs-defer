import { interval, of, defer } from 'rxjs';

import { tapOnce } from './tapOnce'

const source = interval(1000).pipe(
  tapOnce(() => console.log('Fox')
));

source.subscribe(console.log);
source.subscribe(console.log);

// The same concept as using a function

const randNum = () => of(Math.random());
randNum().subscribe(console.log);
randNum().subscribe(console.log);

const randNum2 = defer(() => of(Math.random()));

randNum2.subscribe(console.log);
randNum2.subscribe(console.log);

// This already executing regardless the numbers of handlers
const promise = new Promise(resolve => {
  resolve();
});

// Deferring the creation of the promise until someone subscribes
const promiseDeferred = defer(() => {
  return new Promise(resolve => {
    resolve();
  });
});

promiseDeferred.subscribe(console.log);
