# console-plot

A simple tool for drawing basic graphs in the terminal using X and Y data.

https://www.npmjs.com/package/console-plot

## Installation

```bash
npm install console-plot
```

## Usage examples

```js
import { plotGraph } from 'console-plot';

plotGraph({
  yData: [1.4, 2.4, 2.8, 8.1, 8.4, 8.6, 8.7, 8.9, 10.5, 10.7],
  xData: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
});
```

```bash
 10.70                    *
 10.38                  *
 10.06
  9.74
  9.42
  9.10
  8.78              * *
  8.46          * *
  8.13        *
  7.81
  7.49
  7.17
  6.85
  6.53
  6.21
  5.89
  5.57
  5.25
  4.93
  4.61
  4.29
  3.97
  3.64
  3.32
  3.00
  2.68      *
  2.36    *
  2.04
  1.72
  1.40  *

        A B C D E F G H I J
```

```js
import { plotGraph } from 'console-plot';

plotGraph({
  yData: [1, 2, 3, 50, 51, 52, 53, 75, 99, 100],
  xData: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  pointer: '@',
});
```

```bash
100.00                                                 @      @
 96.59
 93.17
 89.76
 86.34
 82.93
 79.52
 76.10                                          @
 72.69
 69.28
 65.86
 62.45
 59.03
 55.62
 52.21                            @   @    @
 48.79                      @
 45.38
 41.97
 38.55
 35.14
 31.72
 28.31
 24.90
 21.48
 18.07
 14.66
 11.24
  7.83
  4.41                @
  1.00  @      @

        Ja..ry Fe..ry March April May June July August Se..er Oc..er
```
