import birdsData from '../data/birdsData';
import birdsDataNew from '../data/birdsData-new';

const Randomizer = () => {
  const max = 5;
  const min = 0;
  return (Math.random() * (max - min) + min).toFixed(0);
};

const getRandomBird = key => {
  const randomBirdGroup = Randomizer();
  const randomBird = Randomizer();
  return key
    ? [birdsData[randomBirdGroup], +randomBird]
    : [birdsDataNew[randomBirdGroup], +randomBird];
};

export default getRandomBird;
