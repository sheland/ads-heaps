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

  _swap(i, j) {
    // Note: in a language like C, Java or Rust, where the array is full of records
    // instead of references to records, we would need to swap the priority and
    // the reference to the element instead of the records themselves.
    const temp = this._storage[i];
    this._storage[i] = this._storage[j];
    this._storage[j] = temp;
  }

  _float(i) {
    const priority = (j) => this._storage[j].priority;

    let p = this._parent(i);
    while (p > 0 && priority(i) > priority(p)) {
      this._swap(i, p);

      i = p;
      p = this._parent(i);
    }
  }

  _sink(i) {
    const inBounds = (j) => j <= this._count;
    const priority = (j) => this._storage[j].priority;

    let finished = false;
    while (!finished) {
      const l = this._left(i);
      const r = this._right(i);

      let max = i;
      if (inBounds(l) && priority(l) > priority(i)) {
        max = l;
      }
      if (inBounds(r) && priority(r) > priority(max)) {
        max = r;
      }
      if (max === i) {
        finished = true;
      } else {
        this._swap(i, max);
        i = max;
      }
    }
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

    const record = this._storage[this._count];
    record.priority = priority;
    record.element = element;

    this._float(this._count);
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

    const element = this._storage[1].element;
    this._storage[1].element = undefined; // clear stale reference

    this._swap(1, this._count);
    this._count -= 1;
    this._sink(1);

    return element;
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