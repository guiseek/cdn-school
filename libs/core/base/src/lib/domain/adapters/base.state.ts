import { distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export abstract class BaseState<T> {
  private _state: BehaviorSubject<T>;

  protected get state() {
    return this._state.getValue();
  }

  constructor(initialState: T) {
    this._state = new BehaviorSubject(initialState);
  }

  protected select<K>(selector: (state: T) => K) {
    return this._state.asObservable().pipe(
      map((state: T) => selector(state)),
      distinctUntilChanged()
    );
  }

  protected map(mapper: (state: T) => T) {
    this._state.next(mapper(this.state));
  }

  protected patch(value: Partial<T>) {
    this._state.next({ ...this.state, ...value });
  }

  protected update(value: T) {
    this._state.next(value);
  }

  protected pick(Key: keyof T) {
    return this.state[Key];
  }
}
