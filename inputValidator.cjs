/**
 * Validates input data
 * @param {Object} params - graph parameters
 * @param {Array<number>} params.yData - values along the Y-axis
 * @param {Array<string>} params.xData - values along the X-axis
 * @param {Number} params.maxHeight - maximum height of the graph
 * @param {Number} params.maxWidth - maximum width of the graph
 * @param {String} params.pointer - symbol to represent the data points
 */
function inputValidator({ yData, xData, maxHeight, maxWidth, pointer }) {

    if (!Array.isArray(xData)) {
        throw new Error('xData must be array');
    }

    if (!Array.isArray(yData)) {
        throw new Error('yData must be array');
    }

    if (xData.length > yData.length) {
        throw new Error('xData length should not be more than yData');
    }

    if (xData.length < yData.length) {
        throw new Error('yData length should not be more than xData');
    }

    if (!Number.isInteger(maxHeight) || maxHeight > 50) {
        throw new Error('maxHeight must be an integer not greater than 50');
    }

    if (!Number.isInteger(maxWidth) || maxWidth > 50) {
        throw new Error('maxWidth must be an integer not greater than 50');
    }

    if (typeof pointer !== 'string' || pointer.length !== 1) {
        throw new Error('pointer must be a single character string');
    }
}

module.exports = { inputValidator };