#!/usr/bin/env node

const { inputValidator } = require('./inputValidator.cjs');

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

    if (xData.length > maxWidth) {
        yData = yData.slice(0, maxWidth);
        xData = xData.slice(0, maxWidth);
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