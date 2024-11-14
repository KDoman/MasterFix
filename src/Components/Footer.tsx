import MASTER_FIX_LOGO from "../assets/Master_fix_logo.png";
import { Button } from "./shared components/Button";
import COPYRIGHT_LOGO from "../assets/svg/copyright.svg";

export const Footer = () => {
  return (
    <footer className="px-5 py-8">
      <img
        src={MASTER_FIX_LOGO}
        alt="Logo Master Fix"
        className="max-w-20 mx-auto"
      />
      <ul className="min-h-52 grid justify-center items-center text-center">
        <li>Strona główna</li>
        <li>O nas</li>
        <li>Kontakt</li>
        <Button>Zaloguj się</Button>
      </ul>
      <div className="flex flex-row justify-center mt-10 w-full">
        <img
          src={COPYRIGHT_LOGO}
          alt="Copyright logo"
          className="max-w-6 mr-2"
        />
        <p className="text-center">2024 Kacper Domański</p>
      </div>
    </footer>
  );
};
