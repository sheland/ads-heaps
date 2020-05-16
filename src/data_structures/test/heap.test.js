import MaxHeap from '../heap';

const isMaxHeap = function () {
  // Special case for the root (no parent)
  if (this._count > 0) {
    const record = this._storage[1];
    expect(record.priority).toBeDefined();
  }

  for (let i = 2; i <= this._count; i += 1) {
    const record = this._storage[i];
    const parent = this._storage[this._parent(i)];

    expect(record.priority).toBeDefined();
    expect(parent.priority).toBeGreaterThanOrEqual(record.priority);
  }

  return true;
}

describe(MaxHeap, () => {
  let heap;

  beforeEach(() => {
    heap = new MaxHeap();
    heap.isMaxHeap = isMaxHeap;
  });

  it('starts empty', () => {
    expect(heap.count()).toBe(0);
  });

  describe('insert interface', () => {
    it('increases count by one', () => {
      heap.insert(3, 'test');
      expect(heap.count()).toBe(1);

      ['a', 'b', 'c'].forEach((word, i) => {
        heap.insert(i, word);
        expect(heap.count()).toBe(i + 2);
      });
    });

    it('alllows up to size inserts', () => {
      for (let i = 0; i < MaxHeap.DEFAULT_SIZE; i += 1) {
        heap.insert(i, `element_${i}`);
      }
      expect(heap.count()).toBe(MaxHeap.DEFAULT_SIZE);
    });

    it('throws if the queue is full', () => {
      for (let i = 0; i < MaxHeap.DEFAULT_SIZE; i += 1) {
        heap.insert(i, `element_${i}`);
      }
      expect(() => {
        heap.insert(3, "no more for me thanks i'm full")
      }).toThrow();
    });

    it('respects the size passed into the constructor', () => {
      const size = 10;
      heap = new MaxHeap(size);
      expect(heap.size).toBe(size);

      for (let i = 0; i < size; i += 1) {
        heap.insert(i, `element_${i}`);
      }
      expect(heap.count()).toBe(size);

      expect(() => {
        heap.insert(3, "no more for me thanks i'm full")
      }).toThrow();
    });
  });

  describe('insert implemntation', () => {
    it('is a max heap after 1 insert', () => {
      heap.insert(3, 'test');
      expect(heap.isMaxHeap()).toBeTruthy();
    });

    it('is a max heap after sorted inserts', () => {
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(i => {
        heap.insert(i, `element_${i}`);
        expect(heap.isMaxHeap()).toBeTruthy();
      });
    });

    it('is a max heap after reverse-sorted inserts', () => {
      [9, 8, 7, 6, 5, 4, 3, 2, 1].forEach(i => {
        heap.insert(i, `element_${i}`);
        expect(heap.isMaxHeap()).toBeTruthy();
      });
    });

    it('is a max heap after random inserts', () => {
      [3, 7, 0, 8, 2, 5, 1, 4, 9, 6].forEach(i => {
        heap.insert(i, `element_${i}`);
        expect(heap.isMaxHeap()).toBeTruthy();
      });
    });
  });

  describe('removeNext', () => {
    it('removes the only record, returns its element, and reduces the count', () => {
      heap.insert(3, 'test');

      expect(heap.removeNext()).toBe('test');
      expect(heap.count()).toBe(0);
    });

    it('returns undefined and does not reduce the count if the heap is empty', () => {
      expect(heap.removeNext()).toBeUndefined();
      expect(heap.count()).toBe(0);

      const elements = ['a', 'b', 'c'];
      elements.forEach((word, i) => heap.insert(i, word));
      elements.forEach(() => heap.removeNext());
      expect(heap.count()).toBe(0);

      expect(heap.removeNext()).toBeUndefined();
      expect(heap.count()).toBe(0);
    });

    it('removes the max element if it was inserted first', () => {

    });

    it('removes the max element if it was inserted last', () => {

    });

    it('removes the max element if it was inserted in the middle', () => {

    });

    it('removes all sorted input in priority order', () => {

    });

    it('removes all reverse-sorted input in priority order', () => {

    });

    it('removes all random input in priority order', () => {

    });

    it('prevents the heap from overflowing', () => {

    });
  });

  describe('count', () => {

  });
});