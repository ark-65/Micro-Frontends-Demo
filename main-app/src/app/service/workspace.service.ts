import { Injectable } from '@angular/core';
import { byitAuthorityServer } from './api.state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AjaxResult } from '../interface/ajax-result.state';
import { SystemRoute } from '../interface/workspace.state';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  constructor(private http: HttpClient) {}

  getUserRouter(userId: string): Observable<AjaxResult<SystemRoute[]>> {
    return this.http.get<AjaxResult<SystemRoute[]>>(
      `${byitAuthorityServer}/menu/router`
    );
  }
}
