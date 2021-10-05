import useFetch from "../hooks/useFetch";

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
