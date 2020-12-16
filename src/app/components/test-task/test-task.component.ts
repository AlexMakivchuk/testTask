import {Component, Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, RadioControlValueAccessor, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Subscription} from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.css']
})
export class TestTaskComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formActive = true;
  checkRadio = false;
  matcher = new MyErrorStateMatcher();
  public valueChangesSubscription: Subscription;
  public statusChanges: Subscription;

  constructor(private formBuilder: FormBuilder) {

    this.buildForm();
  }
  private buildForm(): void {
    this.form = this.formBuilder.group({
      firstInput: ['', [Validators.required]],
      secondInput: ['', [Validators.required]],
      thirdInput: ['', [Validators.required]],
      fourthInput: ['', [Validators.required]],
      fifthInput: ['', [Validators.required]],
      firstRadioButton: ['', Validators.required],
      secondRadioButton: ['', Validators.required]
    });
  }
  onSubmit(): void{
    console.log(this.form);
    this.formActive = !this.formActive;
    if (this.form.value.firstRadioButton === '' || this.form.value.secondRadioButton === '') {
      this.validateRadioButtons();
      setTimeout(() => {
        this.validateRadioButtons();
      }, 3000);
    }
  }
  ngOnInit(): void {
    console.log(this.form.value);
    this.valueChangesSubscribe();
  }
  private valueChangesSubscribe(): void {
    this.valueChangesSubscription =  this.form.valueChanges.subscribe(data => {
      console.log(data);
    });
    this.statusChanges = this.form.statusChanges.subscribe(data => {
    });
  }
  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
    this.statusChanges.unsubscribe();
  }
  validateRadioButtons(): void {
      this.checkRadio = !this.checkRadio;
  }
}
