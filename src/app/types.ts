export enum Side {
  Right = 'right',
  Left = 'left',
}

export interface FormField {
  type: string;
  label: string;
  placeholder?: string;
  isHalfLine?: boolean;
  renderSide?: Side;
  inputmode?: string;
}

export interface FormGroup {
  name: string;
  fields: FormField[];
  open: boolean;
  note?: string;
}
