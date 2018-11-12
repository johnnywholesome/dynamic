import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'jon-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  @Input() formDataObject;

  personProps = [];

  constructor() { }

  ngOnInit() {
    const formDataObj = {};
    for(const prop of Object.keys(this.formDataObject)) {
      formDataObj[prop] = new FormControl(this.formDataObject[prop].value), this.mapValidator(this.formDataObject[prop].validators);
      this.personProps.push({
        key: prop,
        label: this.formDataObject[prop].label,
        type: this.formDataObject[prop].type,
        options: this.formDataObject[prop].options
      });
    }
    this.form = new FormGroup(formDataObj);
  }

  mapValidator(validators) {
    if(validators) {
      return Object.keys(validators).map(validationType = {
        if(validationType === 'required') {
          return Validators.required;
        } else if (validationType === 'min') {
          return Validators.min(validators[validationType]);
        }
      }
    } else {
      return [];
    }
  }
}
