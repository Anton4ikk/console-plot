export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';

export interface ValidatorParams {
  yData: number[];
  xData: (string | number)[];
  maxHeight: number;
  maxWidth: number;
  pointer: string;
  color?: Color | null;
}

export function inputValidator(params: ValidatorParams): void;