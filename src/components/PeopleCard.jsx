import React from "react";

const PeopleCard = ({ name, desig, phone }) => {
  return (
    <>
      <div className="flex bg-white m-4 items-stretch rounded-md shadow-lg p-1 lg:p-2">
        <div>
          <h1 className="text-2xl m-1 font-bold">{name}</h1>
          <p className="text-lg m-1 italic">{desig}</p>
          <p className="text-md m-1">
            Phone:{" "}
            <a href={`tel:${phone}`} className="underline">
              {phone}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default PeopleCard;