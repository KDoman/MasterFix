import WORKERS from "../../assets/svg/Workers.svg";

export const MainFirstSection = () => {
  return (
    <section className="-bg--grey-color -text--white-color py-12 px-5">
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">
          Niech <span className="-text--blue-color">MasterFix</span> naprawi to
          za Ciebie.
        </h1>
        <label htmlFor="proffesional-select">
          Znajdź fachowca, który pomoże Ci w mgnieniu oka
        </label>
        <select className="-text--black-color min-h-12 min-w-full rounded-lg focus-visible:outline-none mt-2">
          <option>Elektryk</option>
          <option>Hydraulik</option>
          <option>Nazwa 3</option>
        </select>
        <img
          src={WORKERS}
          alt="People holding tools"
          className="mt-12 -bg--white-color rounded-lg"
        />
      </div>
    </section>
  );
};
