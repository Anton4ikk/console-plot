export type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';

export interface PlotGraphParams {
  yData: number[];
  xData: (string | number)[];
  maxHeight?: number;
  maxWidth?: number;
  pointer?: string;
  color?: Color | null;
}

export function plotGraph(params: PlotGraphParams): void;