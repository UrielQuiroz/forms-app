import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [ JsonPipe, ReactiveFormsModule ],
  templateUrl: './dynamic-page.html'
})
export class DynamicPageComponent {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Call Of Duty', Validators.required],
        ['GTA San Andres', Validators.required],
      ],
      Validators.minLength(2)
    )
  })

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  // isValidFieldInArray(fromArray: FormArray, index: number) {
  //   return (
  //     fromArray.controls[index].errors && fromArray.controls[index].touched
  //   )
  // }

}
