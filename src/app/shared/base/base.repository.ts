import { HttpClient } from '@angular/common/http';
import { ReadOnlyRepository } from './readonly.repository';
import { IBaseRepository } from './ibase.repository';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseRepository<T> extends ReadOnlyRepository<T> implements IBaseRepository<T>{
    constructor(http: HttpClient) {
        super(http);

        this.url.add = ``;
        this.url.update = ``;
        this.url.delete = ``;
        this.url.updateStatus = (id: any): string => '';
    }

    add<TInput, TResult>(command: TInput): Observable<TResult> {
        return this.http.post(this.url.add, command)
            .pipe(map(response => response as TResult));
    }
    update<TInput, TResult>(id: any, command: TInput): Observable<TResult> {
        return this.http.put(this.url.update(id), command)
            .pipe(map(response => response as TResult));
    }
    delete<Tinput, TResult>(id: any, command?: Tinput): Observable<TResult> {
        return this.http.delete(this.url.delete(id))
            .pipe(map(response => response as TResult));
    }
    updateStatus<TInput, TResult>(id: any, item: TInput): Observable<TResult> {
        return this.http.put(this.url.updateStatus(id), item)
            .pipe(map(response => response as TResult));
    }
}