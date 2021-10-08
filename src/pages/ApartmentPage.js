import useFetch from "../hooks/useFetch";

import {
  ApartmentDescription,
  ApartmentEquipment,
  ApartmentInfo,
  Carousel,
  NavHeader,
  PageFooter,
} from "../components";
import "../styles/apartment.scss";

const ApartmentPage = (props) => {
  const { location } = props;
  const id = location.pathname.replace("/appartement/", "");
  const { response } = useFetch(`http://localhost:5000/api/appartement/${id}`);
  const apartment = response.data;

  return (
    <>
      <nav>
        <NavHeader />
      </nav>
      {apartment && (
        <div>
          {apartment.map((x) => {
            const {
              title,
              location,
              pictures,
              description,
              host,
              equipments,
              rating,
              tags,
              key,
            } = x;
            return (
              <main className='apart-main'>
                <Carousel pictures={pictures} />
                <ApartmentInfo
                  key={key}
                  title={title}
                  location={location}
                  host={host}
                  rating={rating}
                  tags={tags}
                />
                <ApartmentDescription description={description} />
                <ApartmentEquipment equipments={equipments} />
              </main>
            );
          })}
        </div>
      )}
      <PageFooter />
    </>
  );
};

export default ApartmentPage;
