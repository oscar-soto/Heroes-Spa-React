import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map(({ id, superhero }) => (
        <li key={id}>{superhero}</li>
      ))}
    </ul>
  );
};
