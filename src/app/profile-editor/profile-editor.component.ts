import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      province: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}

