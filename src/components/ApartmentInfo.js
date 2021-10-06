const ApartmentInfo = ({ title, location, host, rating, tags }) => {
  console.log(title);
  console.log(location);
  console.log(host);
  console.log(rating);
  console.log(tags);

  return (
    <>
      <section>
        <div>
          <h2>{title}</h2>
          <h3>{location}</h3>
          {tags.map((x) => (
            <li>{x}</li>
          ))}
        </div>
        <div>
          <h4>{host.name}</h4>
          <img src={host.picture} />
        </div>
      </section>
    </>
  );
};

export default ApartmentInfo;
