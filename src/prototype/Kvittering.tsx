const Kvittering = () => {
  return (
    <div>
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
              Bilforsikring bedrift
            </a>
          </li>
        </ol>
      </nav>
      <main className="max-width-content mx-auto  mt-40 w-full flex-grow ">
        <div className="relative flex min-w-full items-center justify-end   gap-40">
          <div className="sm:absolute sm:left-0  w-full flex-shrink-0">
            <div className="flex w-full flex-wrap justify-between gap-40 md:flex-nowrap md:justify-start md:gap-64">
              <div className="body mb-64 flex min-w-[320px] max-w-[500px] flex-col gap-24 rounded-[4px] rounded-s bg-background-container-high p-24 sm:mb-0 sm:gap-40 sm:p-40">
                <h1 className="title-small">Kvittering</h1>
                <p className="body">Forsikringen starter 12.03.2024.</p>
                <div>
                  <p className=" font-bold ">Dekker</p>
                  <ul className="jkl-list" data-testid="jkl-list">
                    <li
                      className="jkl-list__item jkl-list__item--iconed jkl-list__item--check"
                      data-testid="jkl-list-item"
                    >
                      Toppkasko
                    </li>
                    <li
                      className="jkl-list__item jkl-list__item--iconed jkl-list__item--check"
                      data-testid="jkl-list-item"
                    >
                      Hjelp på stedet
                    </li>
                    <li
                      className="jkl-list__item jkl-list__item--iconed jkl-list__item--check"
                      data-testid="jkl-list-item"
                    >
                      Leiebil ved skade
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold ">Pris</p>
                  <p className="body">5&nbsp;061&nbsp;kr per år</p>
                </div>
                <div>
                  <p className="font-bold ">Betaling</p>
                  <p className="body">
                    Legges til på eksisterende betalingsavtale.
                  </p>
                </div>
                <div>
                  <a
                    className="jkl-button jkl-button--primary "
                    href="http://localhost.sparebank1.no:3000/bedrift/forsikringer"
                  >
                    Se avtalen
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="En dame som går med koffert på perrongen på togstasjonen"
            loading="lazy"
            width="1000"
            height="900"
            decoding="async"
            data-nimg="1"
            className=" -z-10   h-[900px] hidden w-full max-w-[80vw] rounded-lg object-cover sm:block md:max-w-[1000px]"
            style={{ color: "transparent" }}
            src="/logo.svg"
          />
        </div>
        <div className="mb-64 flex flex-wrap gap-40  sm:mb-64 sm:mt-104 sm:gap-64">
          <section className="undefined ">
            <div className="max-w-[540px] flex flex-col gap-24 ">
              <h2 className="heading-1">Les mer om forsikringen</h2>
              <ul className="flex flex-col gap-24">
                <li>
                  <a
                    className="jkl-link jkl-link--external body"
                    target="_blank"
                    href="https://dokument.fremtind.no/ipid/IPID_Reise_BM.pdf"
                  >
                    Standardisert produktinformasjon (PDF)
                  </a>
                </li>
                <li>
                  <a
                    className="jkl-link jkl-link--external body"
                    target="_blank"
                    href="https://dokument.fremtind.no/vilkar/fremtind/bm/reise/Reise_Naering.pdf"
                  >
                    Vilkårsdokument (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Kvittering;
