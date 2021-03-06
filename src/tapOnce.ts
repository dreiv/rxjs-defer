import { Observable, OperatorFunction, defer } from 'rxjs';
import { tap } from 'rxjs/operators';

export function tapOnce<T>(fn: Function): OperatorFunction<T, T> {
  return (source: Observable<any>) => {
    return defer(() => {
      let run = false;

      return source.pipe(
        tap(() => {
          if (!run) {
            fn();
            run = true;
          }
        })
      );
    })
  }
}
