function isEven(n) {
    if (typeof n !== 'number') {
        throw new TypeError('Input must be a number');
    }
    if (!Number.isInteger(n)) {
        throw new TypeError('Input must be an integer');
    }
    return n % 2 === 0;
}

module.exports = isEven;

