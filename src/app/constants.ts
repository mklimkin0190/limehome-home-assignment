import { FormField, Side } from './types';

export const PERSONAL_FORM_FIELDS: FormField[] = [
  {
    type: 'text',
    label: 'First Name',
  },
  {
    type: 'text',
    label: 'Last Name',
  },
  {
    type: 'email',
    label: 'E-mail',
  },
  {
    type: 'tel',
    label: 'Phone Number',
  },
];

export const ADDRESS_FORM_FIELDS: FormField[] = [
  {
    type: 'text',
    label: 'Street',
  },
  {
    type: 'text',
    label: 'House Number',
    placeholder: 'House Nr.',
    isHalfLine: true,
    renderSide: Side.Left,
  },
  {
    type: 'text',
    label: 'Zip Code',
    isHalfLine: true,
    renderSide: Side.Right,
  },
  {
    type: 'text',
    label: 'City Name',
  },
  {
    type: 'text',
    label: 'Country',
  },
];

export const PAYMENT_FORM_FIELDS: FormField[] = [
  {
    type: 'tel',
    label: 'Credit Card Number',
    inputmode: 'numeric',
  },
  {
    type: 'month',
    label: 'Expiry Date',
    isHalfLine: true,
    renderSide: Side.Left,
  },
  {
    type: 'password',
    label: 'CVV',
    isHalfLine: true,
    renderSide: Side.Right,
    inputmode: 'numeric',
  },
  {
    type: 'text',
    label: 'City Name',
  },
  {
    type: 'text',
    label: 'Card Holder Name',
  },
];
