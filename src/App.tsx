import { useState } from "react";
import { List } from "./components/List";
import { Random } from "./components/Random";
import { Select } from "@fremtind/jkl-select-react";

function App() {
  const [view, setView] = useState<"RANDOM" | "LIST">("RANDOM");
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
      <main className="container max-w-[1440px] mx-auto">
        {view === "RANDOM" && <Random />}
        {view === "LIST" && <List />}
      </main>
    </>
  );
}
export default App;
