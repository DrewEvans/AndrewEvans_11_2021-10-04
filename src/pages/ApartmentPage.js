import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { ApartmentInfo, Carousel } from "../components";

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
              location,
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
                <Carousel pictures={pictures} />
                <ApartmentInfo
                // title={title}
                // location={location}
                // host={host}
                // ratings={ratings}
                // tags={tags}
                />
                <ul></ul>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ApartmentPage;
