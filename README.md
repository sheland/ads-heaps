# Heaps Lab

Ada Developers Academy / Lovelace Learning Labs

Advanced Data Structures 1 - Trees

Week 4

## Instructions

Download

```sh
$ git clone <paste-url>
$ cd <created-directory>
```

Install

```sh
$ npm install
```

Run tests in watch mode

```sh
$ npm test
```

## Assignment

### Core

1. Read through the existing code in `heap.js` and skim the tests in `heap.test.js`
1. Implement `insert` and `_float` to make the appropriate tests pass
1. Implement `removeMax` and `_sink` to make the appropriate tests pass
1. Implement `_buildheap` to make the appropriate tests pass
1. Implement `heapsort` to make the appropriate tests pass

### Optional

**Submit your assignment in Learn before starting to work on these, then do them on a branch**

1. Test and implement a function to remove an element from the heap. What does the interface for this look like?
1. Modify your heap to use a 0-indexed array.
1. Make your heap accept arbitrary data:
    - Modify the constructor to take an optional callback `isHigherPriority`, and use it to compare records in `float` and `sink`
        - What should the default value of `isHigherPriority` be?
        - Test your capabilities by creating a min-heap
    - Modify `insert` to take an opaque record object instead of a priority and element. Fix all the tests that break!
    - Modify `removeMax` to return an opaque record object. Fix all the tests that break!
    - Test your implementation by heapsorting an array of integers, an array of strings, and an array of complex objects