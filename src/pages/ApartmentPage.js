import useFetch from "../hooks/useFetch";

import ErrorPage from "../pages/ErrorPage";
import {
  ApartmentDescription,
  ApartmentEquipment,
  ApartmentInfo,
  Carousel,
  NavHeader,
} from "../components";
import "../styles/apartment.scss";
import { useParams } from "react-router";
import FooterPage from "../components/PageFooter";

const ApartmentPage = () => {
  const { id } = useParams();
  const { response } = useFetch(`http://localhost:5000/api/appartement/${id}`);
  const apartment = response.data;

  if (response.data && response.loading === false) {
    if (response.data.length <= 0) {
      return <ErrorPage />;
    }
  }

  return (
    <div className='apartment-page-container'>
      <nav>
        <NavHeader />
      </nav>
      {apartment && (
        <div>
          {apartment.map((x, i) => {
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
              <main className='apart-main' key={`apart-${id}`}>
                <Carousel key={`carousel-${key}-${i}`} pictures={pictures} />
                <ApartmentInfo
                  key={key}
                  title={title}
                  location={location}
                  host={host}
                  rating={rating}
                  tags={tags}
                />
                <div className='dropdown-container'>
                  <ApartmentDescription description={description} />
                  <ApartmentEquipment equipments={equipments} />
                </div>
              </main>
            );
          })}
        </div>
      )}
      <FooterPage />
    </div>
  );
};

export default ApartmentPage;
