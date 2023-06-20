import { EventType } from '../const';
import { getRandomInt } from '../utils/common';

const mockOffers = [];

const createMockOffers = () => {
  const eventTypes = Object.values(EventType);
  eventTypes.forEach((eventType) => {
    const offer = {
      'type': eventType,
      'offers': []
    };

    for (let i = 0; i < 5; i++) {
      offer.offers.push({
        'id': `offer-${offer.type}-${i}`,
        'title': `${offer.type} upgrade`,
        'price': getRandomInt(50, 1000)
      });
    }

    mockOffers.push(offer);
  });
};


const getMockOffers = () => {
  if (mockOffers.length === 0) {
    createMockOffers();
  }
  return mockOffers;
};

export { getMockOffers };
