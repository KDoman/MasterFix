import { motion } from "framer-motion";
import { HamburgerMenu } from "./HamburgerMenu";
import MASTER_FIX_LOGO from "../assets/Master_fix_logo.png";

export const Header = () => {
  return (
    <header className="h-32 -bg--white-color flex">
      <motion.img
        src={MASTER_FIX_LOGO}
        alt="Master Fix Logo"
        className="max-h-full mx-auto"
        animate={{}}
      />
      <nav>
        <HamburgerMenu />
      </nav>
    </header>
  );
};
