import { useState } from "react";
import CLOSED_HAMB_MENU from "../assets/svg/Hamb_menu.svg";
import OPENED_HAMB_MENU from "../assets/svg/Opened_hamb_menu.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./shared components/Button";

export const HamburgerMenu = () => {
  const [isHambOpened, setIsHumbOpened] = useState<boolean>(true);
  return (
    <>
      <AnimatePresence mode="wait">
        {!isHambOpened && (
          <motion.ul
            className="absolute top-0 -text--black-color-color -bg--darker-white min-h-60 p-2 pr-20 flex flex-col justify-evenly rounded-l-xl rouded-bl-xl"
            initial={{ x: 100 }}
            animate={{ x: -180 }}
            exit={{ x: 100 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <li className="w-full text-nowrap pl-2">Strona główna</li>
            <li className="pl-2">O nas</li>
            <li className="pl-2">Kontakt</li>
            <Button>Zaloguj się</Button>
          </motion.ul>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isHambOpened ? (
          <motion.img
            onClick={() => setIsHumbOpened((prev) => !prev)}
            key="closed-menu"
            src={CLOSED_HAMB_MENU}
            className="max-w-9 absolute top-0 right-1 "
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ) : (
          <motion.img
            onClick={() => setIsHumbOpened((prev) => !prev)}
            key="opened-menu"
            src={OPENED_HAMB_MENU}
            className="max-w-10 absolute top-0 right-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
