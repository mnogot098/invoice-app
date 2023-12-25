const Dates = ({ invoiceNumber, invoiceDate, dueDate }) => {
  return (
    <>
      <article className="my-5 flex flex-col items-end jusify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold ">Invoicer number: </span>
            {invoiceNumber}
          </li>
          <li className="bg-gray-100 p-1">
            <span className="font-bold">Invoice date: </span>
            {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due date: </span>
            {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
