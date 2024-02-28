import { useEffect, useState } from "react";
import type { Person as PersonType } from "../data";

type RandomProps = {
  people: PersonType[];
};

export const Random: React.FC<RandomProps> = ({ people }) => {
  const [person, setPerson] = useState(
    people[Math.floor(Math.random() * people.length)]
  );

  useEffect(() => {
    const onSpace = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === " ") {
        navigator.clipboard.writeText(person.ssn);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    };
    const onEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setPerson(people[Math.floor(Math.random() * people.length)]);
        setCopied(false);
      }
    };

    window.addEventListener("keyup", (e: KeyboardEvent) => {
      onEnter(e);
      onSpace(e);
    });
  }, [person, people]);

  useEffect(() => {
    setPerson(people[Math.floor(Math.random() * people.length)]);
  }, [people]);
  const [copied, setCopied] = useState(false);

  if (people.length === 0) return <p>Ingen personer</p>;

  return (
    <div className="random">
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <p>
        {person.status} {person.gender}
      </p>
      <input
        readOnly
        value={person.ssn}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            navigator.clipboard.writeText(person.ssn);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }
        }}
        onClick={() => {
          navigator.clipboard.writeText(person.ssn);
          setCopied(true);

          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
      />

      <div className="buttons">
        <button
          onClick={() => {
            setPerson(people[Math.floor(Math.random() * people.length)]);
            setCopied(false);
          }}
        >
          Ny person
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(person.ssn);
            setCopied(true);

            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          Kopier til utklippstavlen
        </button>
      </div>
      {copied && <p className="copied">Kopiert til utklippstavlen</p>}
    </div>
  );
};
