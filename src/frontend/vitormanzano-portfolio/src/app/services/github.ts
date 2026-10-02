import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../types/repository.interface';

// Ainda não vou utilizar a api do github
// export const GITHUB_API_URL = 'https://api.github.com/users/vitormanzano/repos';

@Service()
export class Github {
  // private httpClient = inject(HttpClient);
  //
  // getRepos(): Observable<Repository[]> {
  //   return this.httpClient.get<Repository[]>(GITHUB_API_URL);
  // }
}
