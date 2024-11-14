import { Button } from "../Components/shared components/Button";
import { Input } from "../Components/shared components/Input";

export const RegistrationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-8">
      <div className="w-full bg-white rounded-lg shadow-xl-midle sm:max-w-md ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Zarejstruj się
          </h1>
          <form action="#">
            <Input id="login" type="text">
              Login
            </Input>
            <Input id="password" type="password">
              Hasło
            </Input>
            <Input id="email" type="email">
              Email
            </Input>
            <Input id="name" type="text">
              Imię
            </Input>

            <Button additionalClass="min-w-full my-4">Zarejestruj się</Button>
            <p className="text-sm font-light text-gray-500 inline-block mr-2">
              Masz już konto?
            </p>
            <a
              href="#"
              className="text-sm font-medium text-primary-600 hover:underline text-nowrap"
            >
              Zaloguj się
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
