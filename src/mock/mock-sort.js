import { sort } from '../utils/sort';

const createMockSort = (points) =>
  Object.entries(sort).map(([sortType, sortPoints]) => ({
    type: sortType,
    count: sortPoints(points).length
  }));

export { createMockSort };
