import { Observable, OperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';

export function tapOnce<T>(fn: Function): OperatorFunction<T, T> {
  return function (source: Observable<any>) {
    let run = false;
    return source.pipe(
      tap(() => {
        if (!run) {
          fn();
          run = true;
        }
      })
    );
  };
}
