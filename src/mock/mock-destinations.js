import { getRandomArrayElement, getRandomInt } from '../utils/common';

const cities = ['Berlin', 'Paris', 'London', 'Barcelona', 'Amsterdam'];
const loremDescriptions = [
  '1Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  '2Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam erat volutpat.',
  '3Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  '4Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  '5Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  ''
];
const mockDestinations = [];

const createMockDestinations = () => {
  cities.forEach((city, index) => {
    const destination = {
      'id': `destination-${index}`,
      'description': getRandomArrayElement(loremDescriptions),
      'name': city,
      'pictures': []
    };

    for (let j = 0; j < getRandomInt(0, 8); j++) {
      destination.pictures.push({
        'src': `https://loremflickr.com/248/152?random=${getRandomInt(1, 10000)}`,
        'description': getRandomArrayElement(loremDescriptions)
      });
    }

    mockDestinations.push(destination);
  });
};


const getMockDestinations = () => {
  if (mockDestinations.length === 0) {
    createMockDestinations();
  }
  return mockDestinations;
};

export { getMockDestinations };
