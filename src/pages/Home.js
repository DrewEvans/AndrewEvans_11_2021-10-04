import useFetch from "../hooks/useFetch";
import { ApartmentCard, NavHeader, PageFooter } from "../components/index";
import MainBanner from "../components/MainBanner";
import "../styles/home.scss";

const Home = () => {
  const { response } = useFetch(`http://localhost:5000/api/data`);
  const apartments = response.data;

  return (
    <>
      <nav>
        <NavHeader />
      </nav>
      <MainBanner />
      {apartments && (
        <main className='home-main'>
          <div className='cards-container'>
            {apartments.map((x) => {
              const {
                title,
                location,
                cover,
                pictures,
                host,
                equipments,
                ratings,
                tags,
                id,
              } = x;
              return (
                <>
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
                </>
              );
            })}
          </div>
        </main>
      )}
      <footer>
        <PageFooter />
      </footer>
    </>
  );
};

export default Home;
