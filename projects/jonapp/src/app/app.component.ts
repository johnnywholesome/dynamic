import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jonapp';

  person = {
    firstName: {
      label: 'First Name',
      value: 'Jon',
      type: 'text',
      validators: {
        required: true
      }
    },
    lastName: {
      label: 'Last Name',
      value: 'Schmedt',
      type: 'text'
    },
    age: {
      label: 'Age',
      value: 41,
      type: 'number',
      validators: {
        min: 18
      }
    },
    gender: {
      label: 'Gender',
      value: 'M',
      type: 'radio',
      options: [
        {
          label: 'Male',
          value: 'M'
        },
        {
          label: 'Female',
          value: 'F'
        }
      ]      
    },
    city: {
      label: 'City',
      value: 'LA',
      type: 'select',
      options: [
        {
          label: '(choose one)',
          value: ''
        },
        {
          label: 'Chicago',
          value: 'CHC'
        },
        {
          label: 'Los Angeles',
          value: 'LA'
        },
        {
          label: 'New York',
          value: 'NY'
        }    
      ]
    }        
  };
}
