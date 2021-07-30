import './App.css';
import logo from './assets/vallilogo.png';
import Registration from './pages/Registration';
import Events from './pages/Events';
import Landing from './pages/Landing';
//import fire from "./firebase";

function App() {
  return (
    <>
      <main>
        <section className="flex flex-col justify-center items-center m-1 p-5">
          <img src={logo} alt="College Header" className=""/>
        </section>
        <section>
          <Landing/>
        </section>
        <section>
          <Events/>
        </section>
        <section>
          <Registration/>
        </section>
       
      </main>
    </>
  );
}

export default App;
