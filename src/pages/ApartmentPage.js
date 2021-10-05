import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";

const ApartmentPage = (props) => {
  const { location } = props;
  const id = location.pathname.replace("/appartement/", "");
  const { response } = useFetch(`http://localhost:5000/api/appartement/${id}`);
  const apartment = response.data;

  return (
    <>
      {apartment && (
        <div>
          {apartment.map((x) => {
            const {
              title,
              cover,
              pictures,
              description,
              host,
              equipments,
              ratings,
              tags,
              id,
            } = x;
            return (
              <>
                <h1> Render components Here!!!!</h1>
                <p>{title}</p>
                <p>{description}</p>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ApartmentPage;
