import React from "react";
import PeopleCard from "../components/PeopleCard";
import iu from "../assets/event_logos/iu.jpg"
const People = () => {
  return (
    <div className="lg:flex lg:flex-wrap justify-center">
      <PeopleCard name="Miss S. Sneha" desig="President" phone="6381484247" photo={iu} />
      <PeopleCard name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
      <PeopleCard name="Miss Someone" desig="Designation" phone="1234567890" photo={iu}/>
    </div>
  );
};

export default People;
