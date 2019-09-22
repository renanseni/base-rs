import { Observable } from 'rxjs';
import { IReadOnlyRepository } from './ireadonly.repository';

export interface IBaseRepository<T> extends IReadOnlyRepository<T> {
    add<TInput, TResult>(command: TInput): Observable<TResult>;
    update<TInput, TResult>(id: any, command: TInput): Observable<TResult>;
    delete<Tinput, TResult>(id: any, command?: Tinput): Observable<TResult>;
    updateStatus<TInput, TResult>(id: any, item: TInput): Observable<TResult>;
}