import { ObservableInput, Observable, SubscribableOrPromise } from 'rxjs';

export function defer(observableFactory: () => ObservableInput<any>) {
  return new Observable(subscriber => {
    const source: any = observableFactory();

    return source.subscribe(subscriber);
  });
}
