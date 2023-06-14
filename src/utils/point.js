import dayjs from 'dayjs';
import { EDIT_EVENT_DATETIME_FORMAT, EVENT_DATE_FORMAT, EVENT_TIME_FORMAT } from '../const';

export const humanizeEventDate = (eventDate) => eventDate ? dayjs(eventDate).format(EVENT_DATE_FORMAT) : '';

export const humanizeEventTime = (eventDate) => eventDate ? dayjs(eventDate).format(EVENT_TIME_FORMAT) : '';

export const humanizeEditEventDatetime = (eventDate) => eventDate ? dayjs(eventDate).format(EDIT_EVENT_DATETIME_FORMAT) : '';

export const sortPointsByTime = (p1, p2) => {
  const p1DateFrom = dayjs(p1.dateFrom);
  const p1DateTo = dayjs(p1.dateTo);
  const p2DateFrom = dayjs(p2.dateFrom);
  const p2DateTo = dayjs(p2.dateTo);

  return p1DateTo.diff(p1DateFrom, 'minute') - p2DateTo.diff(p2DateFrom, 'minute');
};

export const sortPointsByPrice = (p1, p2) => p1.basePrice - p2.basePrice;
