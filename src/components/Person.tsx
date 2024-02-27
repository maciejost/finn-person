import { useState } from "react";
import type { Person as PersonType } from "../data";

export const Person = ({ person }: { person: PersonType }) => {
  const [hasCopied, setHasCopied] = useState(false);

  return (
    <button
      className="p-40 border-granitt border-2 rounded-xl w-[300px]"
      onClick={() => {
        navigator.clipboard.writeText(person.ssn);
        setHasCopied(true);

        setTimeout(() => {
          setHasCopied(false);
        }, 2000);
      }}
    >
      <li>
        <p>
          {person.firstName} {person.lastName}
        </p>
        <p>
          {person.status} {person.gender}
        </p>
        {hasCopied ? <p>Kopiert til utklippstavlen</p> : <p>{person.ssn}</p>}
      </li>
    </button>
  );
};
