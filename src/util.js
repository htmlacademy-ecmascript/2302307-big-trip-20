import dayjs from 'dayjs';
import { EDIT_EVENT_DATETIME_FORMAT, EVENT_DATE_FORMAT, EVENT_TIME_FORMAT } from './const';

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

export const humanizeEventDate = (eventDate) => eventDate ? dayjs(eventDate).format(EVENT_DATE_FORMAT) : '';

export const humanizeEventTime = (eventDate) => eventDate ? dayjs(eventDate).format(EVENT_TIME_FORMAT) : '';

export const humanizeEditEventDatetime = (eventDate) => eventDate ? dayjs(eventDate).format(EDIT_EVENT_DATETIME_FORMAT) : '';

export const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

