class Heap {
  /**
   * Create a new empty priority queue of a given size
   * 
   * @param {number} [size=1023] Maximum capacity of the queue
   */
  constructor(size = 1023) {
    this._storage = new Array(size);
    this._count = 0;
  }

  _left(i) {
    return 2 * i;
  }

  _right(i) {
    return 2 * i + 1;
  }

  _parent(i) {
    return i / 2;
  }

  /**
   * Add a record to the queue with a given priority
   * 
   * @param {number} priority Priority of the record
   * @param {*} element Data to store in this record
   * @throws If the heap is full
   */
  insert(priority, element) {
    this._count += 1;
  }

  /**
   * Remove and return the record with the highest priority
   * 
   * @returns {*} The data stored in the highest-priority record
   */
  next() {

  }

  /** 
   * How many records are in the priority queue?
   * 
   * @returns {number} Record count
   */
  count() {
    return this._count;
  }
}