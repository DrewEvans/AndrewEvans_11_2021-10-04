const ApartmentCard = ({
  title,
  cover,
  pictures,
  description,
  host,
  equipments,
  ratings,
  tags,
  id,
}) => {
  return (
    <>
      <img src={cover} />
      <h1>{title}</h1>
    </>
  );
};
export default ApartmentCard;
