import "./App.css";
import logo from "./assets/vallilogo.png";
import Registration from "./pages/Registration";
import Events from "./pages/Events";
import Landing from "./pages/Landing";
import fire from "./firebase";
import { useEffect } from "react";

function App() {
  const analytics = fire.analytics();
  useEffect(() => {
    analytics.logEvent("page_view");
  }, [analytics]);
  return (
    <>
      <main className="m-0">
        <section className="flex flex-col items-center h-scree mb-2 bg-fixed bg-center bg-cover bg-img">
          <section className="flex flex-col justify-center items-center m-1 p-5">
            <img src={logo} alt="College Header" className="lg:w-2/3" />
          </section>
          <section>
            <Landing />
          </section>
        </section>
        <section>
          <Events />
        </section>
        <section id="register">
          <Registration />
        </section>
      </main>
    </>
  );
}

export default App;
