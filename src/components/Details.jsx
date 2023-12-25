const Details = ({name,adress}) => {
    return (
        <>
        <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-2xl uppercase">{name}</h2>
          <p>{adress}</p>
        </section>
        </>
    )
}

export default Details;