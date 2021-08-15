import React from "react";
import Fade from "react-reveal/Fade";
import { FiInstagram } from "react-icons/fi";

const PeopleCard = ({ name, desig, phone, photo, insta, animDur }) => {
  return (
    <>
      <Fade duration={animDur}>
        <div className="bg-white m-4 items-stretch rounded-md shadow-lg p-1 lg:p-2">
          <div>
            <img src={photo} alt="" className="rounded-3xl w-72 h-64 m-auto mt-4" />
            <h1 className="text-2xl m-1 font-bold">{name}</h1>
            <p className="text-lg m-1 italic">{desig}</p>
            <div className="flex justify-between items-center">
              <p className="text-md m-1">
                Phone:{" "}
                <a href={`tel:${phone}`} className="underline">
                  {phone}
                </a>
              </p>
              { insta!=="" ?
                <a href={insta} target="_blank" rel="noreferrer">
                  <FiInstagram className="text-gray-700 text-xl m-2 duration-200 lg:hover:text-red-500" />
                </a>
                : null
              }
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default PeopleCard;
