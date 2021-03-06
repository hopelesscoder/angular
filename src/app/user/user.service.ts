import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';

import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  // private userUrl = 'http://localhost:8080/user-portal/user';
	private printUserUrl = 'https://fast-earth-86108.herokuapp.com/printuser';
	private addUserUrl = 'https://fast-earth-86108.herokuapp.com/adduser';
	private mongoUserUrl = 'https://fast-earth-86108.herokuapp.com/api/users';


  public getUser(id: string) {
    const url = `${this.mongoUserUrl}/${id}`;
    return this.http.get<User>(url);
  }

  public getUsers() {
    return this.http.get<User[]>(this.mongoUserUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.mongoUserUrl + "/"+ user.id);
  }

  //no mongo
  public addUser(user) {
    return this.http.post<User>(this.addUserUrl, user);
  }
  
  
  public createUser(user) {
    return this.http.post<User>(this.mongoUserUrl, user);
  }
  
  
  public printUser(user) {
	
    return this.http.post<any>(this.printUserUrl, user, { responseType: 'blob' as 'json' })
	.pipe(
	map(
        (res) => {
            return new Blob([res], { type: 'application/pdf' });
		}
	)
	);
	
  }

}