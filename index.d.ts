export interface PlotGraphParams {
  yData: number[];
  xData: (string | number)[];
  maxHeight?: number;
  maxWidth?: number;
  pointer?: string;
}

export function plotGraph(params: PlotGraphParams): void;