import { filter } from '../utils/filter';

const createMockFilter = (points) =>
  Object.entries(filter).map(([filterType, filterPoints]) => ({
    type: filterType,
    count: filterPoints(points).length
  }));

export { createMockFilter };
