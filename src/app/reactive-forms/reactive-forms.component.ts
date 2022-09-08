import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  reactiveForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl("", Validators.required)
  });

  login(){
    this.reactiveForm.setErrors({
      invalidLogin: true
    });
  }


  get username(){
    return this.reactiveForm.get('username')
  }


  constructor() {}

  ngOnInit(): void {}
}
