import useFetch from "../hooks/useFetch";
import { ApartmentCard, NavHeader, PageFooter } from "../components/index";
import MainBanner from "../components/MainBanner";

const Home = () => {
  const { response } = useFetch(`http://localhost:5000/api/data`);
  const apartments = response.data;

  return (
    <>
      <NavHeader />
      <MainBanner />
      {apartments && (
        <div>
          {apartments.map((x) => {
            const {
              title,
              location,
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
                <ApartmentCard
                  key={id}
                  title={title}
                  location={location}
                  cover={cover}
                  pictures={pictures}
                  host={host}
                  equipments={equipments}
                  ratings={ratings}
                  tags={tags}
                  id={id}
                />
                <p>{title}</p>
                <p>{description}</p>
              </>
            );
          })}
        </div>
      )}
      <PageFooter />
    </>
  );
};

export default Home;
