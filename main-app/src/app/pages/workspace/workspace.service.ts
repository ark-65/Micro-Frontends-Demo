import { Injectable } from '@angular/core';
import { byitAuthorityServer } from '../../service/api.state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AjaxResult } from '../../interface/ajax-result.state';
import { SystemRoute } from '../../interface/workspace.state';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  constructor(private http: HttpClient) {}
}
