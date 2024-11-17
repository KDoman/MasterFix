import { StepSection } from "../StepSection";
import { steps } from "../../data/Steps.js";
import { Button } from "../shared components/Button.js";

export const MainThirdSection = () => {
  return (
    <section className="py-8 px-5 -bg--grey-color">
      <h2 className="text-3xl font-bold -text--white-color text-center mb-8">
        Jak to działa?
      </h2>

      {steps.map(
        ({ children, numberSrc, numberAlt, imgSrc, imgAlt, title }, index) => (
          <StepSection
            key={index}
            numberSrc={numberSrc}
            numberAlt={numberAlt}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            title={title}
          >
            {children}
          </StepSection>
        )
      )}
      <Button additionalClass="min-w-full">Rozpocznij!</Button>
    </section>
  );
};
