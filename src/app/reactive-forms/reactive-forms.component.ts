import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  reactiveForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
