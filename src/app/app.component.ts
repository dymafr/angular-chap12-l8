import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  get nom() {
    return this.form.get("nom");
  }
  get password() {
    return this.form.get("login").get("password");
  }

  constructor() {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      login: new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("")
      }),
      nom: new FormControl("", Validators.required)
    });
  }

  reinitialiser() {
    this.form.reset();
  }

  submit() {
    console.log(this.form.value);
  }
}
