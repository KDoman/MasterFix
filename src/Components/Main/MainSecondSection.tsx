import PROFFESIONAL from "../../assets/svg/Proffesional.svg";
import { Button } from "../shared components/Button";

export const MainSecondSection = () => {
  return (
    <section className="pt-8 px-5 flex flex-col items-end">
      <h2 className="-text--black-color text-3xl font-bold text-right mb-5">
        Pomagaj innym, realizuj zlecenia, zarabiaj - dołącz do naszej
        społeczności fachowców!
      </h2>
      <Button>Zaloguj się</Button>
      <img src={PROFFESIONAL} />
    </section>
  );
};
