import { HttpClient } from '@angular/common/http';
import { IReadOnlyRepository } from './ireadonly.repository';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

export abstract class ReadOnlyRepository<T> implements IReadOnlyRepository<T>{

    protected url: any = {
        get: '',
        getAll: ''
    }

    constructor(protected http: HttpClient) { }

    public get<TInput>(id: TInput): Observable<T> {
        return this.http.get(this.url.get)
            .pipe(map(response => <T>response));
    }
    public all(): Observable<Array<T>> {
        return this.http.get(this.url.getAll)
            .pipe(map(response => response as Array<T>));
    }


}