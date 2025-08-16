#!/usr/bin/env node

const { inputValidator } = require('./inputValidator.cjs');

/**
 * Downsamples data arrays to fit within maxWidth while preserving data characteristics
 * @param {Array<number>} yData - Y-axis values
 * @param {Array<string|number>} xData - X-axis values
 * @param {number} maxWidth - Target width
 * @returns {Object} Object with downsampled yData and xData arrays
 */
function downsampleData(yData, xData, maxWidth) {
    if (yData.length <= maxWidth) {
        return { yData, xData };
    }

    const step = yData.length / maxWidth;
    const downsampledY = [];
    const downsampledX = [];

    for (let i = 0; i < maxWidth; i++) {
        const start = Math.floor(i * step);
        const end = Math.floor((i + 1) * step);
        
        // For Y values, use average of the range for better representation
        let ySum = 0;
        let count = 0;
        for (let j = start; j < end && j < yData.length; j++) {
            ySum += yData[j];
            count++;
        }
        const avgY = count > 0 ? ySum / count : yData[start];
        downsampledY.push(avgY);

        // For X values, use the first value in the range (could also use middle)
        downsampledX.push(xData[start]);
    }

    return { yData: downsampledY, xData: downsampledX };
}

/**
 * Draws a graph in the console based on input data
 * @param {Object} params - graph parameters
 * @param {Array<number>} params.yData - values along the Y-axis
 * @param {Array<string|number>} params.xData - values along the X-axis
 * @param {Number} params.maxHeight - maximum height of the graph
 * @param {Number} params.maxWidth - maximum width of the graph
 * @param {String} params.pointer - symbol to represent the data points
 */
function plotGraph({
    yData,
    xData,
    maxHeight = 30,
    maxWidth = 30,
    pointer = '*',
}) {
    inputValidator({ yData, xData, maxHeight, maxWidth, pointer });

    // Downsample data if it exceeds maxWidth
    if (xData.length > maxWidth) {
        const downsampledData = downsampleData(yData, xData, maxWidth);
        yData = downsampledData.yData;
        xData = downsampledData.xData;
    }

    const maxY = Math.max(...yData);
    const minY = Math.min(...yData);
    const scaledY = yData.map(
        y => Math.round(((y - minY) / (maxY - minY)) * (maxHeight - 1))
    );

    let labelLine = ' '.repeat(8);
    let labelSizes = [];
    for (let lbl of xData) {
        if (typeof lbl !== 'string') {
            lbl = String(lbl);
        }

        if (lbl.length > 6) {
            lbl = `${lbl.slice(0, 2)}..${lbl.slice(-2)}`;
            labelSizes.push(6);
        } else {
            labelSizes.push(lbl.length);
        }

        labelLine += `${lbl} `;
    }

    for (let row = maxHeight - 1; row >= 0; row--) {
        const currentValue = (
            (row / (maxHeight - 1)) * (maxY - minY) + minY
        ).toFixed(2).padStart(6);

        let line = currentValue + '  ';
        for (let col = 0; col < yData.length; col++) {
            line += (scaledY[col] === row) ?
                `${pointer}${' '.repeat(labelSizes[col])}` : ` ${' '.repeat(labelSizes[col])}`;
        }
        console.log(line);
    }

    console.log('');
    console.log(labelLine);
}

module.exports = { plotGraph };