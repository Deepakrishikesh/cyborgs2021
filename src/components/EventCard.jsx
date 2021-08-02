import Swal from "sweetalert2";

function EventCard({ title, desc }) {
  const showMoreInfo = () => {
    Swal.fire({
      title: title,
      html: `${desc}<br><br><p>ajsdf jsdjf l;asdk fja;lsdkj f</p>`,
      showCloseButton: true,
      showConfirmButton: false
    });
    // Swal.fire(title, desc, "asdflkalskdfj;");
  };
  return (
    <>
      <div
        className="flex bg-white flex-col m-1 rounded-md shadow-lg p-1"
        onClick={showMoreInfo}
      >
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkbob.github.io%2Fimages%2Fsample-4.jpg&f=1&nofb=1"
          alt="Event Name"
          className="rounded"
        />
        <div className="">
          <h2 className="text-lg m-1 font-bold">{title}</h2>
          <p className="text-base m-1">{desc}</p>
          {/* <p className="text-base m-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            obcaecati, eveniet corrupti unde commodi repellendus quia quos
            possimus nam, laboriosam magni esse voluptates, earum rem quod?
            Velit ad nemo ipsa.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default EventCard;
