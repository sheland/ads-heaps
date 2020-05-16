import MaxHeap from '../heap';

describe(MaxHeap, () => {
  let heap;

  beforeEach(() => {
    heap = new MaxHeap();
  });

  it('starts empty', () => {
    expect(heap.count()).toBe(0);
  });

  describe('insert', () => {
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

  describe.skip('removeNext', () => {
    it('removes the only element and reduces the count', () => {
      
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