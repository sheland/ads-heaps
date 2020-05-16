class MaxHeap {
  static DEFAULT_SIZE = 1023

  /**
   * Create a new empty priority queue of a given size
   * 
   * @param {number} [size=1023] Maximum capacity of the queue
   */
  constructor(size = this.constructor.DEFAULT_SIZE) {
    this.size = size;

    // Create storage array with sentinel
    this._storage = [undefined];

    // Add record slots to storage array
    for (let i = 0; i < size; i += 1) {
      this._storage.push({ priority: undefined, element: undefined });
    }

    // Last index will always be at count
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
    if (this._count === this.size) {
      throw new Error('Heap is full!');
    }
    this._count += 1;
  }

  /**
   * Remove and return the record with the highest priority
   * 
   * @returns {*} The data stored in the highest-priority record
   */
  removeNext() {

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

export default MaxHeap;