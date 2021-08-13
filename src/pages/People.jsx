import React from "react";
import PeopleCard from "../components/PeopleCard";
import iu from "../assets/event_logos/iu.jpg"
const People = () => {
  return (
    <div className="lg:flex lg:flex-wrap justify-center">
      <PeopleCard animDur={800} name="Miss S. Sneha" desig="President" phone="6381484247" photo={iu} />
      <PeopleCard animDur={850} name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard animDur={900} name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard animDur={950} name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard animDur={1000} name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard animDur={1050} name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
    </div>
  );
};

export default People;
