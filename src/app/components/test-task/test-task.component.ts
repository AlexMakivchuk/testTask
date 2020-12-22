import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {fromEvent, of, Subscription, timer} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {ControlNames} from '../../shared/Enums/control-names.enum';

@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.scss']
})
export class TestTaskComponent implements OnInit, OnDestroy {
  checkRadio = false;
  controlNames = ControlNames;
  form: FormGroup;
  submited = false;
  subscriptions: Subscription[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.valueChangesSubscribe();
    fromEvent(document.querySelector('#formId'), 'submit').pipe(
      tap(() => {
        this.submited = true;
        this.validateRadioButtons();
        this.disableAll();
      }),
      delay(3000),
      tap(() => {
        if (this.form.invalid) {
          this.submited = false;
          this.checkRadio = false;
        }
      })
    ).subscribe(() => {});
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

  private disableAll(): void {
    Object.keys(this.form.controls).forEach((key) => {
      const controll = this.form.get(key);
      if (controll.value) {
        controll.disable();
      }
    });
  }

  private validateRadioButtons(): void {
    this.checkRadio = this.form.value.firstRadioButton === '' || this.form.value.secondRadioButton === '';
  }

  private valueChangesSubscribe(): void {
    this.subscriptions.push(this.form.valueChanges.subscribe(() => {}));
    this.subscriptions.push(this.form.statusChanges.subscribe(() => {}));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  clearInput(name): void {
    this.form.get(name).patchValue('');
  }
}
