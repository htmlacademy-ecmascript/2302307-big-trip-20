import { Sort } from '../const';
import dayjs from 'dayjs';

const sortByDayComparator = (p1, p2) => {
  const p1DateFrom = dayjs(p1.dateFrom);
  const p2DateFrom = dayjs(p2.dateFrom);

  return p1DateFrom.diff(p2DateFrom, 'day');
};

const sortByTimeComparator = (p1, p2) => {
  const p1DateFrom = dayjs(p1.dateFrom);
  const p1DateTo = dayjs(p1.dateTo);
  const p2DateFrom = dayjs(p2.dateFrom);
  const p2DateTo = dayjs(p2.dateTo);

  return p1DateTo.diff(p1DateFrom, 'minute') - p2DateTo.diff(p2DateFrom, 'minute');
};

const sort = {
  [Sort.DAY]: (points) => points.toSorted(sortByDayComparator),
  [Sort.EVENT]: () => [],
  [Sort.TIME]: (points) => points.toSorted(sortByTimeComparator),
  [Sort.PRICE]: (points) => points.toSorted((p1, p2) => p1.basePrice > p2.basePrice),
  [Sort.OFFERS]: () => []
};

export { sort };
