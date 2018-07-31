import { Component } from '@angular/core';
/**
 * Each form is bound to an instance of FormGroup. 
 * We will use the FormBuilder to handle form control creation, 
 * and Validators will help setup validation on each form control.
 */
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';

  constructor(private fb: FormBuilder) {
    /**
     * A FormGroup aggregates the values of each child FormControl into one object, 
     * with each control name as the key. 
     * It calculates its status by reducing the status values of its children. 
     * For example, if one of the controls in a group is invalid, 
     * the entire group becomes invalid.
     * FormGroup is one of the three fundamental building blocks used to define 
     * forms in Angular, along with FormControl and FormArray.
     * When instantiating a FormGroup, pass in a collection of child controls as the first argument. The key for each child registers the name for the control.
     */
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      validate: ''
    })
  }

  adPost(post){
    
  }
}
