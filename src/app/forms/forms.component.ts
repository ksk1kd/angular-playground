import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
})
export class Forms {
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
