import { heroes } from '../data/heroes';

export const getHerobyid = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
