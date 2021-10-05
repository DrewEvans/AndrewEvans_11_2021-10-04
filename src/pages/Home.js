import useFetch from "../hooks/useFetch";
import { ApartmentCard } from "../components/index";

const Home = (props) => {
  const { response } = useFetch(`http://localhost:5000/api/data`);
  const apartments = response.data;

  return (
    <>
      {apartments && (
        <div>
          {apartments.map((x) => {
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
                <ApartmentCard
                  key={id}
                  title={title}
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
    </>
  );
};

export default Home;
