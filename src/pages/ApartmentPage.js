import useFetch from "../hooks/useFetch";

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
              rating,
              tags,
              id,
              key,
            } = x;
            return (
              <main>
                <Carousel pictures={pictures} />
                <ApartmentInfo
                  key={key}
                  title={title}
                  location={location}
                  host={host}
                  rating={rating}
                  tags={tags}
                />
              </main>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ApartmentPage;
