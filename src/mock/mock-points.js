import { nanoid } from 'nanoid';
import { EventType } from '../const';
import { getRandomArrayElement, getRandomInt } from '../utils/common';

const POINT_COUNT = getRandomInt(0, 5);
const mockPoints = [];

const createMockPoints = () => {
  const eventTypes = Object.values(EventType);
  const rndMonth = getRandomInt(1, 12);
  let rndDay = getRandomInt(1, 15);

  for (let i = 0; i < POINT_COUNT; i++) {
    const point = {
      'id': nanoid(),
      'basePrice': getRandomInt(50, 3000),
      'dateFrom': `2019-${rndMonth}-${rndDay}T${getRandomInt(0, 11)}:${getRandomInt(10, 59)}`,
      'dateTo': `2019-${rndMonth}-${rndDay++}T${getRandomInt(12, 23)}:${getRandomInt(10, 59)}`,
      'destination': `destination-${getRandomInt(0, 4)}`,
      'isFavorite': getRandomInt(1, 10) % 2 === 0,
      'offers': [],
      'type': getRandomArrayElement(eventTypes)
    };

    for (let j = 0; j < getRandomInt(0, 4); j++) {
      point.offers.push(`offer-${point.type}-${j}`);
    }

    mockPoints.push(point);
  }
};


const getMockPoints = () => {
  if (mockPoints.length === 0) {
    createMockPoints();
  }
  return mockPoints;
};

const getRandomMockPoint = () => {
  if (mockPoints.length === 0) {
    createMockPoints();
  }
  return getRandomArrayElement(mockPoints);
};

export { getMockPoints, getRandomMockPoint };
