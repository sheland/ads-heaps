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
    return Math.floor(i / 2);
  }

  _maxHeapify(i) {

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
    let i = this._count;
    // console.log(`Inserted record with priority ${priority} at location ${i}`);

    const record = this._storage[i];
    record.priority = priority;
    record.element = element;

    let p = this._parent(i);
    let parent = this._storage[p];
    while (parent && record.priority > parent.priority) {
      // console.log(`Swapping record at ${i} (pri ${record.priority}) with ${p} (pri ${parent.priority})`);
      // Swap record and parent (bubble up)
      // Note: in a language like C, Java or Rust, where the array is full of records
      // instead of references to records, we would need to swap the priority and
      // the reference to the element instead of the records themselves.
      this._storage[p] = record;
      this._storage[i] = parent;

      // Reset i to the new location, take a reference to the new parent, and repeat
      i = p;
      p = this._parent(i);
      parent = this._storage[p];
    }
  }

  /**
   * Remove and return the record with the highest priority
   * 
   * @returns {*} The data stored in the highest-priority record, or undefined if the queue is empty
   */
  removeNext() {
    if (this._count === 0) {
      return undefined;
    }

    const record = this._storage[1];

    this._count -= 1;
    return record.element;
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