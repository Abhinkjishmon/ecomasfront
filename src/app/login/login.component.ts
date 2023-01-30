import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //login form group
  loginForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  constructor(private fb: FormBuilder) {

  }



  login() {
    if (this.loginForm.valid){
      alert('Login clicked')
      let uname = this.loginForm.value.uname
      let pswd = this.loginForm.value.pswd
    }
    else{
      alert('Invalid Form')
    }



  }
}
