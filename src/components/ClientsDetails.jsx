const ClientDetails = ({name,clientAdress}) => {
  return (
    <>
      <section className="mt-5">
        <h2 className="text-2xl uppercase font-bold">{name}</h2>
        <h2>{clientAdress}</h2>
      </section>
    </>
  );
};

export default ClientDetails;
