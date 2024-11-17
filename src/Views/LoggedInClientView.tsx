import { Card } from "../Components/Card";
import { Input } from "../Components/shared components/Input";
import { workersTemplate } from "../data/WorkersTemplate";

export const LoggedInClientView = () => {
  return (
    <div className="shadow-xl-midle rounded-lg p-5 mx-6 ">
      <h2 className="pt-2 pb-8 text-2xl font-bold">Witaj Imię!</h2>
      <Input id="text" type="text">
        Wyszukaj fachowca
      </Input>
      <div>
        <ul className="flex overflow-x-scroll pb-4 ">
          {/* Tutaj będzie pobieranie z backendu */}

          {/* Jeśli filtr jest aktywny to border, i background się zmienia na niebiesko */}
          <li className="p-1 px-2 border-2  rounded-md text-sm mr-2 -bg--active-bg-filter">
            Wszyscy
          </li>
          <li className="p-1 px-2 border-2  rounded-md text-sm mx-2">
            Elektryk
          </li>
          <li className="p-1 px-2 border-2  rounded-md text-sm mx-2">
            Hydraulik
          </li>
          <li className="p-1 px-2 border-2  rounded-md text-sm mx-2">Malarz</li>
          <li className="p-1 px-2 border-2  rounded-md text-sm mx-2">
            Tapeciarz
          </li>
          <li className="p-1 px-2 border-2  rounded-md text-sm mx-2">Monter</li>
          <li className="p-1 px-2 border-2  rounded-md text-sm mx-2">
            Dostawca
          </li>
          <li className="p-1 px-2 border-2  rounded-md text-sm min-w-max ml-2">
            Złota rączka
          </li>
        </ul>
      </div>
      <h2 className="mt-5">Lista aktywnych fachowców</h2>
      {workersTemplate.map((worker, index) => (
        <>
          <Card {...worker} index={index} />
        </>
      ))}
    </div>
  );
};
