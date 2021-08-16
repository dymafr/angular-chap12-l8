import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup = new FormGroup({
    login: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('')
    }),
    nom: new FormControl('', Validators.required)
  });

  get nom() {
    return this.form.get('nom');
  }
  get password() {
    return this.form.get('login')!.get('password');
  }

  constructor() {}

  reinitialiser() {
    this.form.reset();
  }

  submit() {
    console.log(this.form.value);
  }
}
