import "./App.css";
import logo from "./assets/vallilogo.png";
import Registration from "./pages/Registration";
import Events from "./pages/Events";
import Landing from "./pages/Landing";
import People from "./pages/People";
import Footer from "./pages/Footer";
import fire from "./firebase";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";

function App() {
  const analytics = fire.analytics();
  useEffect(() => {
    analytics.logEvent("page_view");
  }, [analytics]);
  return (
    <>
      <main className="m-0 lg:h-screen bg-fixed bg-center bg-cover bg-img">
        <section className="flex flex-col items-center mb-2 ">
          <Fade top>
            <section className="flex flex-col justify-center items-center m-1 p-5">
              <img
                src={logo}
                alt="College Header"
                className="lg:w-2/3 h-auto"
              />
            </section>
          </Fade>
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
        <section>
          <People />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
