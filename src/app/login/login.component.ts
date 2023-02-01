import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMsg:string=''

  //login form group
  loginForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  constructor(private fb: FormBuilder,private api:ApiService,private router:Router) {

  }




  login() {
    if(this.loginForm.valid){
      let uname = this.loginForm.value.uname
      let pswd = this.loginForm.value.pswd
      //login api call
      this.api.login(uname,pswd)
      .subscribe(
        //success
        (result:any)=>{
        alert(result.message)
        //navigate to dashboard
        this.router.navigateByUrl('dashboard')

        
      },
      //client
      (result:any)=>{
        this.errorMsg = result.error.message
      }
      )
    }
    else{
      alert('Invalid Form')
    }



  }
}
