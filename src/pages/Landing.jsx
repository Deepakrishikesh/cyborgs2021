import Fade from "react-reveal/Fade";
function Landing() {
  return (
    <>
    <Fade top cascade>
      <div className="mb-4">
        <div className="flex flex-col justify-center items-center text-center p-2 m-0">
          <h4 className="font-semibold text-base">
            Department of Computer Science and Engineering Proudly Presents
          </h4>
          <h2 className="text-base font-light">
            11th National Level Symposium
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-2">
          <h1 className="font-bold text-5xl mb-3 drop-shadow">CYBORG's 2021</h1>
          <p>28 AUG 2021 - ONLINE</p>
        </div>
        <div className="flex flex-col justify-center items-stretch m-2 lg:flex-row">
          <a
            className="flex justify-center bg-blue-500 text-white p-2 rounded-md shadow-lg m-2 duration-300 lg:hover:bg-blue-400 lg:hover:text-black"
            href="./#register"
            rel="noreferrer"
          >
            Register Now
          </a>
          <a
            className="flex justify-center border-blue-500 bg-blue-100 border-2 p-2 rounded-md shadow-lg m-2 duration-300 lg:hover:bg-blue-50"
            href="https://www.srmvalliammai.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            Visit College
          </a>
        </div>
      </div>
      </Fade>
    </>
  );
}

export default Landing;
