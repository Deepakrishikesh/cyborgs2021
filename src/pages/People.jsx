import React from "react";
import PeopleCard from "../components/PeopleCard";
import iu from "../assets/event_logos/iu.jpg";
import president from "../assets/organisers_photo/president.jpeg";
import vice_president from "../assets/organisers_photo/vice_president.png";
const People = () => {
  return (
    <div className="lg:flex lg:flex-wrap justify-center">
      <PeopleCard
        animDur={900}
        name="Miss S. Sneha"
        desig="President"
        phone="6381484247"
        photo={president}
      />
      <PeopleCard
        animDur={950}
        name="Miss Someone"
        desig="Vice President"
        phone="1234567890"
        photo={vice_president}
      />
      <PeopleCard
        animDur={1050}
        name="Miss Someone"
        desig="Designation"
        phone="1234567890"
        photo={iu}
      />
      <PeopleCard
        animDur={1200}
        name="Miss Someone"
        desig="Designation"
        phone="1234567890"
        photo={iu}
      />
    </div>
  );
};

export default People;
