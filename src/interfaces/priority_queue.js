class PriorityQueue {
  /**
   * Create a new empty max heap of a given size, optionally from an existing array
   * 
   * @param {number} [size=1023] Maximum capacity of the queue
   * @param {{priority: number, element: *}[]} [fromArray] Build the heap from this array instead. The given array must be 1-indexed, and records must have the given form.
   */
  constructor({ size = this.constructor.DEFAULT_SIZE, fromArray } = {}) {

  }

  /**
   * Use a heap to sort an array in-place in n*log(n) time
   * 
   * @param {{priority: number, element: *}[]} array Data to sort. The given array must be 1-indexed, and records must have the given form.
   */
  static heapsort(array) {

  }

  /**
   * Add a record to the queue with a given priority
   * 
   * @param {number} priority Priority of the record
   * @param {*} element Data to store in this record
   * @throws If the heap is full
   */
  insert(priority, element) {

  }

  /**
   * Remove and return the record with the highest priority
   * 
   * @returns {*} The data stored in the highest-priority record, or undefined if the queue is empty
   */
  removeMax() {

  }

  /** 
   * How many records are in the priority queue?
   * 
   * @returns {number} Record count
   */
  count() {

  }
}