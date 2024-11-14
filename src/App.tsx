import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
// import { Main } from "./Components/Main/Main";
import { LoggedInClientView } from "./Views/LoggedInClientView";
// import { LogInPage } from "./Views/LogInPage";
// import { RegistrationPage } from "./Views/RegistrationPage";

function App() {
  return (
    <>
      <Header />
      <LoggedInClientView />
      {/* <Main /> */}
      {/* <LogInPage /> */}
      {/* <RegistrationPage /> */}
      <Footer />
    </>
  );
}

export default App;
