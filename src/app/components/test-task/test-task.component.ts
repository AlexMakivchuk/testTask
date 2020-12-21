import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.scss']
})
export class TestTaskComponent implements OnInit, OnDestroy {
  checkRadio = false;
  form: FormGroup;
  formActive = true;
  submited: boolean;
  statusChanges: Subscription;
  valueChangesSubscription: Subscription;

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

  onSubmit(): void {
    this.formActive = !this.formActive;
    if (this.form.value.firstRadioButton === '' || this.form.value.secondRadioButton === '') {
      this.validateRadioButtons();
      setTimeout(() => {
        this.validateRadioButtons();
      }, 3000);
    }
    this.submited = true;
    this.disableAll();
    if (this.form.invalid) {
      setTimeout(() => {
        this.submited = false;
      }, 3000);
    }
  }

  ngOnInit(): void {
    this.valueChangesSubscribe();
  }

  private valueChangesSubscribe(): void {
    this.valueChangesSubscription = this.form.valueChanges.subscribe(data => {
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

  disableAll(): void {
    Object.keys(this.form.controls).forEach((key) => {
      const controll = this.form.get(key);
      console.log(key);
      if (controll.value) {
        controll.disable();
      }
    });
  }
}
