import { TextInput } from "@fremtind/jkl-text-input-react";
import { Dekninger } from "./Dekninger";
import { Select } from "@fremtind/jkl-select-react";
import { useState } from "react";

const Flyt = () => {
  const [kjorelengde, setKjorelengde] = useState("12");
  const [bruksomrade, setBruksomrade] = useState("10");
  const [egenandel, setEgenandel] = useState("1");
  const [bonus, setBonus] = useState("75");
  const [kilometerstand, setKilometerstand] = useState("10000");
  const Summary = () => {
    return (
      <div className="rounded-md border w-1/3 border-border-separator py-40 px-24">
        <h2 className="heading-3 mb-24">Oppsummering</h2>
      </div>
    );
  };

  const Form = () => {
    return (
      <div className="rounded-md w-1/2 bg-hvit py-40 px-24">
        <h2 className="heading-3 mb-24">Om bilen</h2>
        <TextInput disabled label="Kilometerstand" placeholder="" value={""} />
        <Select
          name="view"
          value={kjorelengde}
          onChange={(e) => setKjorelengde(e.target.value)}
          label="Kjørelengde"
          items={[
            {
              value: "99",
              label: "Ubegrenset",
            },
            {
              value: "12",
              label: "12 000 km årlig",
            },
            {
              value: "25",
              label: "25 000 km årlig",
            },
            {
              value: "16",
              label: "16 000 km årlig",
            },
            {
              value: "8",
              label: " 8 000 km årlig",
            },
            {
              value: "60",
              label: "60 000 km årlig",
            },
            {
              value: "50",
              label: "50 000 km årlig",
            },
            {
              value: "40",
              label: "40 000 km årlig",
            },
            {
              value: "30",
              label: "30 000 km årlig",
            },
            {
              value: "20",
              label: "20 000 km årlig",
            },
            {
              value: "75",
              label: "75 000 km årlig",
            },
          ]}
        />

        <Select
          name="view"
          value={bruksomrade}
          onChange={(e) => setBruksomrade(e.target.value)}
          label="Bruksområde"
          items={[
            {
              value: "25",
              label: "Drosje",
            },
            {
              value: "60",
              label: "Utleiebil verksted, bilforhandler o.l.",
            },
            {
              value: "50",
              label: "Begravelse bil",
            },
            {
              value: "40",
              label: "Skolebil",
            },
            {
              value: "30",
              label: "Budbil",
            },
            {
              value: "10",
              label: "Yrkesbil",
            },
            {
              value: "65",
              label: "Demobil",
            },
            {
              value: "70",
              label: "Utleie primærvirksomhet",
            },
            {
              value: "55",
              label: "Sporadisk utleie av bil",
            },
          ]}
        />
        <Select
          name="view"
          value={egenandel}
          onChange={(e) => setEgenandel(e.target.value)}
          label="Egenandel"
          items={[
            {
              value: "1",
              label: "10 000",
            },
            {
              value: "2",
              label: "12 000",
            },
            {
              value: "3",
              label: "16 000",
            },
            {
              value: "4",
              label: "20 000",
            },
          ]}
        />
        <Select
          name="view"
          value={bonus}
          onChange={(e) => setBonus(e.target.value)}
          label="Bonus"
          items={[
            {
              value: "75",
              label: "75%",
            },
            {
              value: "10",
              label: "10%",
            },
            {
              value: "20",
              label: "20%",
            },
            {
              value: "30",
              label: "30%",
            },
            {
              value: "40",
              label: "40%",
            },
            {
              value: "50",
              label: "50%",
            },
            {
              value: "60",
              label: "60%",
            },
            {
              value: "70",
              label: "70%",
            },
            {
              value: "99",
              label: "0 eller mindre",
            },
          ]}
        />
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 152px)",
      }}
    >
      <nav
        aria-label="Sti"
        className="jkl-breadcrumb max-width-content mx-auto w-full  pt-16 md:px-40"
      >
        <ol className="jkl-breadcrumb__list">
          <li className="jkl-breadcrumb__item">
            <a
              className="jkl-link"
              href="http://localhost.sparebank1.no:3000/bedrift/hjem"
            >
              Hjem
            </a>
          </li>
          <span className="jkl-breadcrumb__item-separator" aria-hidden="true">
            ›
          </span>
          <li className="jkl-breadcrumb__item">
            <a
              className="jkl-link"
              href="http://localhost.sparebank1.no:3000/bedrift/forsikringer/kjop-forsikring"
            >
              Kjøp forsikring
            </a>
          </li>
          <span className="jkl-breadcrumb__item-separator" aria-hidden="true">
            ›
          </span>
          <li className="jkl-breadcrumb__item">
            <a
              aria-current="page"
              className="jkl-link"
              href="http://localhost.sparebank1.no:3000/bedrift/kjop/reise"
            >
              Reiseforsikring bedrift
            </a>
          </li>
        </ol>
      </nav>
      <main className="pl-40 max-width-content  mt-40 w-full flex-grow">
        <h1 className="title my-40">Flytt forsikringen på din ID.3 til oss</h1>
        <div className="relative flex min-w-full gap-40">
          <Form />
          <Summary />
        </div>
        <Dekninger />
      </main>
    </div>
  );
};

export default Flyt;
