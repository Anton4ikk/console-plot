export interface ValidatorParams {
  yData: number[];
  xData: (string | number)[];
  maxHeight: number;
  maxWidth: number;
  pointer: string;
}

export function inputValidator(params: ValidatorParams): void;