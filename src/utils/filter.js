import { Filter } from '../const';
import dayjs from 'dayjs';

const filter = {
  [Filter.EVERYTHING]: (points) => points,
  [Filter.FUTURE]: (points) => points.filter((point) => dayjs(point.dateFrom) > dayjs()),
  [Filter.PRESENT]: (points) => points.filter((point) => dayjs(point.dateFrom) <= dayjs() && dayjs(point.dateTo) >= dayjs()),
  [Filter.PAST]: (points) => points.filter((point) => dayjs(point.dateTo) < dayjs())
};

export { filter };
