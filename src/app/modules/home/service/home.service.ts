import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRepository } from 'src/app/shared/base/base.repository';
import { TagModel } from 'src/app/shared/models/tag.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class HomeService extends BaseRepository<TagModel> {

  constructor(http: HttpClient) {
    super(http);

    this.url.getAll = () => `${environment.serviceBase}api/tags`;
  }

  public getAll(): Observable<Array<TagModel>> {
    return this.http.get(this.url.getAll())
      .pipe(map(response => <Array<TagModel>>response));
  }
}
