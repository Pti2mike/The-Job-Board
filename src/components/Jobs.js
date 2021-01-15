import React from "react";
import Job from "./Job";

const Jobs = () => {
  return (
    <div className="wrapper">
      <section>
        <Job
          className="container"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI - "
          country=" Australie - "
          city=" Sydney"
        />

        <Job
          className="container1"
          title="Full Agent de Sécurité - Pantin"
          contractType="CDI - "
          country="France - "
          city="Pantin"
        />

        <Job
          className="container2"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD - "
          country="France -"
          city="Paris"
        />

        <Job
          className="container3"
          title="Chef de Projets"
          contractType="CDD - "
          country="France - "
          city="Paris"
        />

        <Job
          className="container4"
          title="Développeur React.js"
          contractType="CDI - "
          country="France - "
          city="Paris"
        />

        <Job
          className="container"
          title="Sales Associate Stockholm"
          contractType="CDI - "
          country="Suède - "
          city="Stockholm"
        />

        <Job
          className="container1"
          title="Vendeur/se - Crans Montana"
          contractType="CDI - "
          country="Suisse - "
          city="Crans-Montana"
        />

        <Job
          className="container2"
          title="CRM & Data Quality Analyst"
          contractType="CDI - "
          country="USA - "
          city="New York"
        />

        <Job
          className="container3"
          title="Infirmier (H/F)"
          contractType="CDI - "
          country="France -"
          city="Pantin"
        />
      </section>
    </div>
  );
};

export default Jobs;
