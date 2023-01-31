import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //register
  register(uname:any,email:any,pswd:any){
    const body={
      uname,
      email,
      pswd
    }
    //server call to register an account and return response to register component
    return this.http.post('',body)
  }
}
