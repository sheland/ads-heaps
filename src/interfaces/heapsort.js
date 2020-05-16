/**
 * Compare two records 'left' and 'right', returning
 * -1 if left < right
 *  0 if left === right
 *  1 if left > right
 * 
 * @callback compareCallback
 * @param {record} left
 * @param {record} right
 * @returns {integer} -1, 0 or 1, as above
 */

const compareNumeric = (l, r) => l - r;
const compareStrings = (l, r) => l.localeCompare(r);

/**
 * Use a heap to sort an array containing n records
 * in-place in O(n log(n)) time
 * 
 * @param {record[]} data Array of records to sort
 * @param {compareCallback} [compare=compareNumeric] Comparison function
 */
const heapsort = (data, compare = compareNumeric) => {

}