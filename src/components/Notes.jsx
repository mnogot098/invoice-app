const Notes = ({ notes }) => {
    return (
        <>
            <section className="my-5">
                <label className="border-b-2 border-black text-black">Notes:</label>
                <p className="text-justify">{notes}</p>
            </section>
        </>
    );
};

export default Notes;
