import { Component, ElementRef } from '@angular/core';
import { FormGroup } from './types';
import {
  PERSONAL_FORM_FIELDS,
  ADDRESS_FORM_FIELDS,
  PAYMENT_FORM_FIELDS,
} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroups: FormGroup[] = [
    {
      name: 'Personal Information',
      fields: PERSONAL_FORM_FIELDS,
      open: true,
    },
    {
      name: 'Address',
      fields: ADDRESS_FORM_FIELDS,
      open: true,
    },
    {
      name: 'Credit Card',
      fields: PAYMENT_FORM_FIELDS,
      open: true,
      note: 'Enter your card details: its number, expiration date and the 3-digit number on the back of the card. Please provide the credit card holder name as well.',
    },
  ];

  constructor(private elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  onAccordionHeaderClick(index: number) {
    this.formGroups[index].open = !this.formGroups[index].open;
  }
}
