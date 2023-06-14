export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

export const capitalize = (str) => str[0].toUpperCase() + str.slice(1);


export const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);
