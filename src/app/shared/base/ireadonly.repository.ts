import { Observable } from 'rxjs';

export interface IReadOnlyRepository<T> {
    get<TInput>(id: TInput): Observable<T>;
    all(): Observable<Array<T>>;
}