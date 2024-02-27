import { useState } from "react";
import { List } from "./components/List";
import { Random } from "./components/Random";
import { Select } from "@fremtind/jkl-select-react";
import { people } from "./data";

type Filters = {
  gender: "alle" | "mann" | "kvinne";
  status: "alle" | "midlertidig" | "doed" | "utflyttet" | "levende";
};

function App() {
  const [view, setView] = useState<"RANDOM" | "LIST">("RANDOM");
  const [filters, setFilters] = useState<Filters>({
    gender: "alle",
    status: "alle",
  });

  const filteredPeople = people.filter((person) => {
    if (filters.gender === "alle") return person;
    if (filters.gender === "mann" && person.gender === "mann") return person;
    if (filters.gender === "kvinne" && person.gender === "kvinne")
      return person;
  });

  return (
    <>
      <h1>Personer</h1>
      <Select
        name="view"
        value={view}
        onChange={(e) => setView(e.target.value)}
        label="Visning"
        items={[
          {
            label: "Listevisning",
            value: "LIST",
          },
          {
            label: "Tilfeldig person",
            value: "RANDOM",
          },
        ]}
      />
      <Select
        name="view"
        value={filters.gender}
        onChange={(e) =>
          setFilters({
            ...filters,
            gender: e.target.value,
          })
        }
        label="Kjønn"
        items={[
          {
            label: "Alle",
            value: "alle",
          },
          {
            label: "Mann",
            value: "mann",
          },
          {
            label: "Kvinne",
            value: "kvinne",
          },
        ]}
      />
      <Select
        name="view"
        value={filters.status}
        onChange={(e) =>
          setFilters({
            ...filters,
            status: e.target.value,
          })
        }
        label="Status"
        items={[
          {
            label: "Alle",
            value: "alle",
          },
          {
            label: "Levende",
            value: "levende",
          },
          {
            label: "Død",
            value: "doed",
          },
          {
            label: "Utflyttet",
            value: "utflyttet",
          },
          {
            label: "Midlertidig",
            value: "midlertidig",
          },
        ]}
      />
      <main className="container max-w-[1440px] mx-auto">
        {view === "RANDOM" && <Random people={filteredPeople} />}
        {view === "LIST" && <List people={filteredPeople} />}
      </main>
    </>
  );
}
export default App;
