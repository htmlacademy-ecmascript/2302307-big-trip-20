import dayjs from 'dayjs';
import { EDIT_EVENT_DATETIME_FORMAT, EVENT_DATE_FORMAT, EVENT_TIME_FORMAT } from '../const';

export const humanizeEventDate = (eventDate) => eventDate ? dayjs(eventDate).format(EVENT_DATE_FORMAT) : '';

export const humanizeEventTime = (eventDate) => eventDate ? dayjs(eventDate).format(EVENT_TIME_FORMAT) : '';

export const humanizeEditEventDatetime = (eventDate) => eventDate ? dayjs(eventDate).format(EDIT_EVENT_DATETIME_FORMAT) : '';
