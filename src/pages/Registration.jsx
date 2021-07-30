function Registration() {
  return (
    <>
      <div className="p-3 bg-gray-300">
        <h1 className="m-1">Register</h1>
        <div className="flex flex-col justify-center items-stretch">
          <input type="text" className="m-2 p-2 rounded-sm" placeholder="some" />
          <input type="text" className="m-2 p-2 rounded-sm" placeholder="some" />
          <input type="text" className="m-2 p-2 rounded-sm" placeholder="some" />
          <input type="text" className="m-2 p-2 rounded-sm" placeholder="some" />
          <button className="p-2 rounded-md shadow-md bg-blue-500 m-2">Register</button>
        </div>
      </div>
    </>
  );
}

export default Registration;
