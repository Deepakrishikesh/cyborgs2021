function Landing() {
  return (
    <>
    <div className="mb-4">
      <div className="flex flex-col justify-center items-center text-center p-2 m-0">
        <h4 className="font-semibold text-base">Department of Computer Science and Engineering Proudly Presents</h4>
        <h2 className="text-base font-light">11th National Level Symposium</h2>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-2">
        <h1 className="font-bold text-5xl mb-3 drop-shadow">CYBORG's 2021</h1>
        <p>
          99 MON 2021 - ONLINE
        </p>
      </div>
      <div className="flex flex-col justify-center items-stretch m-2 lg:flex-row">
        <button className="bg-blue-500 p-2 rounded-md shadow-lg m-2">
          Register Now
        </button>
        <button className="border-blue-500 bg-blue-100 border-2 p-2 rounded-md shadow-lg m-2">
          Know More
        </button>
      </div>
      </div>
    </>
  );
}

export default Landing;
