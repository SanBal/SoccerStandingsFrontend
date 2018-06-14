import {User} from '../model/user';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  /**
   * Returns a promise object with the response of the backend login service
   */
  loginUser(user: User): Promise<any> {
    console.log('Authentication Service - Login');
    // Encode username and password with Base64
    const encoded = 'Basic ' + btoa(user.username + ':' + user.password);

    // Add 'Authorization' as key and Base64 encoded string as value to HTTP headers
    const headers = new HttpHeaders().set('Authorization', encoded);

    // Add "observe: 'response'" to HTTP options in order to receive
    // the full response including HTTP status etc.
    return this.http.get('http://localhost:8080/api/login', {headers, observe: 'response'})
      .toPromise() // Convert 'Observable' HTTP response to 'Promise' object
      .then(resp => {
        return resp;
      }) // Append callback function which is called if request was successful
      .catch(error => {
        // Return error promise with error response object
        throw Promise.reject(error);
      });
  }
}
