import React from "react";
import PeopleCard from "../components/PeopleCard";
import president from "../assets/organisers_photo/president.jpeg";
import vice_president from "../assets/organisers_photo/vice_president.png";
import muthusenthil_sir from "../assets/organisers_photo/muthusenthil_sir.png";
import venkatesh_sir from "../assets/organisers_photo/venkatesh_sir.png"
const People = () => {
  return (
    <div className="lg:flex lg:flex-wrap justify-center">
      <PeopleCard
        animDur={900}
        name="Miss S. SNEHA"
        desig="President"
        phone="6381484247"
        photo={president}
        insta="https://instagram.com/_snehasakthivel_?utm_medium=copy_link"
      />
      <PeopleCard
        animDur={950}
        name="Miss E. NIHARIKA"
        desig="Vice President"
        phone="9486244926"
        photo={vice_president}
        insta="https://instagram.com/_n.i.h.a___?utm_medium=copy_link"
      />
      <PeopleCard
        animDur={1050}
        name="Dr. B. MUTHUSENTHIL"
        desig="Assistant Professor"
        phone="9841898449"
        photo={muthusenthil_sir}
        insta=""
      />
      <PeopleCard
        animDur={1200}
        name="Mr. S. VENKATESH"
        desig="Assistant Professor"
        phone="9791099318"
        photo={venkatesh_sir}
        insta=""
      />
    </div>
  );
};

export default People;
