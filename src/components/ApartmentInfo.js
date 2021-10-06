const ApartmentInfo = ({ title, location, host, ratings, tags }) => {
  console.log(title);
  console.log(location);
  console.log(host);
  console.log(ratings);
  console.log(tags);
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

export default ApartmentInfo;
