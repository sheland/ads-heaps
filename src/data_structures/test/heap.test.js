import MaxHeap from '../heap';

const verifyMaxHeap = function () {
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
}

describe(MaxHeap, () => {
  let heap;

  beforeEach(() => {
    heap = new MaxHeap();
    heap.verifyMaxHeap = verifyMaxHeap;
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
      heap.verifyMaxHeap();
    });

    it('is a max heap after sorted inserts', () => {
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(i => {
        heap.insert(i, `element_${i}`);
        heap.verifyMaxHeap();
      });
    });

    it('is a max heap after reverse-sorted inserts', () => {
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].forEach(i => {
        heap.insert(i, `element_${i}`);
        heap.verifyMaxHeap();
      });
    });

    it('is a max heap after random inserts', () => {
      [3, 7, 0, 8, 2, 5, 1, 4, 9, 6].forEach(i => {
        heap.insert(i, `element_${i}`);
        heap.verifyMaxHeap();
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
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].forEach(i => {
        heap.insert(i, `element_${i}`);
      });
      expect(heap.count()).toBe(10);
      expect(heap.removeNext()).toBe(`element_9`);
      expect(heap.count()).toBe(9);
    });

    it('removes the max element if it was inserted last', () => {
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(i => {
        heap.insert(i, `element_${i}`);
      });
      expect(heap.count()).toBe(10);
      expect(heap.removeNext()).toBe(`element_9`);
      expect(heap.count()).toBe(9);
    });

    it('removes the max element if it was inserted in the middle', () => {
      [3, 7, 0, 8, 2, 5, 1, 4, 9, 6].forEach(i => {
        heap.insert(i, `element_${i}`);
      });
      expect(heap.count()).toBe(10);
      expect(heap.removeNext()).toBe(`element_9`);
      expect(heap.count()).toBe(9);
    });

    const insertRemoveVerify = (priorities, target = heap) => {
      priorities.forEach((priority, i) => {
        target.insert(priority, `element_${priority}`);
        expect(target.count()).toBe(i + 1);
        target.verifyMaxHeap();
      });

      priorities.sort().reverse().forEach((priority, i) => {
        expect(target.removeNext()).toBe(`element_${priority}`);
        expect(target.count()).toBe(priorities.length - i - 1);
        target.verifyMaxHeap();
      });
    }

    it('removes all sorted input in priority order', () => {
      insertRemoveVerify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('removes all reverse-sorted input in priority order', () => {
      insertRemoveVerify([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });

    it('removes all random input in priority order', () => {
      insertRemoveVerify([3, 7, 0, 8, 2, 5, 1, 4, 9, 6]);
    });

    it('prevents the heap from overflowing', () => {
      heap = new MaxHeap(10);
      heap.verifyMaxHeap = verifyMaxHeap;
      insertRemoveVerify([3, 7, 0, 8, 2, 5, 1, 4, 9, 6], heap);
      insertRemoveVerify([3, 7, 0, 8, 2, 5, 1, 4, 9, 6], heap);
    });
  });
});