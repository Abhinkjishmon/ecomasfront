import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //register form group
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@]*')]],
    uname: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private fb: FormBuilder) {

  }
  register() {
    if (this.registerForm.valid) {
      alert('Register clicked')
      let email = this.registerForm.value.email
      let uname = this.registerForm.value.uname
      let pswd = this.registerForm.value.pswd
    }
    else {
      alert('Invalid Form')
    }
  }
}
