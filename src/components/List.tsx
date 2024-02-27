import { people } from "../data";
import { Person } from "./Person";

type ListProps = {
  label: string;
};

export const List = () => {
  return (
    <div>
      <ul className="flex flex-wrap gap-40 justify-center">
        {people.map((person, index) => (
          <Person key={index} person={person} />
        ))}
      </ul>
    </div>
  );
};
